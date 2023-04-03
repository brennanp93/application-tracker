const JobList = require("../../models/joblist");

module.exports = {
  index,
  create,
};

async function index(req, res) {
  const entireJobList = await JobList.find({ user: req.user._id });
  console.log(entireJobList)
  res.json(entireJobList)
}

async function create(req, res) {
  req.body.user = req.user._id;
  try {
    const listItem = await JobList.create(req.body);
    res.json(listItem);
  } catch {
    res.status(404);
  }
}
