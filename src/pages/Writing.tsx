import { Button, Select, Space } from "antd";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { CaretDownOutlined, AppstoreOutlined, BarsOutlined } from '@ant-design/icons';
import { callback, callbackObj, SayHiLink, WebDevelopmentLink } from "../components/global/Global";
import { alignTreeLeft } from "../redux/actions/tree.action";
import { useDispatch } from "react-redux";
import { findBlogBySubCategoryIdRequest, getBlogRequest } from "../redux/actions/blog.action";
import { BlogState, SubCategoryState } from "../redux/reducers/root.reducer";
import { useSelector } from "react-redux";
import { getSubCategoryRequest } from "../redux/actions/subCategory.action";
import _ from "lodash";
import moment from "moment";
import { ISubCategoryModel } from "../redux/types/subCategory.type";
import { IBlogModel } from "../redux/types/blog.type";

const { Option } = Select;

export const Writing: React.FC<{}> = (props: any) => {
    const [isGrid, setIsGrid] = useState(true);
    const dispatch = useDispatch();
    const { blogArr } = useSelector((state: BlogState) => state.blog);
    const { subCategoryArr } = useSelector((state: SubCategoryState) => state.subCategory)
    const subCategoryBlog = _.filter(subCategoryArr, (i: ISubCategoryModel) => i.category.name.toLowerCase().includes("blog"));

    const handleShowItem = (value: boolean) => {
        setIsGrid(value);
    }
    const handleFilter = (value: string | number) => {
        if (value === "all") {
            dispatch(getBlogRequest(callbackObj(null, callback("Inside callback after get all blog"))));
        } else {
            dispatch(findBlogBySubCategoryIdRequest(callbackObj({ subCategoryId: value }, callback("Inside callback after find blog by category id"))));
        }
    }
    const renderArticleItem = () => {
        return _.map(blogArr, ((i: IBlogModel) => {
            return (
                <li className={`item-hover px-4 ${isGrid && "lg:p-0 d-grid-item"}`}>
                    <div className={`hidden ${isGrid && "lg:block"} bg-amber-100 opacity-30 absolute w-full h-full rounded`} style={{ zIndex: -1 }}></div>
                    <div className="item"></div>
                    <NavLink to={`/writing/${i.id}`} className={`border-0 inline-block w-full pt-2.5 pb-3.5 border-b border-amber-300 ${isGrid && "lg:px-8 lg:py-6 lg:hover:text-white lg:border-none"}`}>
                        <h3 className={`text-base md:text-lg text-yellow-300 pb-2 lg:py-3 font-semibold lg:w-3/4 inline-block ${isGrid && "lg:text-3xl lg:w-full lg:text-center lg:min-h-max lg:mb-5 lg:leading-10"}`}>{i.title}</h3>
                        <hr className={`hidden w-3/4 m-auto ${isGrid && "lg:block"}`} />
                        <p className={`text-center font-medium py-5 text-lg hover:text-white hidden ${isGrid && "lg:block"}`}>{i.subCategory.name}.</p>
                        <div className={`lg:float-right lg:py-4 ${isGrid && "lg:pt-6 lg:grid lg:grid-cols-2 lg:float-none"}`}>
                            <p className={`text-xs md:text-sm hover:text-white text-white focus:text-white ${isGrid && "lg:block"}`}>{moment(i.createdAt).format("MMMM DD, YYYY")}</p>
                            <p className={`text-xs md:text-sm hover:text-white text-white focus:text-white hidden ${isGrid && "lg:block lg:text-right"}`}>9 phút</p>
                        </div>
                    </NavLink>
                </li>
            )
        }))
    }
    useEffect(() => {
        dispatch(getSubCategoryRequest(callbackObj(null, callback("Inside callback after get all sub category"))));
        dispatch(getBlogRequest(callbackObj(null, callback("Inside callback after get all blog"))));
        dispatch(alignTreeLeft());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <>
            <div className="absolute hidden lg:block" style={{ top: 12, right: 150 }}>
                <Space>
                    <Button className={`bg-transparent p-0 leading-none border-none text-xl text-amber-50 hover:bg-transparent hover:text-amber-50 hover:opacity-100 focus:bg-transparent focus:outline-none focus:font-medium focus:text-amber-50 focus:opacity-100 ${isGrid ? "opacity-100" : "opacity-60"}`} onClick={() => handleShowItem(true)}><AppstoreOutlined /></Button>
                    <Button className={`bg-transparent p-0 leading-none border-none text-2xl text-amber-50 hover:bg-transparent hover:text-amber-50 hover:opacity-100 focus:bg-transparent focus:outline-none focus:font-medium focus:text-amber-50 focus:opacity-100 ${isGrid ? "opacity-60" : "opacity-100"}`} onClick={() => handleShowItem(false)}><BarsOutlined /></Button>
                </Space>
            </div>
            <div className="grid grid-cols-1 px-5 pb-3 md:px-0 md:max-w-screen-sm lg:max-w-4xl lg:px-2 md:mx-auto">
                <div className="text-sm text-yellow-300 text-right">
                    <Select
                        defaultValue="all"
                        className="text-amber-50 text-base font-medium"
                        bordered={false}
                        placement="bottomRight"
                        dropdownMatchSelectWidth={false}
                        dropdownStyle={{
                            minWidth: 50,
                            backgroundColor: "rgb(129, 121, 99)",
                        }}
                        onChange={handleFilter}
                        suffixIcon={
                            <CaretDownOutlined />
                        }
                    >
                        <Option className="text-amber-300 hover:bg-black hover:text-amber-300 hover:font-medium focus:bg-black focus:text-amber-300" value="all">All</Option>
                        {subCategoryBlog?.map(i => {
                            return <Option key={i.id} className="text-amber-300 hover:bg-black hover:text-amber-300 hover:font-medium focus:bg-black focus:text-amber-300" value={i.id}>{i.name}</Option>
                        })}
                    </Select>
                </div>
            </div>
            <div className="container-item overflow-y-auto">
                <div className="animated animatedFadeInUp fadeInUp relative mx-5 md:max-w-screen-sm lg:max-w-4xl md:mx-auto">
                    <div className={`block ${isGrid && "lg:hidden"} bg-amber-100 opacity-30 absolute w-full h-full rounded`} style={{ zIndex: -1 }}></div>
                    <ul className={`py-4 ${isGrid && "lg:grid lg:grid-cols-2 lg:gap-8 lg:py-0"}`}>
                        {renderArticleItem()}
                    </ul>
                </div>
            </div>
            <div className="absolute lg:-rotate-90 lg:bottom-1/2 lg:top-auto lg:-left-28 lg:px-5 lg:fixed lg:w-auto flex justify-start items-center bottom-2 md:bottom-3 left-0 px-4 w-full">
                <div className="inline-block text-amber-50 pr-4 pl-2 leading-8 text-right">
                    <p className="pr-4 focus:text-yellow-500 inline-block hover:text-yellow-500 text-base font-medium"><SayHiLink /></p>
                    <p className="pr-4 focus:text-yellow-500 inline-block hover:text-yellow-500 text-base font-medium"><WebDevelopmentLink /></p>
                </div>
            </div>
        </>
    );
};
