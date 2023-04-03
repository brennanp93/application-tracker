import sendRequest from "./send-request";
const BASE_URL = './api/joblist'

export async function getAll() {
  return sendRequest(BASE_URL)
}

export async function create(jobListData) {
  return sendRequest(BASE_URL, "POST", jobListData)
}