import { NuxtAuthHandler } from "#auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";

export default NuxtAuthHandler({
  debug: false,
  origin: "http://localhost:3000",
  baseURL: "http://localhost:3000",
  pages: {
    // Change the default behavior to use `/login` as the path for the sign-in page
    signIn: "/login"
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      // console.log(
      //   "Sign-in Callback - Params: { user: %o, account: %o, profile: %o, email: %o, credentials: %o }",
      //   user,
      //   account,
      //   profile,
      //   email,
      //   credentials
      // );
      return true;
    },
    async redirect(r) {
      // console.log("Redirect Callback - Params: { url: %o, baseUrl: %o }", url, baseUrl);
      return r.baseUrl;
    },
    async session({ session, token }) {
      // console.log("Session: %o", session);

      if (!session.access_token && token?.access_token) {
        session.access_token = token.access_token;
      }

      session.work = "Close";
      session.user.name = token.sub;

      if (token.error) session.error = token.error;

      return { session, token };
    },
    async jwt(jwt) {
      // console.log("JWT Callback Original: %o", jwt);

      jwt.token.work = "JWT";

      if (jwt.account) {
        jwt.token.email = jwt.account.email;
        jwt.token.access_token = jwt.account.access_token;
        if (jwt.account.id_token) jwt.token.id_token = jwt.account.id_token;
        // if (jwt.account.refresh_token) jwt.token.refresh_token = jwt.account.refresh_token;
        if (jwt.account.expires_at) jwt.token.expires_at = jwt.account.expires_at;
      }

      if (jwt.profile) {
        if (jwt.profile.roles) jwt.token.roles = jwt.profile.roles;
      }

      if (jwt.token?.expires_at * 1000 < Date.now()) {
        // console.log("Access token expired");
        // console.log({
        //   client_id: "messaging-client",
        //   client_secret: "secret",
        //   grant_type: "refresh_token",
        //   // client_id: process.env.GOOGLE_ID,
        //   // client_secret: process.env.GOOGLE_SECRET,
        //   refresh_token: jwt.token.refresh_token || ""
        // });
        try {
          const url =
            `http://localhost:9000/oauth2/token?` +
            new URLSearchParams({
              client_id: "messaging-client",
              client_secret: "secret",
              grant_type: "refresh_token",
              refresh_token: jwt.token.refresh_token,
              scope: "openid"
            });

          const response = await fetch(url, {
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            method: "POST"
          });

          const r = await response.json();

          if (r.access_token) {
            jwt.token.access_token = r.access_token;
          }

          if (r.refresh_token) {
            jwt.token.refresh_token = r.refresh_token;
          }

          // console.log("JWT Token Refreshed: %o", jwt.token);
        } catch (err) {
          console.warn(err);
        }
      }
      // if (jwt.user?.id) jwt.token.name = jwt.user.id;

      // if (jwt?.account?.access_token) {
      //   console.log("Access Token: %s", jwt.account.access_token);

      //   jwt.token.accessToken = jwt.account.access_token;
      // }
      // console.log("JWT Callback Updated: %o", jwt);

      return jwt.token;
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
      name: "Oidc",
      type: "oauth",
      clientId: "messaging-client",
      clientSecret: "secret",
      wellKnown: "http://localhost:9000/.well-known/openid-configuration",
      authorization: { params: { scope: "openid profile" } },
      scope: "openid profile message.read",
      checks: ["pkce", "state"],
      idToken: true,
      profile(profile, ...args) {
        console.log("Profile: %o", profile);
        console.log("Args: %o", args);
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
