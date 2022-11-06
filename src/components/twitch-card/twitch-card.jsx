import React from "react";
import "./twitch-card.css";

/* const subtitle = document.getElementsByClassName("card-subtitle")[0];

const createWord = (text, index) => {
  const word = document.createElement("span");

  word.innerHTML = `${text}`;

  word.classList.add("card-subtitle-word");

  return word;
};

const addWord = (text, index) => subtitle.appendChild(createWord(text, index));

const createSubtitle = (text) => text.split(" ").map(addWord); */

const subtitle =
  "But in a much more real sense, I have no idea what I'm doing.";

const individualWords = subtitle.split(" ");

const TwitchCard = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="card-content">
          <h3 className="card-title">I know exactly what I'm doing</h3>
          <h4 className="card-subtitle">
            {individualWords.map((word, index = 1) => (
              <span
                key={index}
                style={{ transitionDelay: `${index * 40} ms` }}
                className="card-subtitle-word"
              >
                {word}
              </span>
            ))}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default TwitchCard;
