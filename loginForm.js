let loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  e.preventDefault();
  if (!email.value || !password.value) {
    alert("All fiedls area required");
  }
  console.log("Hello", email.value, password.value);
  const user = {
    email: email.value,
    password: password.value,
  };
  const userdata = localStorage.setItem("user", JSON.stringify(user));
  document.location.href = "/";
});
