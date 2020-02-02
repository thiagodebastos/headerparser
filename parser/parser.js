module.exports = function makeWhoAmI(req = {}) {
  return {
    language: req.headers["accept-language"],
    ipaddress: req.ip,
    software: req.headers["user-agent"]
  };
};
