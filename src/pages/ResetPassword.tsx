import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { callback, callbackObj } from "../components/global/Global";
import { requestResetPasswordRequest } from "../redux/actions/auth.action";

export const ResetPassword: React.FC<{}> = (props: any) => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("The field is required").max(160, "Max 160 characters").email("The field is email"),
    }),
    onSubmit: (values) => {
      dispatch(requestResetPasswordRequest(callbackObj(values, callback("Inside callback after reset password"))));
    },
  });

  return (
    <div className="w-full max-w-lg m-auto bg-amber-700 rounded text-white">
      <div className="flex flex-col rounded-md p-6 pt-4">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold text-amber-400">Reset password</h1>
        </div>
        <form onSubmit={formik.handleSubmit} className="ng-untouched ng-pristine ng-valid">
          <label htmlFor="email" className="block mb-2 text-sm text-amber-400">Email address</label>
          <div className="flex">
            <input
              className="w-full p-2 text-amber-800 border-b-2 border-amber-500 outline-none bg-white"
              type="email"
              name="email"
              value={formik.values.email}
              placeholder={"please enter..."}
              onChange={formik.handleChange}
            />
            <button type="submit" className="px-8 py-2 font-semibold bg-amber-500 text-amber-900">Send</button>
          </div>
          {formik.errors.email ? (
            <div className="flex text-alibus text-xs pt-1">{formik.errors.email}</div>
          ) : null}
          <div className="mt-6">
            <p className="text-sm text-amber-400">* After sending your email, please check your email box.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
