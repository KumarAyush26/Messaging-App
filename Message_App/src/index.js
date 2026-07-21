import "./styles.css";
const { createMessage, renderMessages } = require("./chat.js");

const messageList = document.getElementById("message-list");
const form = document.getElementById("message-form");
const input = document.getElementById("message-input");

const initialMessages = [
  createMessage("Welcome to your new messaging app!", "other"),
  createMessage("Type a message and press send.", "me"),
];

renderMessages(initialMessages, messageList);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = input.value.trim();

  if (!text) {
    return;
  }

  const newMessage = createMessage(text, "me");
  renderMessages([newMessage], messageList);
  input.value = "";
  messageList.scrollTop = messageList.scrollHeight;
});

