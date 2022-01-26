const fs = require('fs')
const os = require('os')
const { DateTime } = require('luxon')

const currentDate = DateTime.now().toFormat('MMMM dd, yyyy')
const currentTime = DateTime.local().toFormat('HH:mm')

fs.writeFileSync(
  `./files/${process.argv[2]}.txt`,
  `
System information:
Your system is running on ${process.platform}.
Your node version is ${process.version}.

Your computer has ${os.cpus().length} cores.
Your computer has ${os.totalmem()} bytes of memory.
Your computer has ${os.freemem()} bytes of free memory.

IP addresses:
Your private IP address is ${
    os.networkInterfaces().eth.find((x) => x.family === 'IPv4').address
  }.

File created on ${currentDate} at ${currentTime}.
 `
)
