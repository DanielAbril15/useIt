import React from "react";
import Header from "../../Header";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Admins = () => {
  const admin = useSelector((state) => state.userSlice);
  const navigate = useNavigate();
  const handleQrButton = () => {
    navigate("/qr-reader");
  };
  return (
    <article className="user">
      <Header />
      <section className="user-info__container">
        <div>
          <i className="fa-solid fa-user"></i>
        </div>

        <div className="user-info">
          <h3>{admin.name}</h3>
          <p>
            <span>Role: </span>
            {admin.role}
          </p>
          <p>
            <span>email: </span>
            {admin.email}
          </p>
        </div>
      </section>
      <button onClick={handleQrButton}>QR reader</button>
    </article>
  );
};

export default Admins;
