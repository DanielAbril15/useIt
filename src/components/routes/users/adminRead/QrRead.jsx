import React, { useState } from "react";
import QrReader from "react-qr-scanner";
import Header from "../../../Header";
import "../../../styles/qrRead.css";
const QrRead = () => {
  const [qr, setQr] = useState();

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
  const handleCamara = {
    facingMode: "enenvironment",
  };
  console.log(qr);
  return (
    <article className="lector__container">
      <Header />
      <QrReader
        style={previewStyle}
        onError={handleError}
        onScan={handleScan}
        facingMode={handleCamara}
      />
      <p className="result">{qr?.text}</p>
    </article>
  );
};

export default QrRead;
