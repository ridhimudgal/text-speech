let speech = new SpeechSynthesisUtterance();



document.querySelector("#listenBtn").addEventListener("click", ()=>{
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});
