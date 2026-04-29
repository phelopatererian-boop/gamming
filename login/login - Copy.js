const Button = document.querySelector('.submit');
const Name = document.querySelector('.Name');
const Email = document.querySelector('.Email');
const Password = document.querySelector('.password');

Button.addEventListener("click", function () {

  if (Name.value === "" || Email.value === "" || Password.value === "") {
    window.alert("Write your information please");
      return;
  }
  if (!Email.value.includes('@')) {
    window.alert("Invalid email address. Please include an @ character.");
  return;
  }
  if (Password.value.length < 6) {
  window.alert("Password must be at least 6 characters");
  return;
}
else{
  // لو كل حاجة تمام
  window.alert("تم التسجيل بنجاح ");
    window.location.href = "index.html";
}
});
function togglePassword() {
  Password.type = Password.type === "password" ? "text" : "password";
}