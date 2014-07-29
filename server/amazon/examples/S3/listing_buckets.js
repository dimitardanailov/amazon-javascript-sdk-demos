module.exports = function(AWS) {

  // Create a new S3 instance
  var s3 = new AWS.S3();

  s3.listBuckets(function(error, data) {
    if (error) {
      console.log("Error for bucket listing", error);
      return;
    }

    for (var index in data.Buckets) {
      var bucket = data.Buckets[index];
      console.log("Bucket:", bucket.Name, ' : ', bucket.CreationDate);
    }
  });
};
