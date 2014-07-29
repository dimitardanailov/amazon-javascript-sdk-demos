// Load Amazon modules
module.exports = function() {
  // Load Amazon SDK
  var AWS = require('aws-sdk');

  // Set your Amazon Region
  AWS.config.region = 'eu-west-1'; // EU(Ireland);

  /*** Load Amazon examples ***/

  // EC2
  require('./examples/EC2/create-instance.js')(AWS);

  // S3
  //require('./examples/S3/createS3Bucket.js')(AWS);
  require('./examples/S3/listing_buckets.js')(AWS);
  /*** Load Amazon examples ***/
};

