import "./App.css";
import React from "react";
const tg = window.Telegram.WebApp;

function App() {
  const onClose = () => {
    tg.close();
  };

  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className="App">
      <h1>App</h1>
      <button onClick={onclose}>Zakrit</button>
    </div>
  );
}

export default App;
