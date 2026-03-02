const app = require('./src/app');


require('dotenv').config();

const ConnectToDB = require('./src/config/database');

ConnectToDB();

app.listen(3000,()=>{
  console.log('Server started on server 3000');
})
