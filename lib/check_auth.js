export default function Auth(username, password) {
  console.log("Checking credentials..."); // Debugging
  console.log("ADMIN_USERNAME:", process.env.NEXT_PUBLIC_ADMIN_USERNAME);
  console.log("ADMIN_PASSWORD:", process.env.NEXT_PUBLIC_ADMIN_PASSWORD);

  if (username === process.env.NEXT_PUBLIC_ADMIN_USERNAME && password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
    return true;
  }
  return false;
}
