import { useState } from "react";

export default function EmojiPicker2(): JSX.Element {

  const [emoji, setEmoji] = useState("🦊");
  const initialPreviousEmojis: string[] = [];
  const [previousEmojis, setPreviousEmojis] = useState(initialPreviousEmojis);

  function handleChooseEmoji(newEmoji: string) {
    setEmoji(newEmoji);  //ask react to update the state variable it is maintaining for us, and queue rerender. 
    setPreviousEmojis([...previousEmojis, emoji]); // same, taking care to pass a different array, not a mutated one.
  }

  const emojiOptions = ["🦄", "🐥", "🦊", "🐨", "🦑", "🎃"];

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
    Previous ({previousEmojis.length}): {previousEmojis.slice(-5)}
    Current: {emoji}<br />
  </div>
}
