const filterableCards = document.querySelectorAll(".popular-course-list-element");
const selectElement = document.getElementById("course-select");

const filterCards = () => {
  const selectedCategory = selectElement.options[selectElement.selectedIndex].dataset.name;

  filterableCards.forEach((card) => {
    if (card.dataset.name === selectedCategory || selectedCategory === "all") {
      card.classList.remove("hide");
    } else {
      card.classList.add("hide");
    }
  });
};

selectElement.addEventListener("change", filterCards);
