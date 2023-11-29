const userId = localStorage.getItem("user_id");
const token = localStorage.getItem("token");
const userRole = localStorage.getItem("role");

export const checkUserRole = (role) => {
  if (userId == null && token == null) {
    redirectTo("/");
    logMessage("Unauthorized: No Auth Verifier");
  } else {
    if (role == "admin") {
      handleAdminRole();
    } else {
      handleUserRole();
    }
  }
}

const redirectTo = (path) => {
  window.location.replace(path);
}

const logMessage = (message) => {
  console.log(message);
}

const handleAdminRole = () => {
  if (userRole == "admin") {
    logMessage("Authorized: " + userRole);
  } else {
    logMessage("Unauthorized: " + userRole);
    redirectTo("/dashboard");
  }
}

const handleUserRole = () => {
  if (userRole == "admin") {
    logMessage("Unauthorized: " + userRole);
    redirectTo("/dashboard");
  } else {
    logMessage("Authorized: " + userRole);
  }
}
