module.exports = function(AWS) {

  // Create a S3 bucket
  // Bucket name must be unique !!!
  var s3bucket = new AWS.S3({params: { Bucket: 'cloudConfBucket' }});

  s3bucket.createBucket(function() {
    var data = {Key: 'myKey', Body: 'Hello!'};

    // Try to add a new Bucket item
    s3bucket.putObject(data, function(error, data) {
      if (!error) {
        console.log("Successfully uploaded data to myBucket/myKey");
      } else {
        console.log("Error uploading data:", error);
      }
    });
  });

};

