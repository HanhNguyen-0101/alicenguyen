import React from "react";
import { loginRequest } from "../../src/redux/actions/auth.action";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { callback, callbackObj } from "../components/global/Global";

export const Login: React.FC<{}> = (props: any) => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      password: Yup.string().max(100, "Max 100 characters").required("The field is required"),
      email: Yup.string().required("The field is required").max(160, "Max 160 characters").email("The field is email"),
    }),
    onSubmit: (values) => {
      dispatch(loginRequest(callbackObj(values, callback("Inside callback after login"))));
    },
  });
  return (
    <div className="w-full max-w-xs m-auto bg-amber-700 rounded text-white">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold text-amber-400">Sign in</h1>
          <p className="text-sm">Sign in to access your account</p>
        </div>
        <form onSubmit={formik.handleSubmit} className="space-y-12 ng-untouched ng-pristine ng-valid">
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm text-amber-400">Email address</label>
              <input
                className="w-full p-2 text-amber-800 border-b-2 border-amber-500 outline-none bg-white"
                type="input"
                name="email"
                value={formik.values.email}
                placeholder={"please enter..."}
                onChange={formik.handleChange}
              />
              {formik.errors.email ? (
                <div className="text-alibus pt-1 text-xs">
                  {formik.errors.email}
                </div>
              ) : null}
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm text-amber-400">Password</label>
                <NavLink to={"/authentication/reset-password"} className="text-xs hover:underline hover:text-white">Forgot password?</NavLink>
              </div>
              <input
                className="w-full p-2 text-amber-800 border-b-2 border-amber-500 outline-none bg-white"
                type="password"
                name="password"
                value={formik.values.password}
                placeholder={"please enter..."}
                onChange={formik.handleChange}
              />
              {formik.errors.password ? (
                <div className="text-alibus pt-1 text-xs">{formik.errors.password}</div>
              ) : null}
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button type="submit" className="w-full px-8 py-2 font-semibold rounded-md bg-amber-500 text-amber-900">Sign in</button>
            </div>
            <p className="text-sm text-center text-amber-400">Don't have an account yet?
              <NavLink to={"/authentication/signup"} className="hover:underline text-sm pl-1 text-white hover:text-white">Sign up.</NavLink>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
