var input = document.getElementById("input");
var btn = document.getElementById("button");
const label = document.getElementById("label");
const ul = document.querySelector(".ul");

btn.addEventListener("click", () => {
  const text = input.value;
  if (text === "") {
    alert(" جای خالی را پر کنید");
    return;
  }
  const li = document.createElement("li");
  li.classList.add("li");
  const checkbox = document.createElement("input");
  checkbox.setAttribute("id", text);
  checkbox.type = "checkbox";
  checkbox.setAttribute("id", "input2");
  const label = document.createElement("label");
  label.setAttribute("id", "label");
  label.innerHTML = text;
  const delatbutton = document.createElement("button");
  delatbutton.innerText = "حذف";
  delatbutton.setAttribute("id", "button2");
  li.appendChild(checkbox);
  li.appendChild(label);
  li.appendChild(delatbutton);
  ul.appendChild(li);
  input.value = " ";

  delatbutton.addEventListener("click", function () {
    delatbutton.parentElement.remove();
  });
  checkbox.addEventListener("click", function () {
    label.classList.toggle("linetext");
  });
});
