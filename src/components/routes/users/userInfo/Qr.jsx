import React, { useEffect, useState } from "react";
import Header from "../../../Header";
import QRCode from "react-qr-code";
import { useSelector } from "react-redux";
import "../../../styles/qr.css";

const Qr = () => {
  const user = useSelector((state) => state.userSlice);
  const [latLon, setLatLon] = useState();
  console.log(latLon);
  useEffect(() => {
    function success(pos) {
      setLatLon(pos.coords);
    }
    function error(err) {
      console.warn("ERROR(" + err.code + "): " + err.message);
    }
    navigator.geolocation.getCurrentPosition(success, error);
  }, []);
  return (
    <article className="qr__container">
      <Header />
      <section className="qr">
        <QRCode
          value={`Employee: ${user.name}, Role: ${user.role}, Email:  ${user.email}, Latitude: ${latLon?.latitude}, Longitude:  ${latLon?.longitude}`}
        />
        Your QR
      </section>
    </article>
  );
};

export default Qr;
