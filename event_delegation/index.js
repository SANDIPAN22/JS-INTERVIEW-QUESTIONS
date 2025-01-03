document.getElementById("grand_parent").addEventListener(
  "click",
  (e) => {
    alert("Grand Parent Clicked!!");
    console.log("From Grand Parent:: ", e.target);
  }
  // true : If I write True here then it will be Event Capturing otherwise Event Bubbling
);

document.getElementById("parent").addEventListener("click", (e) => {
  alert("Parent Clicked!!");
  console.log("From Parent:: ", e.target);
});

document.getElementById("child").addEventListener("click", (e) => {
  alert("Child Clicked!!");
  console.log("From Child:: ", e.target);
});
