import { NuxtAuthHandler } from "#auth";
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
      return true;
    },
    async redirect(r) {
      return r.baseUrl;
    },
    async session({ session, token }) {
      if (!session.access_token && token?.access_token) {
        session.access_token = token.access_token;
      }

      session.work = "Close";
      session.user.name = token.sub;

      if (token.error) session.error = token.error;

      return { session, token };
    },
    async jwt(jwt) {
      if (jwt.account) {
        jwt.token.email = jwt.account.email;
        jwt.token.access_token = jwt.account.access_token;
        if (jwt.account.refresh_token) jwt.token.refresh_token = jwt.account.refresh_token;
        if (jwt.account.expires_at) jwt.token.expires_at = jwt.account.expires_at;
      }

      // if (jwt.profile) {
      //   if (jwt.profile.roles) jwt.token.roles = jwt.profile.roles;
      // }

      if (jwt.token?.expires_at * 1000 < Date.now()) {
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
        } catch (_err) {
          console.error(_err);
        }
      }

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
