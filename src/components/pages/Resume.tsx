import _ from "lodash";
import moment from "moment";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getProjectRequest } from "../../redux/actions/project.action";
import { ProjectState } from "../../redux/reducers/root.reducer";
import { IMediaModel } from "../../redux/types/media.type";
import { IProjectModel } from "../../redux/types/project.type";
import { callback, callbackObj } from "../global/Global";

export const Resume: React.FC<{ mediaArr: Array<IMediaModel> }> = ({ mediaArr }) => {
    const dispatch = useDispatch();
    const { projectArr } = useSelector((state: ProjectState) => state.project);
    const projectSortDate = _.sortBy(projectArr, ["date"]);
    const CV = mediaArr.find(i => i.subCategory.name.toLowerCase() === "pdf" && i.enabled && i.title.toLowerCase().includes("cv"));

    const renderItem = () => {
        return _.map(projectSortDate, ((i: IProjectModel, idx: number) => {
            let dateStr = "";
            if (i.date) {
                const dateArr = JSON.parse(i.date);
                dateStr = `${moment(dateArr[0]).format("MM/YYYY")} - ${moment(dateArr[1]).format("MM/YYYY")}`;
            }
            return (
                <NavLink to={`/development/project/${i.id}`} className={`item-hover p-0 d-grid-item animated animatedFadeInUp fadeInUp `} key={idx}>
                    <div className={`block bg-amber-100 opacity-30 absolute w-full h-full rounded`} style={{ zIndex: -1 }}></div>
                    <div className="item"></div>
                    <div className={`md:p-6 lg:p-7 border-0 inline-block w-full border-b border-amber-300 p-5 hover:text-white border-none`}>
                        <h2 className={`md:text-lg lg:text-xl tracking-wider md:pb-6 lg:pb-8 lg:py-3 lg:w-3/4 text-yellow-300 pb-4 font-semibold inline-block text-lg w-full leading-10`}>{dateStr}</h2>
                        <p className={`md:text-xl lg:text-2xl lg:pb-6 md:pb-4 lg:py-3 tracking-wide text-white pb-6 inline-block text-2xl w-full min-h-max text-center leading-7`}>{i.name}</p>
                        <hr className={`w-3/4 m-auto block`} />
                        <p className={`text-center font-medium py-5 md:pb-6 lg:pb-10 text-sm text-black opacity-70 uppercase`} style={{ letterSpacing: 4 }}>{i.organization.name}</p>
                    </div>
                </NavLink>
            )
        }))
    }
    useEffect(() => {
        dispatch(getProjectRequest(callbackObj(null, callback("Inside callback after get all project"))));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div className="flex flex-col justify-center section">
            <div className="pl-2 md:pl-0 row justify-content-center pb-6 lg:pb-12 relative md:text-center ml-24 mr-5 md:max-w-xl lg:max-w-3xl md:mx-auto">
                <h2 className="md:text-2xl lg:text-3xl md:mb-2 md:-mt-7 lg:-mt-10 mb-4 tracking-wider text-white text-lg font-medium">Resume</h2>
                <p className="md:text-base lg:text-lg md:pb-3 lg:pb-0 tracking-wide opacity-70 whitespace-nowrap overflow-hidden text-ellipsis">I can accept failure, everyone fails at something. But I can’t accept not trying.</p>
                <span className="opacity-70 pt-1 md:-mr-32 text-sm inline-block w-full text-right">Michael Jordan</span>
            </div>
            <div className={`pb-10 container-dev overflow-y-auto`}>
                <div className="relative ml-24 mr-5 md:max-w-lg lg:max-w-3xl md:mx-auto">
                    <section className="container pl-2 md:pl-0">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {renderItem()}
                        </div>
                    </section>
                </div>
            </div>
        </div >
    );
};
