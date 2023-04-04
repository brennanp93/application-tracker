const express = require("express");
const router = express.Router();
const jobListCtrl = require("../../controllers/api/joblist");
const ensureLoggedIn = require("../../config/ensureLoggedIn");

// All paths start with '/api/users'

// GET /api/joblist
router.get("/", jobListCtrl.index);

//POST /api/joblist
router.post("/", jobListCtrl.create)

// Delete /api/joblist/id
router.delete(`/:id`, ensureLoggedIn, jobListCtrl.delete)

//Edit Job Information
router.put('/:id/update', jobListCtrl.update)

//Update Stage
router.put('/:id', ensureLoggedIn, jobListCtrl.updateStage)
// POST /api/users/login
// router.post("/login", usersCtrl.login);

module.exports = router;
