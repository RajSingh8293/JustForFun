const getUserData = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const login = document.getElementById("login");
  const avatar = document.getElementById("avatar");
  console.log("user :", user);
  if (user?.email) {
    avatar.style.display = "block";
    avatar.innerHTML = ` <a href="/">${user.email.slice(0, 1)}</a>`;
  } else {
    login.style.display = "block";
  }
};

getUserData();
