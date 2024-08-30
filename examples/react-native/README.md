# NxDB React example

This is an example usage of NxDB with React-native. It implements a simple heroes-list which can be filled by the user.

## Syncing

For database replication and syncing you will need to input a public ip address as the app simulators will have a different context for `localhost`. One simple way is to run a server locally and expose the port via [tunnelmole](https://tunnelmole.com/docs), a free and open source tunneling tool, or [ngrok](https://ngrok.com/), a popular closed source tunneling tool.

## Try it out

1. [follow installation instructions](https://reactnative.dev/docs/environment-setup) to setup your react-native environment (follow instructions for Expo)
1. clone the whole [NxDB-repo](https://github.com/nxpkg/nxdb)
1. go into project `cd nxdb`
1. run `npm install`
1. go to this folder `cd examples/react-native`
1. run `npx yarn install`
1. run `npm start`
   * to run on ios or android specific emulators use `npm run ios` and `npm run android` respectively

* It use current version NxDB (see preinstall script). Tested with nxdb@12.7.16
## Screenshot

![Screenshot](docfiles/screenshot.png?raw=true)
![Android](docfiles/android.png?raw=true)


## Related

- [Comparison of React Native Databases](https://nxpkg.github.io/nxdb/react-native-database.html)
