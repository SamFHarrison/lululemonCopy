const navDropdown = document.getElementById("dropdown");
const navDropdownButton = document.getElementById("dropdown-button");
const navDropdownMenu = document.getElementById("dropdown-menu");

document.addEventListener("click", event => {
  const isDropdownButton = event.target.matches("#dropdown-button")
  const isDropdownMenu = event.target.matches("#dropdown-menu")
  const isDropdownActive = navDropdownMenu.matches(".active")
  if (isDropdownButton && !isDropdownActive) {
    navDropdownMenu.classList.add("active");
  } else if (!isDropdownButton && isDropdownActive) {
    navDropdownMenu.classList.remove("active");
  }
})
