const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  const email1 = document.getElementById("email1").value;
  const email2 = document.getElementById("email2").value;
  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;
  const message = document.getElementById("message").value;
  console.log(firstName);
  if (email1 === email2 && email1 !== "") {
    alert("Thank you for submitting your message!");
  } else if (firstName === "" || lastName === "" || message === "") {
    alert("please fill all required fields!");
  } else {
    alert("Your emails do not match. Please try again!");
  }
});
