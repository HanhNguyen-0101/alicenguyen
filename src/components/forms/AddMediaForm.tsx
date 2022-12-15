import { Form, Input, Select, Switch } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import ReactQuill from "react-quill";
import * as Yup from "yup";
import { setCallbackDrawer } from "../../redux/actions/drawer.action";
import { callback, callbackObj } from "../global/Global";
import { addMediaRequest } from "../../redux/actions/media.action";
import { SubCategoryState } from "../../redux/reducers/root.reducer";
import { useSelector } from "react-redux";
import _ from "lodash";
import { getSubCategoryRequest } from "../../redux/actions/subCategory.action";
import { ISubCategoryModel } from "../../redux/types/subCategory.type";
const { Option, OptGroup } = Select;

export const AddMediaForm: React.FC<{}> = (props: any) => {
  const dispatch = useDispatch();
  const [imgSrc, setImgSrc] = useState("");
  const { subCategoryArr } = useSelector((state: SubCategoryState) => state.subCategory);
  const subCategoryFilter = _.filter(subCategoryArr, (i: any) => i.category.name.toLowerCase() === "media");

  const handleChange = (name: string) => {
    return (value: string | number | boolean) => {
      formik.setFieldValue(name, value);
    };
  };

  const handleChangeImageSrc = async (e: any) => {
    let file = e.target.files[0];
    if (
      file.type === "image/jpeg" ||
      file.type === "image/jpg" ||
      file.type === "image/gif" ||
      file.type === "image/png" ||
      file.type === "application/pdf" ||
      file.type === "audio/mpeg" ||
      file.type === "audio/ogg"
    ) {

      await formik.setFieldValue("src", file);
      if (file.type !== "audio/mpeg" && file.type !== "audio/ogg" && file.type !== "application/pdf") {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e: any) => {
          setImgSrc(e.target.result);
        };
      } else {
        setImgSrc("");
      }
    }
  };
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: "",
      description: "",
      enabled: false,
      src: "",
      subCategoryId: ""
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .max(200, "Max 200 characters")
        .required("The field is required"),
      subCategoryId: Yup.mixed()
        .required("The field is required"),
    }),
    onSubmit: (values) => {
      dispatch(addMediaRequest(callbackObj(values, callback("Inside callback after add media"))));
    },
  });

  useEffect(() => {
    dispatch(getSubCategoryRequest(callbackObj(null, callback("Inside callback after get all sub category"))));
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
            title <span className="text-red-600">*</span>
          </span>
        }
      >
        <Input
          name="title"
          onChange={formik.handleChange}
          value={formik.values.title}
          placeholder={"please enter..."}
        />
        {formik.errors.title ? (
          <div className="text-amber-600 opacity-70 pt-1 text-xs mb-2">{formik.errors.title}</div>
        ) : null}
      </Form.Item>
      <Form.Item
        className="mb-1"
        label={
          <span className="font-bold">
            isEnable
          </span>
        }
      >
        <Switch checked={formik.values.enabled} onChange={handleChange("enabled")} />
        {formik.errors.enabled ? (
          <div className="text-amber-600 opacity-70 pt-1 text-xs mb-2">{formik.errors.enabled}</div>
        ) : null}
      </Form.Item>
      <Form.Item
        className="mb-1"
        label={
          <span className="font-bold capitalize">
            subCategory <span className="text-red-600">*</span>
          </span>
        }
      >
        <Select
          onChange={handleChange("subCategoryId")}
          value={formik.values.subCategoryId}
          placeholder="please select..."
        >
          <OptGroup label="SubCategory">
            {_.map(subCategoryFilter, ((subCategory: ISubCategoryModel, idx: number) => {
              return (
                <Option key={idx} value={subCategory.id}>
                  {subCategory.name}
                </Option>
              );
            }))}
          </OptGroup>
        </Select>
        {formik.errors.subCategoryId ? (
          <div className="text-amber-600 opacity-70 pt-1 text-xs mb-2">
            {formik.errors.subCategoryId}
          </div>
        ) : null}
      </Form.Item>
      <Form.Item
        className="mb-1"
        label={
          <span className="font-bold capitalize">
            src <span className="text-red-600">*</span>
          </span>
        }
      >
        <input
          type="file"
          required
          onChange={handleChangeImageSrc}
          accept="image/png, image/jpeg,image/gif,image/png,audio/*,application/pdf"
        />
        {imgSrc && <img alt="img" src={imgSrc} className="w-auto my-3" />}
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