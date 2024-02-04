import axios from "axios";

/**
 * POST request to localhost server (running on port:5500)
 * @param {string} endpoint should be a string corresponding to the correct server endpoint
 * Current GET Request Endpoints:
 * - traceroute: {body.data: {data: string}}
 * - local_state
 * @returns the Post request object
 */
async function expressPostAPI(endpoint, data) {
  console.log("express api called with Endpoint: ", endpoint, "\nData: ", data)
  try {
    const response = await axios.post(
      `http://localhost:5500/${endpoint}`,
      { data: data },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response;
  } catch (error) {
    console.error(
      `Error: unable to get the requested information from the server.`,
      error
    );
  }
}

export default expressPostAPI;
