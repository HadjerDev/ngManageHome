// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig:{
    apiKey: "AIzaSyCmiKbZ4CDgzGpsxa7bgliAHYBMeV6ZGP0",
    authDomain: "ng-manage-home.firebaseapp.com",
    databaseURL: "https://ng-manage-home.firebaseio.com",
    projectId: "ng-manage-home",
    storageBucket: "ng-manage-home.appspot.com",
    messagingSenderId: "613221220274"
  }
}
