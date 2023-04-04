const JobList = require("../../models/joblist");

module.exports = {
  index,
  create,
  delete: deleteItem,
  update,
};

async function index(req, res) {
  const entireJobList = await JobList.find({ user: req.user._id });
  res.json(entireJobList);
}

async function update(req, res, next) {
  try {
    await JobList.findByIdAndUpdate({ _id: req.params.id }, req.body);
    const listItem = await JobList.find({ user: req.user._id });
    console.log(listItem);
    res.json(listItem);
  } catch (err) {
    return next(err);
  }
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

async function deleteItem(req, res) {
  req.body.user = req.user._id;
  const listItem = await JobList.findOneAndDelete(req.params._id);
  res.json(listItem);
}
