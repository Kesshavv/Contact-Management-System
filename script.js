function selectContact(element, name) {
  let contacts = document.querySelectorAll(".contact");
  contacts.forEach(c => c.classList.remove("active"));

  element.classList.add("active");

  document.getElementById("name").innerText = name;
}