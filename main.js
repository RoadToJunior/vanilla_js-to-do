// const removeTask = (e) => {
//   //   e.target.parentNode.style.textDecoration = "line-through";
//   //   e.target.remove();

//   const index = e.target.dataset.key;
//   document.querySelector(`[data-key="${index}"]`).remove();
// };

// document
//   .querySelectorAll("li button")
//   .forEach((item) => item.addEventListener("click", removeTask));

const input = document.querySelector("#input");
const ul = document.querySelector("ul");
const liElements = document.querySelectorAll("li");
const tasks = [...liElements];

const removeTask = (e) => {
  const searchText = e.target.value.toLowerCase();
};

input.addEventListener("input", removeTask);
