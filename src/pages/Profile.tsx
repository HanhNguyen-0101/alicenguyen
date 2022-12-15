import { Avatar } from "antd";
import { useFormik } from "formik";
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { callback, callbackObj } from "../components/global/Global";
import { updateAvatarRequest, updateProfileRequest } from "../redux/actions/auth.action";
import { AuthState } from "../redux/reducers/root.reducer";

export const Profile: React.FC<{}> = (props: any) => {
  const dispatch = useDispatch();
  const { authLogin } = useSelector((state: AuthState) => state.auth);
  let auth, avatar;
  if (authLogin && typeof authLogin === "string") {
    auth = JSON.parse(authLogin);
    avatar = typeof auth === "string" ? JSON.parse(auth).avatarObj.src : auth.avatarObj.src;
  }
  const authConvert = typeof auth === "string" ? JSON.parse(auth) : auth;

  const handleChangeImageSrc = async (e: any) => {
    let file = e.target.files[0];
    if (
      file.type === "image/jpeg" ||
      file.type === "image/jpg" ||
      file.type === "image/gif" ||
      file.type === "image/png"
    ) {
      await dispatch(updateAvatarRequest(callbackObj({ file, id: authConvert.id }, callback("Inside callback after update avatar"))));
    }
  };

  const formik = useFormik({
    initialValues: {
      ...authConvert,
      password: typeof auth === "string" ? JSON.parse(auth).password : auth.password,
      email: typeof auth === "string" ? JSON.parse(auth).email : auth.email,
      avatar: null
    },
    validationSchema: Yup.object({
      password: Yup.string().max(100, "Max 100 characters").required("The field is required"),
      email: Yup.string().required("The field is required").max(160, "Max 160 characters").email("The field is email"),
    }),
    onSubmit: (values) => {
      dispatch(updateProfileRequest(callbackObj(values, callback("Inside callback after update profile"))));
    },
  });
  return (
    <div className="w-full max-w-2xl m-auto bg-amber-700 rounded text-white">
      <div className="flex md:flex-row flex-col justify-center items-center p-6 rounded-md sm:p-10">
        <div className="w-auto mr-4 flex justify-center relative rounded-full">
          <Avatar src={avatar ? avatar : "https://picsum.photos/200/300"} shape="circle" size={150} />
          <div
            className="absolute top-1/2 left-0 py-1 -translate-y-1/2 text-sm opacity-90 font-medium w-full text-center text-amber-100"
            style={{ backgroundColor: "#1d151582" }}
          >
            update avatar
          </div>
          <input
            type="file"
            style={{ width: 150 }}
            className="update-avatar absolute top-1/2 left-0 py-1 -translate-y-1/2"
            onChange={handleChangeImageSrc}
            accept="image/jpg,image/jpeg,image/gif,image/png"
          />
        </div>
        <form onSubmit={formik.handleSubmit} className="w-full space-y-10 pl-4 pb-4 ng-untouched ng-pristine ng-valid">
          <div className="space-y-2">
            <h1 className="my-3 mb-10 text-4xl font-bold text-amber-400">My account</h1>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm text-amber-400">Email address</label>
              <input
                className="w-full p-2 text-amber-800 border-b-2 border-amber-500 outline-none bg-white"
                type="email"
                name="email"
                value={formik.values.email}
                placeholder={"please enter..."}
                onChange={formik.handleChange}
              />
              {formik.errors.email ? (
                <div className="text-alibus text-smxs pt-1">{JSON.parse(JSON.stringify(formik.errors.email))}</div>
              ) : null}
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-sm text-amber-400">Password</label>
              <input
                className="w-full p-2 text-amber-800 border-b-2 border-amber-500 outline-none bg-white"
                type="password"
                name="password"
                value={formik.values.password}
                placeholder={"please enter..."}
                onChange={formik.handleChange}
              />
              {formik.errors.password ? (
                <div className="text-alibus text-xs pt-1">
                  {JSON.parse(JSON.stringify(formik.errors.password))}
                </div>
              ) : null}
            </div>
          </div>
          <button type="submit" className="w-full px-8 py-2 font-semibold rounded-md bg-amber-500 text-amber-900">Update</button>
        </form>
      </div>
    </div>
  );
};
