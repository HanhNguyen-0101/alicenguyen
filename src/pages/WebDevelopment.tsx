import { Tabs } from "antd";
import React, { useEffect } from "react";
import { callback, callbackObj, SayHiLink, WritingLink } from "../components/global/Global";
import "../../src/css/pages/detailpage.css"
import "../../src/css/pages/webdev.css"
import { Resume } from "../components/pages/Resume";
import { Skill } from "../components/pages/Skill";
import { About } from "../components/pages/About";
import { Project } from "../components/pages/Project";
import { alignTreeLeft } from "../redux/actions/tree.action";
import { useDispatch } from "react-redux";
import { getMediaRequest } from "../redux/actions/media.action";
import { useSelector } from "react-redux";
import { MediaState } from "../redux/reducers/root.reducer";

export const WebDevelopment: React.FC<{}> = (props: any) => {
    const dispatch = useDispatch();
    const { mediaArr } = useSelector((state: MediaState) => state.media);

    useEffect(() => {
        dispatch(alignTreeLeft());
        dispatch(getMediaRequest(callbackObj(null, callback("Inside callback after get all media"))));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const items = [
        {
            id: 1,
            label: "About",
            children: (
                <About mediaArr={mediaArr} />
            ),
        },
        {
            id: 2,
            label: "Resume",
            children: (
                <Resume mediaArr={mediaArr} />
            ),
        },
        {
            id: 3,
            label: "Skill",
            children: (
                <Skill />
            ),
        },
        {
            id: 4,
            label: "Project",
            key: "4",
            children: (
                <Project mediaArr={mediaArr} />
            ),
        }
    ]
    return (
        <>
            <div className="card-container">
                <Tabs
                    tabPosition="left"
                    type="card"
                    className="text-white tracking-wide"
                    items={items.map((i, idx) => {
                        return {
                            label: i.label,
                            key: idx.toString(),
                            children: i.children,
                        };
                    })}
                />
            </div>
            <div className="absolute flex justify-start items-center bottom-2 md:bottom-3 left-0 px-4 w-full">
                <div className="inline-block text-amber-50 pr-4 pl-2 leading-8 text-right">
                    <p className="pr-4 focus:text-yellow-500 inline-block hover:text-yellow-500 text-base font-medium"><SayHiLink /></p>
                    <p className="pr-4 focus:text-yellow-500 inline-block hover:text-yellow-500 text-base font-medium"><WritingLink /></p>
                </div>
            </div>
        </>
    );
};
