import React from 'react'
import Form from '../../components/Shared/Form/Form'
import { useSelector } from 'react-redux'
import Spinner from '../../components/Shared/Spinner';
import bloodbag from './bloodbag.jpg';

const Register = () => {
  const { loading, error } = useSelector((state) => state.auth);
  return (
    <>
      {error && <span>{alert(error)}</span>}
      {loading ? (
        <Spinner />
      ) : (
        <div className="row g-0">
          <div className="col-md-8 form-banner ">
           <center>
           <img src={bloodbag} alt="registerImage" style={{width : "auto", height:800}} />
            </center> 
          </div>
          <div className="col-md-4 form-container">
            <Form
              formTitle={"Register"}
              submitBtn={"Register"}
              formType={"register"}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Register;