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
let tasks = [...liElements];

const removeTask = (e) => {
  let searchText = e.target.value.toLowerCase();
  tasks = tasks.filter((li) =>
    li.textContent.toLowerCase().includes(searchText)
  );
  ul.textContent = "";
  tasks.forEach((li) => ul.appendChild(li));
};

input.addEventListener("input", removeTask);
