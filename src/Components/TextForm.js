import React, { useState } from "react";
import "./TextForm.css"
export default function TextForm(props) {
  const [text, setText] = useState("");
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }
  const handleSaveToFile = () => {
    const blob = new Blob([text], { type: "text/plain" });
    const anchor = document.createElement("a");
    anchor.download = "my_text_file.txt";
    anchor.href = URL.createObjectURL(blob);
    anchor.click();
  };
  const ClickUpcase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const ClickClear = () => {
    let newText = "";
    setText(newText);
  };
  const Clicklowcase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const ClickRemoveExtraSpaces = () => {
    let newText = text.replace(/\s+/g, " ");
    setText(newText);
  };
  const ClickSentCase = () => {
    let newText = text.replace(/(^\w|\.\s*\w)/g, (match) => match.toUpperCase());
    setText(newText);
  };
  const ClickCopy = () => {
    const textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    document.body.removeChild(textField);
    
    alert("Copied!");
  };
  const handleChange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
    <div className="container">
      <h1>Enter the text to Analyze</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleChange}
    
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-outline-success mx-2" onClick={ClickUpcase}>
        Convert to upper Case
      </button>
      <button className="btn btn-outline-success mx-2" onClick={Clicklowcase}>
        Convert to lower Case
      </button>
      <button className="btn btn-outline-success mx-2" onClick={ClickSentCase}>
        Sentence Case
      </button>
      <button className="btn btn-outline-success mx-2" onClick={ClickCopy}>
        Copy To ClipBoard
      </button>
      <button className="btn btn-outline-success mx-2" onClick={ClickRemoveExtraSpaces}>
          Remove Extra Spaces
        </button>
      <button type="submit" onClick={speak} className="btn btn-success mx-2 my-2">Speak</button>
      <button className="btn btn-outline-success mx-2" onClick={handleSaveToFile}>
  Save to File
</button>
      <button className="btn btn-outline-success mx-2" onClick={ClickClear}>
        Clear
      </button>
    </div>
    <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length} <b>words</b> {text.length} <b>characters</b>
          </p>
    <p>{0.008*text.split(" ").length} <b>Minutes to read</b></p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter the text in above box to preview"}</p>
    </div>
    </>
  );
}
