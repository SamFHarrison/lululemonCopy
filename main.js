/* DECLARATIONS */

/* Nav bar dropdown on click */
const navDropdown = document.getElementById("dropdown");
const navDropdownButton = document.getElementById("dropdown-button");
const navDropdownMenu = document.getElementById("dropdown-menu");


/* FUNCTIONS */

/* Nav bar dropdown on click */
document.addEventListener("click", event => {
  const isDropdownButton = event.target.matches("#dropdown-button")
  const isDropdownMenu = event.target.matches("#dropdown-menu")
  const isPromoCategories = event.target.matches("#promo-categories")
  const isAllCategories = event.target.matches("#all-categories")
  const isDropdownActive = navDropdownMenu.matches(".active")

  if (isDropdownButton) {

    if (!isDropdownActive) {
      navDropdownMenu.classList.add("active");
    } else if (isDropdownActive) {
      return
    }
  } else if (!isDropdownButton) {
    if (isDropdownMenu || isAllCategories) {
      return
    } else if (isPromoCategories) {
      return
    } else {
      navDropdownMenu.classList.remove("active");
    }
    
  }
})


