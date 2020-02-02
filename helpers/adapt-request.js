module.exports = function adaptRequest(req = {}) {
  return Object.freeze({
    path: req.path,
    method: req.method,
    pathParams: req.params,
    queryParams: req.query,
    ip: req.ip,
    body: req.body,
    headers: req.headers
  });
};
