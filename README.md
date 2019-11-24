## Callsign technical test
### Author: David Roberts (David.j.roberts303@gmail.com)

#### Installation and running:
* Tested on Node.js v12.7.0, Yarn 1.17.3 & Chrome 78.x
* `yarn && yarn start`
* http://localhost:3000

#### Notes on implementation

* I have used a basic EsLint config for clean JavaScript code.
* The use a react-suspense is a simply way to fetch data. However a more complete & scalable solution would be to use Redux state management with redux-observable / Redux sagas as middleware to manage async operations .
* Ideally would build behaviour driven unit tests for each other components. Testing them in each in isolation
* Some work need to be done on the CSS for a true responsive solution for mobile. I have not complete tis fully by any means.
* CSS modules would be ideal for scoping CSS to a given component.
* The dates used in this application are not formatted. An i18 service for this would be ideal.