const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobListSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    stage: {
      type: String,
      required: true,
      enum: ["Applied", "Phone Screen", "Interview", "Offer", "Rejected"],
    },
    jobTitle: {
      type: String,
      required: true,
    },
    jobDescription: {
      type: String,
      required: true,
    },
    dateApplied: {
      type: Date,
      required: true,
    },
    companyName: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("JobList", jobListSchema);
