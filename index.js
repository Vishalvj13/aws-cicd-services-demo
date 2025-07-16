exports.handler = async (event) => {
  console.log("Hello from CI/CD Lambda!");
  return {
    statusCode: 200,
    body: "Deployed via CodePipeline2!"
  };
};
