const { exec } = require("child_process");

const parseStdout = (stdout) => {
  const lines = stdout.split("\r\n"); // Split the stdout string into lines
  const data = []; // Initialize an empty array to hold the data

  // Iterate over each line
  for (let i = 0; i < lines.length; ++i) {
    const line = lines[i].trim(); // Remove leading and trailing whitespace

    // If the line starts with a number, it's a hop line
    if (line.match(/^\d/)) {
      const parts = line.split(/\s+/); // Split the line into parts by whitespace

      // Create an object with the hop data and add it to the data array
      data.push({
        hop: parts[0],
        ms1: parts[1],
        ms2: parts[3],
        ms3: parts[5],
        ipName: parts[6],
        ip: parts[7] === "*" ? "Request timed out" : parts[7],
      });
    }
  }

  // Now the data array contains the parsed hop data
  console.log(data);
  return data;
};

const wslTraceroute = async (res, destination) => {
  exec("cmd.exe /C tracert " + destination, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return res
        .status(500)
        .json({ message: "Error executing wsl cmd.exe tracert" });
    }

    console.log(`wsl tracert stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);

    return res.status(200).json({
      message: "WSL cmd.exe tracert executed successfully",
      data: stdout,
      parsedData: parseStdout(stdout),
      testination: destination,
      traceType: "tracert",
    });
  });
};

module.exports = wslTraceroute;
