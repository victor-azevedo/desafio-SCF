const data = require("../../mock/fakeData");

module.exports = function (req, res) {
  const name = req.body.name;
  const jov = req.body.job;

  const newUser = {
    name: name,
    job: job,
  };

  data.push(newUser);

  res.send(newUser);
};