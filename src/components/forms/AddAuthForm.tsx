import { Form, Image, Input, Select, Space, Tag } from "antd";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { setCallbackDrawer } from "../../redux/actions/drawer.action";
import { callback, callbackObj } from "../global/Global";
import { addAuthRequest } from "../../redux/actions/auth.action";
import { MediaState, SubCategoryState } from "../../redux/reducers/root.reducer";
import { useSelector } from "react-redux";
import _ from "lodash";
import { getSubCategoryRequest } from "../../redux/actions/subCategory.action";
import { getMediaRequest } from "../../redux/actions/media.action";
import { ISubCategoryModel } from "../../redux/types/subCategory.type";
import { IMediaModel } from "../../redux/types/media.type";
const { Option, OptGroup } = Select;

export const AddAuthForm: React.FC<{}> = (props: any) => {
  const dispatch = useDispatch();
  const { mediaArr } = useSelector((state: MediaState) => state.media);
  const { subCategoryArr } = useSelector((state: SubCategoryState) => state.subCategory);

  const mediaFilter = _.filter(mediaArr, (i: any) => i.subCategory.name.toLowerCase() === "img");
  const subCategoryFilter = _.filter(subCategoryArr, (i: any) => i.category.name.toLowerCase() === "user");
  const subCategoryFilter1 = _.filter(subCategoryArr, (i: any) => i.category.name.toLowerCase() === "reset password");

  const handleChange = (name: string) => {
    return (value: string | number | boolean) => {
      formik.setFieldValue(name, value);
    };
  };
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: "",
      password: "",
      avatar: null,
      status: null,
      resetPasswordStatus: null,
    },
    validationSchema: Yup.object({
      password: Yup.string().max(100, "Max 100 characters").required("The field is required"),
      status: Yup.mixed().required("The field is required"),
      resetPasswordStatus: Yup.mixed().required("The field is required"),
      email: Yup.string().required("The field is required").max(160, "Max 160 characters").email("The field is email"),
    }),
    onSubmit: (values) => {
      dispatch(addAuthRequest(callbackObj(values, callback("Inside callback after add auth"))));
    },
  });

  useEffect(() => {
    dispatch(getMediaRequest(callbackObj(null, callback("Inside callback after get all media"))));
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
        label={
          <span className="font-bold capitalize">
            email <span className="text-red-600">*</span>
          </span>
        }
      >
        <Input
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          placeholder={"please enter..."}
        />
        {formik.errors.email ? (
          <div className="text-amber-600 opacity-70 pt-1 text-xs mb-2">{formik.errors.email}</div>
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
            avatar
          </span>
        }
      >
        <Select
          onChange={handleChange("avatar")}
          value={formik.values.avatar}
          placeholder="please select..."
        >
          <OptGroup label="Avatar">
            {_.map(mediaFilter, ((media: IMediaModel, idx: number) => {
              return (
                <Option key={idx} value={media.id}>
                  <Space className="flex align-middle">
                    <Image src={media.src} alt={media.title} preview={false} width={50} />
                    <span>{media.title}</span>
                  </Space>
                </Option>
              );
            }))}
          </OptGroup>
        </Select>
        {formik.errors.avatar ? (
          <div className="text-amber-600 opacity-70 pt-1 text-xs mb-2">
            {formik.errors.avatar}
          </div>
        ) : null}
      </Form.Item>
      <Form.Item
        className="mb-1"
        label={
          <span className="font-bold capitalize">
            status <span className="text-red-600">*</span>
          </span>
        }
      >
        <Select
          onChange={handleChange("status")}
          value={formik.values.status}
          placeholder="please select..."
        >
          <OptGroup label="Status">
            {_.map(subCategoryFilter, ((sub: ISubCategoryModel, idx: number) => {
              return (
                <Option key={idx} value={sub.id}>
                  <Tag color="green" className="uppercase">{sub.name}</Tag>
                </Option>
              );
            }))}
          </OptGroup>
        </Select>
        {formik.errors.status ? (
          <div className="text-amber-600 opacity-70 pt-1 text-xs mb-2">
            {formik.errors.status}
          </div>
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
            {_.map(subCategoryFilter1, ((sub: ISubCategoryModel, idx: number) => {
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