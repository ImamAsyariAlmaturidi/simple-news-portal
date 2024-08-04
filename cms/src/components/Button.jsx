import React from "react";
import { Link } from "react-router-dom";
const Button = ({buttonName, path}) => {
  return (
    <>
      <Link to={path}>
        <button type="submit" className="btn btn-xl btn-ghost hover:text-orange-600 transition-all">{buttonName}</button>
      </Link>
    </>
  );
};

export default Button;
