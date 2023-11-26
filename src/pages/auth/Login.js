import React from "react";
import InputType from "../../components/Shared/Form/InputType";
import Form from "../../components/Shared/Form/Form"; //apna reusuable component ko import kiya
import { useSelector } from "react-redux/es/hooks/useSelector";
import Spinner from './../../components/Shared/Spinner'
import login from "./login.jpg";

const Login = () => {
  const { loading, error } = useSelector((state) => state.auth); //use selector extract loading and error from state aur uske acorrding spinner aur error hoga
  return (
    <>
      {error && <span>{alert(error)}</span>}
      {loading ? (
        <Spinner />
      ) : (
        <div className="row g-0">
          <div className="col-md-8  form-banner p-3">
          <center>
           <img src={login} alt="registerImage" style={{width : "auto", height:700}} />
            </center>
            
          </div>
          <div className="col-md-4 form-container">
            <Form
              formTitle={"Login Side Page"}
              submitBtn={"Login"}
              formType={"login"}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
