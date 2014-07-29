module.exports = function(AWS) {
  // Create a new EC2 instance
  var ec2 = new AWS.EC2();

  var params = {
    ImageId: 'ami-892fe1fe', // Amazon Linux AMI 2014.03.2 (HVM) 
    InstanceType: 't1.micro',
    MinCount: 1,
    MaxCount: 1
  };

  // Create the instance
  ec2.runInstances(params, function(error, data) {
    if (error) {
      console.log("Could not create instance", error);

      return;
    }

    var instanceId = data.Instances[0].InstanceId;
    console.log("Created instance", instanceId);

    // Add tags to the instance
    params = {Resources: [instanceId], Tags: [
      {Key: 'Name', Value: instanceName}
    ]};

    // Try to create a tags
    ec2.createTags(params, function(error) {
      console.log("Tagging instance", error ? "failure" : "success");
    });
  });
};
