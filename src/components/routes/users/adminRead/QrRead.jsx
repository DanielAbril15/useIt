import React, { useState } from "react";
import QrReader from "react-qr-scanner";
const QrRead = () => {
  const [qr, setQr] = useState({ result: "" });

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
    <div>
      <QrReader
        style={previewStyle}
        onError={handleError}
        onScan={handleScan}
      />
      <p>{qr.result}</p>
    </div>
  );
};

export default QrRead;
