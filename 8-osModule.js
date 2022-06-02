// 57.50
const os = require("os");

////info about current user
const user = os.userInfo();
console.log(user);

//method returns the system up time.

console.log(`The system up time is : ${os.uptime()} seconds`);

////os related information

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log("Current os info:", currentOS);
