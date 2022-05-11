import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Logo from "../../images/logo-text.png";

import { notifySuccess, notifyFail } from "../../utils/tostifyToastr";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const history = useHistory();
  const submit = (value) => {
    axios
      .post("http://localhost:3000/api/auth/login", value)
      .then((response: any) => {
        console.log(response.data);
       
        if (response && response.status == 200) {
          notifySuccess("Login Successful");
          sessionStorage.setItem("token", response.data.data.token);
          history.push("manage-slot");
        }
      })
      .catch((error) => {
        notifyFail("Invalid Credential .Please try again");
      });
  };
  return (
    <div className="container-fluid responsive-vh-100">
      <div className="row h-100 flex-lg-row flex-column-reverse">
        <div className="col-lg-7 d-flex justify-content-center align-items-center bg-white pt-5 pt-md-0">
          <div className="col-md-9 mx-auto p-md-5">
            <div className="d-flex text-center flex-column align-items-center">
              <img
                src={Logo}
                height={100}
                width={300}
                alt=""
                className="mb-2 rounded"
              />
              <p className="mb-0">Enter your details to proceed further</p>
            </div>
            <form className="mt-5" onSubmit={handleSubmit(submit)}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control form-control-underline"
                  {...register("email", { required: true })}
                  placeholder="jhondoe@gmail.com"
                />
              </div>
              <div className="form-group mt-4">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control form-control-underline"
                  {...register("password", { required: true })}
                  placeholder="Start typing..."
                />
              </div>
              <div className="mt-4 d-flex pb-5">
                <button
                  type="submit"
                  className="btn py-3 w-100 custom-ligth-orange"
                  style={{color: "#FFFF",marginRight:15,fontSize:18 }}
                  {...register("submit")}
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-lg-5  px-lg-5 py-4 py-lg-0" style={{background: "#FFE6E4"}}>
          <div className="illustrator-container"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
