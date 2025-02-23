export default function Auth(username, password) {
  console.log("Checking credentials..."); // Debugging
  console.log("ADMIN_USERNAME:", process.env.ADMIN_USERNAME);
  console.log("ADMIN_PASSWORD:", process.env.ADMIN_PASSWORD);

  if (username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD) {
    return true;
  }
  return false;
}
