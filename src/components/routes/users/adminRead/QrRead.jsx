import React, { useState } from "react";
import QrReader from "react-qr-scanner";
import Header from "../../../Header";
import "../../../styles/qrRead.css";
const QrRead = () => {
  const [qr, setQr] = useState({ result: "", facingMode: environment });

  const handleScan = (data) => {
    setQr({ result: data, facingMode: environment });
  };
  const handleError = (err) => {
    console.log(err);
  };
  const previewStyle = {
    height: 240,
    width: 320,
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
      <p className="result">{qr?.data.text}</p>
    </article>
  );
};

export default QrRead;
