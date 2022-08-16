import "./App.css";
import image from "./img/simpson.jpg";
import { useState } from "react";

function App() {
  const date = new Date();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  const day = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [time, setTime] = useState(`${hours}:${seconds}`);
  const [dateTime, setDateTime] = useState(
    `${days[day]}, ${months[month]} ${year}`
  );

  const handleInput = () => {
    const botMessage = document.querySelector("#message1");
    const userMessage = document.querySelector("#message2");

    let badwords = ["fuck|bad|stupid|useless|bitch|crazy|nonsense"];
    let words = new RegExp(badwords);
    if (words.test(document.querySelector("#input").value)) {
      botMessage.innerHTML = "Typing...";
      setTimeout(() => {
        botMessage.innerHTML = "Please do not use bad words";
        document.querySelector("#input").value = "";
      }, 2000);
    }

    let welcome = [
      "hi|hello|Hello|hey|sup|yo|wassup|whats up|howdy|greetings|good morning|good afternoon|good evening",
    ];
    let words2 = new RegExp(welcome);
    if (words2.test(document.querySelector("#input").value)) {
      const status = document.querySelector(".status");
      botMessage.innerHTML = "Typing...";
      setTimeout(() => {
        botMessage.innerHTML = "Hello, how are you doing?";
        status.innerHTML = "Active";
        status.style.color = "green";
        document.querySelector("#input").value = "";
      }, 2000);
    }

    let bye = ["bye|Bye|goodbye|see you later|cya|goodnight|goodbye"];
    let words3 = new RegExp(bye);

    if (words3.test(document.querySelector("#input").value)) {
      const status = document.querySelector(".status");
      botMessage.innerHTML = "Typing...";
      setTimeout(() => {
        botMessage.innerHTML = "Bye, have a good one!";
        document.querySelector("#input").value = "";
      }, 2000);

      setTimeout(() => {
        status.innerHTML = "Not active";
        status.style.color = "red";
      }, 5000);
    }

    let thanks = [
      "Thanks|thanks|thank you|thank you very much|Thank you very much",
    ];
    let words4 = new RegExp(thanks);
    if (words4.test(document.querySelector("#input").value)) {
      botMessage.innerHTML = "Typing...";
      setTimeout(() => {
        botMessage.innerHTML = "My pleasure";
        document.querySelector("#input").value = "";
      }, 2000);
    }

    let how = [
      "How are you|how are you doing|how are you doing today|how are you doing today|How are you|how are you",
    ];
    let words5 = new RegExp(how);
    if (words5.test(document.querySelector("#input").value)) {
      const status = document.querySelector(".status");
      botMessage.innerHTML = "Typing...";
      setTimeout(() => {
        botMessage.innerHTML = "I'm good, thank God";
        status.innerHTML = "Active";
        status.style.color = "green";
        document.querySelector("#input").value = "";
      }, 2000);
    }

    userMessage.innerHTML = document.querySelector("#input").value;
  };

  return (
    <div className="App">
      <div className="wrapper">
        <div className="content">
          <div className="header">
            <div className="img">
              <img src={image} />
            </div>
            <div className="right">
              <div className="name">Homer the smart</div>
              <div className="status">Active</div>
            </div>
          </div>
          <div className="main">
            <div className="main_content">
              <div className="messages">
                <div className="bot-message" id="message1"></div>
                <div className="human-message" id="message2"></div>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="btm">
              <div className="input">
                <input
                  type="text"
                  id="input"
                  placeholder="Enter your message..."
                />
              </div>
              <div className="btn">
                <button onClick={handleInput}>Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
