const express = require("express");
const handleParserRequest = require("./parser");
const adaptRequest = require("./helpers/adapt-request");

const app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
const cors = require("cors");
app.use(cors({ optionSuccessStatus: 200 })); // some legacy browsers choke on 204

app.use(express.json());
app.use(express.static("public"));

app.get("/", function(_req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/api/whoami", parseRequestController);

const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});

function parseRequestController(req, res) {
  const httpRequest = adaptRequest(req);
  handleParserRequest(httpRequest)
    .then(({ headers, statusCode, data }) =>
      res
        .set(headers)
        .status(statusCode)
        .send(data)
    )
    .catch(_e => res.status(500).end());
}
