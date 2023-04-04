import sendRequest from "./send-request";
const BASE_URL = "/api/joblist";

export async function getAll() {
  return sendRequest(BASE_URL);
}

export async function create(jobListData) {
  return sendRequest(BASE_URL, "POST", jobListData);
}

export async function deleteJob(id) {
  return sendRequest(`${BASE_URL}/${id}`, "DELETE");
}

export async function editJob(updatedJobListData, id) {
  console.log(updatedJobListData, "joblist api");
  return sendRequest(`${BASE_URL}/${id}/update`, "PUT", updatedJobListData);
}
