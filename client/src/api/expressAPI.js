import axios from "axios";

/**
 * GET request to localhost server (running on port:5500) 
 * @param {string} endpoint should be a string corresponding to the correct server endpoint
 * Current GET Request Endpoints:
 * - pc_resources
 * - local_state
 * @returns the GET request object
 */
async function expressAPI(endpoint) {
  try {
    const response = await axios.get(`http://localhost:5500/${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    console.error(
      `Error: unable to get the requested information from the server.`,
      error
    );
  }
}

export default expressAPI;
