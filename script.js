let messages = [];

fetch("data/messages.json")
.then(res => res.json())
.then(data => messages = data);

function showMessage() {

  const name = document.getElementById("username").value;

  if(!name) {
    alert("اكتب اسمك أولاً");
    return;
  }

  const random =
    messages[Math.floor(Math.random() * messages.length)];

  document.getElementById("welcome").innerText =
    `ازيك يا ${name}،دي رساله ليك ❤️`;

  document.getElementById("message").innerText =
    random.text;

  document.getElementById("result").classList.remove("hidden");
}

function shareMessage() {
  const text = document.getElementById("message").innerText;

  navigator.clipboard.writeText(text);
  alert("تم نسخ الرسالة ❤️");
}