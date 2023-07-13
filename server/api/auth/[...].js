import { NuxtAuthHandler } from "#auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";

export default NuxtAuthHandler({
  debug: true,
  pages: {
    // Change the default behavior to use `/login` as the path for the sign-in page
    signIn: "/login"
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log(
        "Sign-in Callback - Params: { user: %o, account: %o, profile: %o, email: %o, credentials: %o }",
        user,
        account,
        profile,
        email,
        credentials
      );
      return true;
    },
    async redirect({ url, baseUrl }) {
      console.log("Redirect Callback - Params: { url: %o, baseUrl: %o }", url, baseUrl);
      return baseUrl;
    },
    async session({ session, token, user }) {
      console.log("Session Callback - Params: { session: %o, token: %o, user: %o }", session, token, user);

      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      console.log(
        "JWT Callback - Params: { token: %o, user: %o, account: %o, profile: %o, isNewUser: %o }",
        token,
        user,
        account,
        profile,
        isNewUser
      );

      return token;
    }
  },
  secret: "super-secret",
  providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    GithubProvider.default({
      clientId: "67459753ac6cc1d52410",
      clientSecret: "2a05d2e5c2262c26a20796d3638483dff3738e77"
    }),
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    CredentialsProvider.default({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "(hint: jsmith)" },
        password: { label: "Password", type: "password", placeholder: "(hint: hunter2)" }
      },
      authorize(credentials) {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // NOTE: THE BELOW LOGIC IS NOT SAFE OR PROPER FOR AUTHENTICATION!
        const user = { id: "1", name: "J Smith", username: "jsmith", password: "hunter2" };
        if (credentials?.username === user.username && credentials?.password === user.password) {
          // Any object returned will be saved in `user` property of the JWT
          return user;
        } else {
          // eslint-disable-next-line no-console
          console.error("Warning: Malicious login attempt registered, bad credentials provided");
          // If you return null then an error will be displayed advising the user to check their details.
          return null;
          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      }
    }),
    {
      id: "oidc",
      userinfo: "http://localhost:9000/userinfo",
      token: "http://localhost:9000/oauth2/token",
      name: "Oidc",
      type: "oauth",
      // idToken: true,
      clientId: "messaging-client",
      clientSecret: "secret",
      wellKnown: "http://localhost:9000/.well-known/openid-configuration",
      authorization: { params: { scope: "openid" } },
      // idToken: true,
      scope: ["openid, message.read"],
      checks: ["pkce", "state"],
      profile(profile) {
        console.log("Profile: %o", profile);
        return {
          id: profile.sub
          // name: profile.name,
          // email: profile.email,
          // image: profile.picture
        };
      }
    }
  ]
});
