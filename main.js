const removeItem = () => {
  console.log("ok");
};

document
  .querySelectorAll("li")
  .forEach((item) => item.addEventListener("click", removeItem));
