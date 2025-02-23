require("dotenv").config();
export default function Auth(username,password){
  console.log('USER NAME IS JOHN');
  console.log(process.env.ADMIN_USERNAME);
  console.log(process.env.ADMIN_PASSWORD);
  if(username === process.env.ADMIN_USERNAME || password === process.env.ADMIN_PASSWORD){
     return true;
  } else {
    return false;
  }
} 