const form = document.querySelector("#create-task-form")

const ul = document.querySelector("#tasks")

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const input = document.querySelector("#new-task-description")
  const li = document.createElement("li");
  li.textContent = input.value;
  ul.append(li);
  console.log(input.value);
  const btn = document.createElement("button");
  btn.textContent = "x";
  li.append(btn);

  btn.addEventListener('click', () => {
    btn.remove();
    li.remove();
  })
})
































// const task = document.querySelector("#new-task-description")
// const submit = document.querySelector("#create-task-form")
// 
// document.addEventListener("DOMContentLoaded", () => {
  // document.querySelector("form").addEventListener("submit", (e) => {
    // e.preventDefault();
    // console.log(task.value)
    // console.log(e.target.submit.value)
  // })
// });
// 
