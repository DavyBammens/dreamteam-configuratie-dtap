require('dotenv').config({ path: '/opt/.env' })
const app = require("./app");
const port = process.env.PORT || 3000;

app.listen(port);
console.log("Server running : " + port);
