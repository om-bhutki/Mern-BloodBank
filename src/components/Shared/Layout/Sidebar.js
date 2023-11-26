// import React from "react";
// // import { userMenu } from "./Menus/userMenu";
// import { useLocation, Link } from "react-router-dom";
// import { useSelector } from "react-redux";
// import "../../../styles/Layout.css";
// import RazorpayButton from "../../RazorpayPaymentButoon";
// import Analytics from "../../../pages/Dashboard/Analytics";
// const Sidebar = () => {
//   //GET USER STATE
//   const { user } = useSelector((state) => state.auth);

//   const location = useLocation();

//   return (
//     <div>
//       <div className="sidebar">
//         <div className="menu">
        
//           {user?.role === "organisation" && (
//             <>
//               <div
//                 className={`menu-item ${location.pathname === "/" && "active"}`}
//               >
//                 <i className="fa-solid fa-warehouse"></i>
//                 <Link to="/">Inventory</Link>
//               </div>
//               <div
//                 className={`menu-item ${
//                   location.pathname === "/donar" && "active"
//                 }`}
//               >
//                 <i className="fa-solid fa-hand-holding-medical"></i>
//                 <Link to="/donar">Donar</Link>
//               </div>
//               <div
//                 className={`menu-item ${
//                   location.pathname === "/hospital" && "active"
//                 }`}
//               >
//                 <i className="fa-solid fa-hospital"></i>
//                 <Link to="/hospital">Hospital</Link>
//               </div>
//             </>
//           )}
//           {user?.role === "admin" && (
//             <>
//               <div
//                 className={`menu-item ${
//                   location.pathname === "/donar-list" && "active"
//                 }`}
//               >
//                 <i className="fa-solid fa-warehouse"></i>
//                 <Link to="/donar-list">Donar List</Link>
//               </div>
//               <div
//                 className={`menu-item ${
//                   location.pathname === "/hospital-list" && "active"
//                 }`}
//               >
//                 <i className="fa-solid fa-hand-holding-medical"></i>
//                 <Link to="/hospital-list">Hospital List</Link>
//               </div>
//               <div
//                 className={`menu-item ${
//                   location.pathname === "/org-list" && "active"
//                 }`}
//               >
//                 <i className="fa-solid fa-hospital"></i>
//                 <Link to="/org-list">Organisation List</Link>
//               </div>
//             </>
//           )}
//           {(user?.role === "donar" || user?.role === "hospital") && (
//             <div>
//             <div
//               className={`menu-item ${
//                 location.pathname === "/orgnaisation" && "active"
//               }`}
//             >
//               <i className="fa-sharp fa-solid fa-building-ngo"></i>
//               <Link to="/orgnaisation">Orgnaisation</Link>
//             </div>
           
//             </div>
//           )}
//           {user?.role === "hospital" && (
//             <div
//               className={`menu-item ${
//                 location.pathname === "/consumer" && "active"
//               }`}
//             >
//               <i className="fa-sharp fa-solid fa-building-ngo"></i>
//               <Link to="/consumer">Consumer</Link>
//             </div>
//           )}
//           {user?.role === "donar" && (
//             <div
//               className={`menu-item ${
//                 location.pathname === "/donation" && "active"
//               }`}
//             >
//               <i className="fa-sharp fa-solid fa-building-ngo"></i>
//               <Link to="/donation">Donation</Link>
//             </div>
            
            
            
//           )}

//           {/* {userMenu.map((menu) => {
//             const isActive = location.pathname === menu.path;
//             return (
//               <div
//                 className={`menu-item ${isActive && "active"}`}
//                 key={menu.name}
//               >
//                 <i className={menu.icon}></i>
//                 <Link to={menu.path}>{menu.name}</Link>
//               </div>
//             );
//           })} */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
import React from "react";
import { useLocation, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "../../../styles/Layout.css";
import RazorpayButton from "../../RazorpayPaymentButoon"; // Import the RazorpayButton component
import Analytics from "../../../pages/Dashboard/Analytics";

const Sidebar = () => {
  // GET USER STATE
  const { user } = useSelector((state) => state.auth);
  const location = useLocation();

  return (
    <div>
      <div className="sidebar">
        <div className="menu">
          {user?.role === "organisation" && (
            <>
              <div
                className={`menu-item ${location.pathname === "/" && "active"}`}
              >
                <i className="fa-solid fa-warehouse"></i>
                <Link to="/">Inventory</Link>
              </div>
              <div
                className={`menu-item ${
                  location.pathname === "/donar" && "active"
                }`}
              >
                <i className="fa-solid fa-hand-holding-medical"></i>
                <Link to="/donar">Donar</Link>
              </div>
              {/* <div
                className={`menu-item ${
                  location.pathname === "/hospital" && "active"
                }`}
              >
                <i className="fa-solid fa-hospital"></i>
                <Link to="/hospital">Hospital</Link>
              </div> */}
            </>
          )}
          {user?.role === "admin" && (
            <>
              <div
                className={`menu-item ${
                  location.pathname === "/donar-list" && "active"
                }`}
              >
                <i className="fa-solid fa-warehouse"></i>
                <Link to="/donar-list">Donar List</Link>
              </div>
              <div
                className={`menu-item ${
                  location.pathname === "/inventory-list" && "active"
                }`}
              >
                {/* <i className="fa-solid fa-hand-holding-medical"></i> */}
                {/* <Link to="/">Inventory List</Link> */}
              </div>
              <div
                className={`menu-item ${
                  location.pathname === "/org-list" && "active"
                }`}
              >
                <i className="fa-solid fa-hospital"></i>
                <Link to="/org-list">Organisation List</Link>
              </div>
            </>
          )}
          {(user?.role === "donar" || user?.role === "hospital") && (
            <div>
              <div
                className={`menu-item ${
                  location.pathname === "/orgnaisation" && "active"
                }`}
              >
                <i className="fa-sharp fa-solid fa-building-ngo"></i>
                <Link to="/orgnaisation">Organisation</Link>
              </div>
            </div>
          )}
          {user?.role === "hospital" && (
            <div
              className={`menu-item ${
                location.pathname === "/consumer" && "active"
              }`}
            >
              <i className="fa-sharp fa-solid fa-building-ngo"></i>
              <Link to="/consumer">Consumer</Link>
            </div>
          )}
          {user?.role === "donar" && (
            <div
              className={`menu-item ${
                location.pathname === "/donation" && "active"
              }`}
            >
              <i className="fa-sharp fa-solid fa-building-ngo"></i>
              <Link to="/donation">Donation</Link>
            </div>
          )}

          {/* Insert the RazorpayButton component where you want it */}
          {/* <div className="menu-item">
            <RazorpayButton />
          </div> */}

          {/* ... Your other menu items ... */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
