import React, { useState } from "react";
import QrReader from "react-qr-scanner";
import Header from "../../../Header";
import "../../../styles/qrRead.css";
const QrRead = () => {
  const [qr, setQr] = useState({ result: "No Result" });

  const handleScan = (data) => {
    setQr(data);
  };
  const handleError = (err) => {
    console.log(err);
  };
  const previewStyle = {
    height: 240,
    width: 320,
  };

  return (
    <article className="lector__container">
      <Header />
      <QrReader
        style={previewStyle}
        onError={handleError}
        onScan={handleScan}
      />
      <p className="result">{qr?.result}</p>
    </article>
  );
};

export default QrRead;
