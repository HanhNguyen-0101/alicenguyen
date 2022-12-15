import { Button, Switch } from "antd";
import React, { useEffect, useState } from "react";
import { SwapLeftOutlined } from '@ant-design/icons';
import { callback, callbackObj, SayHiLink, WebDevelopmentLink, WritingLink } from "../components/global/Global";
import "../../src/css/pages/detailpage.css"
import { useDispatch } from "react-redux";
import { alignTreeLeft } from "../redux/actions/tree.action";
import { history } from "../utils/history/history";
import { useParams } from "react-router";
import { getBlogByIdRequest } from "../redux/actions/blog.action";
import { useSelector } from "react-redux";
import { BlogState } from "../redux/reducers/root.reducer";
import { WritingDetailComponent } from "../components/partials/WritingDetailComponent";


export const WritingDetail: React.FC<{}> = (props: any) => {
    const [customView, setCustomView] = useState({
        fontSize: "f--normal",
        bright: "b--dark"
    });
    const dispatch = useDispatch();
    const { id } = useParams();
    const { blog } = useSelector((state: BlogState) => state.blog);

    const handleChangeFontSize = (name: string, value: string) => {
        setCustomView({
            ...customView,
            [name]: value
        });
    }
    const handleChangeBright = (name: string) => {
        return (value: boolean) => {
            setCustomView({
                ...customView,
                [name]: value ? "b--dark" : "b--light"
            });
        }
    }
    const handleBack = () => {
        history.back();
    }
    useEffect(() => {
        dispatch(alignTreeLeft());
        dispatch(getBlogByIdRequest(callbackObj({ blogId: Number(id) }, callback("Inside callback after get blog by id"))));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <>
            <div className="absolute hidden lg:flex flex-row gap-6 items-center" style={{ top: 12, right: 150 }}>
                <div className="flex flex-row gap-2 pt-1.5 justify-center items-baseline">
                    <Button className={`bg-transparent p-0 leading-none border-none text-lg text-amber-50 hover:bg-transparent hover:text-amber-50 hover:opacity-100 focus:bg-transparent focus:outline-none focus:font-medium focus:text-amber-50 focus:opacity-100 ${customView.fontSize === "f--small" ? "opacity-100" : "opacity-60"}`} onClick={() => handleChangeFontSize("fontSize", "f--small")}>A</Button>
                    <Button className={`bg-transparent p-0 leading-none border-none text-xl text-amber-50 hover:bg-transparent hover:text-amber-50 hover:opacity-100 focus:bg-transparent focus:outline-none focus:font-medium focus:text-amber-50 focus:opacity-100 ${customView.fontSize === "f--normal" ? "opacity-100" : "opacity-60"}`} onClick={() => handleChangeFontSize("fontSize", "f--normal")}>A</Button>
                    <Button className={`bg-transparent p-0 leading-none border-none text-2xl text-amber-50 hover:bg-transparent hover:text-amber-50 hover:opacity-100 focus:bg-transparent focus:outline-none focus:font-medium focus:text-amber-50 focus:opacity-100 ${customView.fontSize === "f--large" ? "opacity-100" : "opacity-60"}`} onClick={() => handleChangeFontSize("fontSize", "f--large")}>A</Button>
                </div>
                <Switch
                    className="outline-none text-amber-200"
                    unCheckedChildren={<i className="fa fa-sun text-xl"></i>}
                    checkedChildren={<i className="fa fa-moon text-xl"></i>}
                    onChange={handleChangeBright("bright")}
                    checked={customView.bright === "b--dark" || false}
                />
            </div>
            <div className="absolute right-0 top-24 md:max-w-screen-sm lg:max-w-4xl md:mx-auto md:top-0 md:right-1/2 md:translate-x-1/2">
                <Button onClick={handleBack} className="md:mt-0 md:text-base md:h-8 md:rounded-bl-3xl md:rounded-br-3xl md:px-5 border-none font-medium text-sm h-6 mt-2 px-2 bg-yellow-200 hover:bg-yellow-200 focus:bg-yellow-200 hover:text-black focus:text-black hover:opacity-100 focus:opacity-100 opacity-80 rounded-none py-0">
                    <SwapLeftOutlined />
                    <span>Back</span>
                </Button>
            </div>
            <div className={`container-content overflow-y-auto ${customView.fontSize} ${customView.bright}`}>
                <div className="animated animatedFadeInUp fadeInUp relative mx-5 md:max-w-screen-sm lg:max-w-4xl md:mx-auto">
                    <div className={`block ${customView.bright === "b--light" && "bg-white opacity-80"} ${customView.bright === "b--dark" && "bg-black opacity-30"} absolute w-full h-full rounded`} style={{ zIndex: -1 }}></div>
                    <div className="max-w-xl lg:max-w-3xl px-6 py-6 md:py-10 lg:py-11 mx-auto space-y-6 md:space-y-10 lg:space-y-12">
                        {blog && <WritingDetailComponent blog={blog} />}
                        {!blog && <article className="space-y-8">
                            <div className="space-y-6">
                                <h1 className="text-2xl md:text-4xl lg:text-4xl font-bold md:tracking-tight text-inherit">No article found!</h1>
                            </div>
                        </article>}
                    </div>
                </div>
            </div>
            <div className="absolute lg:-rotate-90 lg:bottom-1/2 lg:top-auto lg:-left-36 lg:px-5 lg:fixed lg:w-auto flex justify-start items-center bottom-2 md:bottom-3 left-0 px-4 w-full">
                <div className="inline-block text-amber-50 pr-4 pl-2 leading-8 text-right">
                    <p className="pr-4 focus:text-yellow-500 inline-block hover:text-yellow-500 text-base font-medium"><SayHiLink /></p>
                    <p className="pr-4 focus:text-yellow-500 inline-block hover:text-yellow-500 text-base font-medium"><WebDevelopmentLink /></p>
                    <p className="pr-4 focus:text-yellow-500 inline-block hover:text-yellow-500 text-base font-medium"><WritingLink /></p>
                </div>
            </div>
        </>
    );
};
