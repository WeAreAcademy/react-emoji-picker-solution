import { useState } from "react";

//Solution to the technical challenge: 
//"BONUS: simplifying to a single useState call"
//Note: this is not necessarily a *better* approach to keeping
//separate pieces of state.

export default function EmojiPicker3(): JSX.Element {

  const initialHistory: string[] = [];

  //Element at end of array will be considered the current one.
  const [emojis, setEmojis] = useState(initialHistory);

  function handleChooseEmoji(newEmoji: string) {
    setEmojis([...emojis, newEmoji]);
  }

  const emojiOptions = ["🦄", "🐥", "🦊", "🐨", "🦑", "🎃"];

  //(may be undefined)
  const currentEmoji = emojis[emojis.length - 1];
  //(may be fewer than 5)
  const last5Emojis = emojis.slice(-6, -1);

  return <div>
    Options: {
      emojiOptions.map((emoji) => (
        <button
          key={emoji}
          onClick={() => handleChooseEmoji(emoji)}
        >{emoji}</button>
      ))
    }
    <br />
    History: {last5Emojis}
    Current: {currentEmoji}
    <br />
  </div>
}
