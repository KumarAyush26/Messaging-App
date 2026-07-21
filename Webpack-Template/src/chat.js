function createMessage(text, sender, timestamp = new Date()) {
  return {
    id: `${sender}-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    text,
    sender,
    timestamp,
  };
}

function formatTime(date) {
  return new Intl.DateTimeFormat("en", {
    hour: "numeric",
    minute: "2-digit",
  }).format(date);
}

function renderMessages(messages, container) {
  const fragment = document.createDocumentFragment();

  messages.forEach((message) => {
    const wrapper = document.createElement("article");
    wrapper.className = `message ${message.sender === "me" ? "mine" : "other"}`;

    const bubble = document.createElement("div");
    bubble.className = "message-bubble";

    const text = document.createElement("p");
    text.textContent = message.text;

    const time = document.createElement("span");
    time.textContent = formatTime(message.timestamp);

    bubble.append(text, time);
    wrapper.appendChild(bubble);
    fragment.appendChild(wrapper);
  });

  container.appendChild(fragment);
}

module.exports = {
  createMessage,
  formatTime,
  renderMessages,
};
