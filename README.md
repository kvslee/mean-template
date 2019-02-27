# MeanTemplate

This is a start template, with which you can begin a MEAN app. A MEAN app uses MongoDB, Express, Angular, and Node.js. So, to make this work, you need to install MongoDB and Node.js on your computer. 

# How to Use
## 1) Download the repository
`$ git clone git@github.com:kvslee/mean-template.git`

## 2) Install packages
`$ npm install`

This will install all pacakges that are specified in the package.json file. 

## 3) Start the backend server (Express)
`$ DEBUG=log:,log_dev: nodemon ./server/bin/www`  (Linux, Mac)

`$ set DEBUG=log:,log_dev: & nodemon ./server/bin/www` (Windows)

Express will build an backend app at the port 3000. Open the app at <http://localhost:3000/api>. You can also test a json reponse at <http://localhost:3000/api/testJson>.

## 4) Start the frontend app (Angular)
`$ npm start`

This command will execute `ng serve`. Angular will build an app in a in-memory development server at the port 4200. The file, `proxy.conf.json` is specified at proxyConfig of angular.json. When you request to http://localhost:4200/api, it will proxy the request to http://localhost:3000/api.


## Build the frontend app for production deployment
`$ npm run build`

This command will execute `ng build --prod --base-href /appName/ --output-path=front`. The build artifacts will be stored in the `front/` directory. You may need to setup 'base-href' as your applicaiton root directory, i.g. `/appName/`. Upload your build to the app root directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help and clarification
Contact me.

