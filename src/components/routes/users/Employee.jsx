import React from "react";
import { useSelector } from "react-redux";
import Header from "../../Header";
import "../../styles/employee.css";

const Employee = () => {
  const employee = useSelector((state) => state.userSlice);

  return (
    <article className="user">
      <Header />
      <section className="user-info__container">
        <div>
          <i className="fa-solid fa-user"></i>
        </div>

        <div className="user-info">
          <h3>{employee.name}</h3>
          <p>
            <span>Role: </span>
            {employee.role}
          </p>
          <p>
            <span>Company: </span>
            {employee.company}
          </p>
          <p>
            <span>email: </span>
            {employee.email}
          </p>
        </div>
      </section>
    </article>
  );
};

export default Employee;
