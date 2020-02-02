const makeWhoAmI = require("./parser");

module.exports = function makeParserEndpointHandler() {
  return async function handle(httpResponse) {
    const result = await makeWhoAmI(httpResponse);
    return {
      headers: {
        "Content-Type": "application/json"
      },
      statusCode: 200,
      data: JSON.stringify(result)
    };
  };
};
