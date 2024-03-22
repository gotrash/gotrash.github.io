import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  actions: {
    async LOAD_PROFILE_PICTURE_BLOB(blob) {
      if (this.profilePicture) {
        await new Promise(resolve => {
          try {
            URL.revokeObjectURL(this.profilePicture);
          } catch (e) {
          } finally {
            resolve();
          }
        });

        await new Promise(resolve => {
          this.profilePicture = null;

          resolve();
        });
      }

      this.profilePicture = URL.createObjectURL(blob);
    },
    async FETCH_PROFILE_PICTURE() {
      this.loadingProfilePicture = true;
      // Load Auth Data
      const { getSession } = useAuth();
      const session = await getSession();
      // If the data contains a link to a profile picture
      if (session?.session?.user?.image) {
        // We use the `useApi` composable (ignoring the stupid Nuxt warning about the component already being mounted)
        useApi(session.session.user.image, { responseType: "blob" })
          .then(res => {
            // We take the response which is a blob and load it into the image tags 'src' attribute using an Object URL
            this.LOAD_PROFILE_PICTURE_BLOB(res.data.value);
          })
          .catch(ignored => {
            console.error("There was a problem loading the profile picture. %o", ignored);
          })
          .finally(() => {
            this.loadingProfilePicture = false;
          });
      }
    },
    async UPDATE_PROFILE_PICTURE(file) {
      const { signIn } = useAuth();
      this.loadingProfilePicture = true;

      if (!file) return;

      try {
        console.log("We have a file: %o", file);

        // Load Auth Data

        await new Promise(resolve => setTimeout(resolve, 1000));

        const formData = new FormData();

        formData.append("image", file);

        // this.setUploading(true);

        useApi(`/user/profile/picture`, {
          method: "post",
          body: formData
          // query: _getQuery(),
          // transform: jobParser
        })
          .then(res => {
            console.log("Pinia Response: %o", res);
          })
          .catch(e => {
            console.log("Pinia Error: %o", e);
          })
          .finally(() => {
            this.loadingProfilePicture = false;

            // const route = useRoute();

            // console.log("Route: %o", Object.keys(route));

            // signIn("oidc", { callbackUrl: false });

            // const router = useRouter();
            // router.push(route);
          });
      } catch (e) {
      } finally {
      }
      // if (file) {
      //   this.profilePicture = file;
      // }
      // // If the data contains a link to a profile picture
      // if (session?.session?.user?.image) {
      //   // We use the `useApi` composable (ignoring the stupid Nuxt warning about the component already being mounted)
      //   useApi(session.session.user.image, { responseType: "blob" })
      //     .then(res => {
      //       // We take the response which is a blob and load it into the image tags 'src' attribute using an Object URL
      //       this.LOAD_PROFILE_PICTURE_BLOB(res.data.value);
      //     })
      //     .catch(ignored => {
      //       console.error("There was a problem loading the profile picture. %o", ignored);
      //     })
      //     .finally(() => {
      //       this.loadingProfilePicture = false;
      //     });
      // }
    }
  },
  getters: {
    shouldRememberUser(state) {
      return state.rememberMe;
    }
  },
  state: () => ({
    loadingProfilePicture: true,
    profilePicture: null,
    rememberMe: false
  })
});
