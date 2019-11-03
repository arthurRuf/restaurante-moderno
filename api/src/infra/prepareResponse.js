

module.exports = (data = {}, statusCode=200) => {
  console.log("data", data);
  return {
    statusCode: statusCode,
    headers: {
      "Access-Control-Allow-Origin": "*", // Required for CORS support to work
      "Access-Control-Allow-Credentials": true // Required for cookies, authorization headers with HTTPS
    },
    body: JSON.stringify({
      data: data
    }),
  };
};
