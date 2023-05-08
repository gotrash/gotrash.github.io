export default function ({ $auth }) {
  $auth.onError((error, name, endpoint) => {
    console.error(endpoint);
    console.error(name);
    console.error(name, error, endpoint);
  });

  $auth.onRedirect((to, from) => {
    console.log("Redirecting from %s to %s", from, to);
    // you can optionally change `to` by returning a new value
  });
}
