import { Form, Input, Slider } from "antd";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import ReactQuill from "react-quill";
import * as Yup from "yup";
import { setCallbackDrawer } from "../../redux/actions/drawer.action";
import { addSkillRequest } from "../../redux/actions/skill.action";
import { callback, callbackObj } from "../global/Global";

export const AddSkillForm: React.FC<{}> = (props: any) => {
  const dispatch = useDispatch();

  const handleChange = (name: string) => {
    return (value: string | number) => {
      formik.setFieldValue(name, value);
    };
  };
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: "",
      description: "",
      rate: 0,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(200, "Max 200 characters")
        .required("The field is required"),
    }),
    onSubmit: (values) => {
      dispatch(addSkillRequest(callbackObj(values, callback("Inside callback after add skill"))));
    },
  });

  useEffect(() => {
    dispatch(setCallbackDrawer(formik.handleSubmit));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Form
      labelCol={{
        span: 4,
      }}
      layout="horizontal"
      labelAlign="left"
      colon={false}
      className="px-4"
      onSubmitCapture={formik.handleSubmit}
    >
      <Form.Item
        className="mb-1"
        label={
          <span className="font-bold capitalize">
            name <span className="text-red-600">*</span>
          </span>
        }
      >
        <Input
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
          placeholder={"please enter..."}
        />
        {formik.errors.name ? (
          <div className="text-amber-600 opacity-70 pt-1 text-xs mb-2">{formik.errors.name}</div>
        ) : null}
      </Form.Item>
      <Form.Item
        className="mb-1"
        label={<span className="font-bold capitalize">rate</span>}
      >
        <Slider step={1} value={formik.values.rate} max={100} min={0} onChange={handleChange("rate")} trackStyle={{ background: "orange" }} handleStyle={{ borderColor: "orange" }} />
        {formik.errors.rate ? (
          <div className="text-amber-600 opacity-70 pt-1 text-xs mb-2">
            {formik.errors.rate}
          </div>
        ) : null}
      </Form.Item>
      <Form.Item
        className="mb-1 content-quill"
        label={<span className="font-bold capitalize">description</span>}
      >
        <ReactQuill
          theme="snow"
          onChange={handleChange("description")}
          value={formik.values.description}
          className="h-28"
          modules={{
            toolbar: [
              [{ header: "1" }, { header: "2" }, { font: [] }],
              [{ size: [] }],
              ["bold", "italic", "underline", "strike", "blockquote"],
              [
                { list: "ordered" },
                { list: "bullet" },
                { indent: "-1" },
                { indent: "+1" },
              ],
              ["link", "image", "video"],
              ["clean"],
            ],
            clipboard: {
              // toggle to add extra line breaks when pasting HTML:
              matchVisual: false,
            },
          }}
          formats={[
            "header",
            "font",
            "size",
            "bold",
            "italic",
            "underline",
            "strike",
            "blockquote",
            "list",
            "bullet",
            "indent",
            "link",
            "image",
            "video",
          ]}
        />
        {formik.errors.description ? (
          <div className="text-amber-600 opacity-70 pt-1 text-xs mb-2">
            {formik.errors.description}
          </div>
        ) : null}
      </Form.Item>
    </Form>
  );
}