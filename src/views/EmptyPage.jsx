import React from "react";
import { Link } from "react-router-dom";
import "../styles/EmptyPage.scss";

export const EmptyPage = (props) => {
  return (
    <div className="emptyPage">
      <h1>{props.h1}</h1>
      <p>{props.extraInfo}</p>
      <Link to={props.link}>
        <button className="btn btn-outline-primary">{props.btnText}</button>
      </Link>
    </div>
  );
};
