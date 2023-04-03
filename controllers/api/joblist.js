const JobList = require('../../models/joblist')


module.exports = {
  index,
}

async function index(req,res){
  const entireJobList = await JobList.find({user: req.user._id})
}