import React, { useState } from 'react';
import Footer from "./Footer";
import Header from "./Header";

function App(){
  const [inputValue, setInputValue] = useState('');
  const [qrCodeURL, setQRCodeURL] = useState('');
  const [toastVisible, setToastVisible] = useState(false);

  function generate(){
    const data = inputValue;
    const URL = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${data}`;
    setQRCodeURL(URL);
    showToast();
  };

  function showToast(){
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    }, 2000);
  };

  return (
    <div>
      <Header />
      <div className="content">
       <div className="main">
         <input
          type="text"
          className="input"
          placeholder="Enter URL here"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
         />
         <button className="btn" onClick={generate}>Generate</button>
         <img src={qrCodeURL ? qrCodeURL:"./qr-code.png"} alt="qrcode" className="code" />
        </div>
      
        <div id="toast" className={toastVisible ? "show" : ""}>QR Generated!!</div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
