## How to deploy the project locally
1. Clone the repository ```git clone git@github.com:DannyCarrillo128/capta-test.git```.
2. Install this packages globally: ```npm i -g nodemon typescript```
3. Install dependencies with ```npm i```.
4. Create a ```.env``` file in the root directory and set the variables.
5. Copy and paste the following into your ```.env``` file:
```
PORT=8000
HOLIDAYS_API_URL=https://content.capta.co/Recruitment/WorkingDays.json
```
6. Open a terminal and run ```tsc --watch``` or ```npm run build:dev``` to generate the /dist directory.
7. Open a second terminal window and run ```nodemon dist/app.js``` or ```npm run start:dev``` to start the server.
8. Use [Postman](https://www.postman.com/downloads) to test the server using the following base URL: ```http://localhost:8000/api/businessDays```.
