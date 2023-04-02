import React from "react";



import { useNavigate, useLocation } from 'react-router-dom';

export const BackButton =() => {
  const navigate = useNavigate();
  const location = useLocation();

  const isHome = location.pathname === '/';

  const handleOnClick = () => {
    navigate(-1);
  };

  return (
    <div  className="link" onClick={handleOnClick} disabled={isHome}>
      <i className="icon icon-forward" />
    </div>
  );
}