# aa-best-picture

Instructions

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```
### Complies and hot-reloads the backend Server

```
npm run database

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


Summary

Opted for Node.js and Vue js front-end/back-end to run server as vue both are technologies i have worked with in the past.

First i attempted to consume the API from the front-end using vue. However i was blocked due to "Access-Control-Allow-Origin" error. Attempts at adjusting the settings proved unsuccessful so i opted to make the request from the back end using express.

After pulling the data, i noticed there was a circular reference error. There were a few libraries and methods but for fortunately
Node has a util to inspect and replace those references with [circular] without having to install a library. 

After successfully pulling the data and sending it to the front-end, the next error encountered was a bloated response with status code 
and alot of other network information. Trying to extract the data i needed, i ultimately used regex to remove all the data before the keyword "results"
to extract the object i needed. 

Next issue was the inablilty to JSON parse the data. There were many issues with missing double and single quotes, single quotes where it should be double.
I attempted to find any patterns i could and target those with regex to correct the format. Ultimately at this point i was not able to procceed much further before
exceeding my time. 

