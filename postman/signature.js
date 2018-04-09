// import resources
var crypto = require( "crypto-js" );

// retrieve api_token from PostMan environment variables
var api_token = pm.environment.get( "api_token" );
console.log( "api_token-->" + api_token );

// get milliseconds since 1st jan 1970, then divide an floor it to get seconds
var timestamp = Math.floor(Date.now() / 1000);
console.log( "timestamp-->" + timestamp );

// Tournikoti needs a hash of the concatenation of tournament api_token + current Unix Epoch time, so first concatenate them:
var seed = api_token + timestamp;
console.log( "seed-->" + seed );

// Then hash them with sha 256 (Tournikoti requirement too)
var signature = crypto.SHA256( seed ).toString();
console.log( "signature--·>" + signature );

// set both values to be available as Postman environment variables to include them in our requests headers.
pm.environment.set( "timestamp", timestamp );
pm.environment.set( "signature", signature );
