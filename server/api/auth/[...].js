import { NuxtAuthHandler } from "#auth";

export default NuxtAuthHandler({
  debug: false,
  pages: {
    // Change the default behavior to use `/login` as the path for the sign-in page
    signIn: "/login",
    signOut: "/"
  },
  callbacks: {
    // async signIn({ user, account, profile, email, credentials }) {
    //   console.log("Sign-in Callback");

    //   // console.log(
    //   //   "User: %o; Account: %o; Profile: %o; Email: %s; Credentials: %o",
    //   //   user,
    //   //   account,
    //   //   profile,
    //   //   email,
    //   //   credentials
    //   // );

    //   return true;
    // },
    async redirect(r) {
      // console.log("Redirect Callback");

      return r.baseUrl;
    },
    async session(data) {
      //   data.session.user.name = data.token.name;
      //   data.session.userId = parseInt(parseFloat(data.token.id));
      //   if (data.token.error) data.session.error = data.token.error;
      // console.log("Session Callback: %o", data);
      //   console.log("Session: %o; Token: %o;", session, token);
      return data;
    },
    async jwt(jwt) {
      // console.log("JWT Callback:%o", Object.keys(jwt));
      // console.log("JWT Token: %o", jwt.token);
      // console.log("JWT Session: %o", jwt.session);
      //   console.log("JWT Account: %o", jwt.account);
      //   console.log("JWT Profile: %o", jwt.profile);
      //   console.log("JWT IsNewUser: %o", jwt.isNewUser);
      //   console.log("JWT Trigger: %o", jwt.trigger);
      const config = useRuntimeConfig();
      if (jwt.account) {
        //   //   console.log("JWT Account: %o", jwt.account);
        //   //   jwt.token.id = jwt.profile ? parseInt(parseFloat(jwt.profile.userId)) : null;
        //   //   jwt.token.email = jwt.account.email;
        // jwt.token.id = jwt.profile ? parseInt(parseFloat(jwt.profile.userId)) : null;
        // jwt.token.email = jwt.account.email;
        jwt.token.access_token = jwt.account.access_token;
        if (jwt.account.refresh_token) jwt.token.refresh_token = jwt.account.refresh_token;
        if (jwt.account.expires_at) jwt.token.expires_at = jwt.account.expires_at;
      }

      //   // // if (jwt.profile) {
      //   // //   if (jwt.profile.roles) jwt.token.roles = jwt.profile.roles;
      //   // // }

      if (jwt.token?.expires_at * 1000 < Date.now()) {
        try {
          const url =
            `${config.public.authUrl}/oauth2/token?` +
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
  secret: useRuntimeConfig().public.authSecret,
  providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    {
      id: "oidc",
      name: "OpenID Connect",
      type: "oauth",
      version: "2.0",
      clientId: "messaging-client",
      clientSecret: "secret",
      wellKnown: `${useRuntimeConfig().public.authUrl}/.well-known/openid-configuration`,
      authorization: { params: { scope: "openid profile" } },
      scope: "openid profile message.read",
      checks: ["pkce", "state"],
      idToken: true,
      // signinUrl: `${useRuntimeConfig().public.authUrl}/api/auth/signin/oidc`,
      // callbackUrl: `${useRuntimeConfig().public.authUrl}/api/auth/signin/oidc`,
      profile(profile, tokenSet) {
        console.log("Profile: %o; Token Set: %o", profile, tokenSet);

        return {
          id: profile.userId,
          name: profile.name,
          sub: profile.sub,
          roles: profile.roles,
          image: profile.image
        };
      }
    }
  ]
});
