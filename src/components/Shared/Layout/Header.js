import React, { useState } from "react";
import { BiDonateBlood, BiUserCircle } from "react-icons/bi";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useSelector } from "react-redux";
// Import the RazorpayButton component

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const [data,setData] = useState();
  var temp ;
  if(!user){
     temp = localStorage.getItem("user");
     temp = JSON.parse(temp)
     
  }
  
  const navigate = useNavigate();
  const location = useLocation();

  // logout handler
  const handleLogout = () => {
    localStorage.clear();
    alert("Logout Successfully");
    navigate("/login");
  };

  return (
    <>
    
      <nav className="navbar">
        <div className="container-fluid ">
          <div className="navbar-brand h1 ">
            <BiDonateBlood color="red" /> Blood Bank App
          </div>
          <ul className="navbar-nav flex-row">
            <li className="nav-item mx-3">
              <p className="nav-link">
                {temp ? <img src={temp ?  temp.user.picture : ""} width="40px" height="40px" />  :  <BiUserCircle />}
              
                Welcome{" "}
                {user?.name || user?.hospitalName || user?.organisationName|| temp?.user?.email}
                &nbsp;
                <span className="badge bg-secondary">{user?.role}</span>
              </p>
            </li>
            {location.pathname === "/" || location.pathname === "/admin" ||
            location.pathname === "/donar" ||
            location.pathname === "/hospital" ? (
              
              <li className="nav-item mx-3">
                <Link to="/analytics" className="nav-link">
                  Analytics
                </Link>
              </li>
              
              
            ) : (
                <li className="nav-item mx-3">
                <Link to="/" className="nav-link">
                  Home
                </Link>
                
              </li>
              
              
              
            )}
            
            <li className="nav-item mx-3">
              <button className="btn btn-danger" onClick={handleLogout}>
                Logout
              </button>
            </li>
            
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
