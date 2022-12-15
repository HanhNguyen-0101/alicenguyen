import { Form, Input, Select, Tag } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { SubCategoryState } from "../../redux/reducers/root.reducer";
import { setCallbackDrawer } from "../../redux/actions/drawer.action";
import { callback, callbackObj } from "../global/Global";
import _ from "lodash";
import { getSubCategoryRequest } from "../../redux/actions/subCategory.action";
import { ISubCategoryModel } from "../../redux/types/subCategory.type";
import { IAuthModel } from "../../redux/types/auth.type";
import { resetPasswordRequest } from "../../redux/actions/auth.action";
const { Option, OptGroup } = Select;

export const ResetPasswordAuthForm: React.FC<{ auth: IAuthModel }> = ({ auth }) => {
  const dispatch = useDispatch();
  const { subCategoryArr } = useSelector((state: SubCategoryState) => state.subCategory);

  const subCategoryFilter = _.filter(subCategoryArr, (i: any) => i.category.name.toLowerCase() === "reset password");

  const handleChange = (name: string) => {
    return (value: string | number | boolean) => {
      formik.setFieldValue(name, value);
    };
  };
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: auth?.id,
      password: auth?.password,
      resetPasswordStatus: auth?.resetPasswordStatus,
    },
    validationSchema: Yup.object({
      password: Yup.string().max(100, "Max 100 characters").required("The field is required"),
      resetPasswordStatus: Yup.mixed().required("The field is required"),
    }),
    onSubmit: (values) => {
      dispatch(resetPasswordRequest(callbackObj(values, callback("Inside callback after reset password auth"))));
    },
  });

  useEffect(() => {
    dispatch(getSubCategoryRequest(callbackObj(null, callback("Inside callback after get all sub category"))));
    dispatch(setCallbackDrawer(formik.handleSubmit));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Form
      layout="vertical"
      labelAlign="left"
      colon={false}
      className="px-4"
      onSubmitCapture={formik.handleSubmit}
    >
      <Form.Item
        className="mb-1"
        label={<span className="font-bold uppercase">id</span>}
      >
        <Input
          name="id"
          onChange={formik.handleChange}
          value={formik.values.id}
          placeholder="please enter..."
          disabled
        />
        {formik.errors.id ? (
          <div className="text-amber-600 opacity-70 pt-1 text-xs mb-2">{formik.errors.id}</div>
        ) : null}
      </Form.Item>
      <Form.Item
        className="mb-1"
        label={
          <span className="font-bold capitalize">
            password <span className="text-red-600">*</span>
          </span>
        }
      >
        <Input
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          placeholder={"please enter..."}
        />
        {formik.errors.password ? (
          <div className="text-amber-600 opacity-70 pt-1 text-xs mb-2">{formik.errors.password}</div>
        ) : null}
      </Form.Item>
      <Form.Item
        className="mb-1"
        label={
          <span className="font-bold capitalize">
            reset password status <span className="text-red-600">*</span>
          </span>
        }
      >
        <Select
          onChange={handleChange("resetPasswordStatus")}
          value={formik.values.resetPasswordStatus}
          placeholder="please select..."
        >
          <OptGroup label="Reset Password Status">
            {_.map(subCategoryFilter, ((sub: ISubCategoryModel, idx: number) => {
              return (
                <Option key={idx} value={sub.id}>
                  <Tag color="orange" className="uppercase">{sub.name}</Tag>
                </Option>
              );
            }))}
          </OptGroup>
        </Select>
        {formik.errors.resetPasswordStatus ? (
          <div className="text-amber-600 opacity-70 pt-1 text-xs mb-2">
            {formik.errors.resetPasswordStatus}
          </div>
        ) : null}
      </Form.Item>
    </Form>
  );
}