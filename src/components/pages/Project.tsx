import _ from "lodash";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { getProjectRequest } from "../../redux/actions/project.action";
import { ProjectState } from "../../redux/reducers/root.reducer";
import { IMediaModel } from "../../redux/types/media.type";
import { IProjectModel } from "../../redux/types/project.type";
import { callback, callbackObj } from "../global/Global";

export const Project: React.FC<{ mediaArr: Array<IMediaModel> }> = ({ mediaArr }) => {
    const dispatch = useDispatch();
    const { projectArr } = useSelector((state: ProjectState) => state.project);
    const projects = _.filter(projectArr, (i: IProjectModel) => i.subCategory.name.toLowerCase().includes("working") || i.subCategory.name.toLowerCase().includes("learning"))

    const renderItem = () => {
        return _.map(projects, ((i: IProjectModel, index: number) => {
            let className = "";
            if (index % 2 === 0) {
                switch (index % 3) {
                    case 0:
                        className = "md:col-span-6"
                        break;
                    case 1:
                        className = "md:col-span-5"
                        break;
                    case 2:
                        className = "md:col-span-4"
                        break;
                    default:
                        break;
                }
            } else {
                switch (index % 3) {
                    case 0:
                        className = "md:col-span-8"
                        break;
                    case 1:
                        className = "md:col-span-6"
                        break;
                    case 2:
                        className = "md:col-span-7"
                        break;
                    default:
                        break;
                }
            }
            let firstImageId = i.images ? JSON.parse(i.images)[0] : null;
            let firstImage;
            if (firstImageId) {
                firstImage = mediaArr.find(i => i.id === firstImageId);
            }
            return <NavLink
                key={i.id}
                to={`/development/project/${i.id}`}
                className={`animated animatedFadeInUp fadeInUp hover:text-transparent focus:text-transparent tracking-wider text-center text-white relative w-full h-52 lg:h-64 bg-no-repeat bg-cover ${className}`}
                style={{ backgroundImage: `url(${firstImage ? firstImage.src : "https://source.unsplash.com/random/200x200/?0"})` }}>
                <div className="transition duration-500 delay-150 hover:delay-600 flex flex-col justify-center absolute top-0 left-0 w-full p-3 lg:p-5 h-full opacity-0 hover:opacity-90  hover:bg-yellow-500">
                    <h3 className="text-white font-medium text-lg lg:text-2xl pb-3 lg:pb-5 inline-block">{i.name}</h3>
                    <span className="uppercase font-medium text-xs lg:text-sm text-white tracking-widest">{i.subCategory.name}</span>
                </div>
            </NavLink>
        }))
    }
    useEffect(() => {
        dispatch(getProjectRequest(callbackObj(null, callback("Inside callback after get all project"))));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div className="flex flex-col justify-center section">
            <div className="pl-2 md:pl-0 md:text-center row justify-content-center pb-6 lg:pb-12 relative ml-24 mr-5 md:max-w-xl lg:max-w-3xl md:mx-auto">
                <h2 className="mb-4 md:text-2xl lg:text-3xl text-white text-lg font-medium tracking-wider">Our Projects</h2>
                <p className="opacity-70 md:text-base lg:text-lg tracking-wide whitespace-nowrap overflow-hidden text-ellipsis">Let’s round of his life every job as if it were the last work.
                </p>
                <span className="opacity-70 pt-1 md:-mr-32 text-sm inline-block w-full text-right">Marc Aurele</span>
            </div>
            <div className={`pb-10 container-dev overflow-y-auto`}>
                <div className="relative ml-24 mr-5 md:max-w-lg lg:max-w-3xl md:mx-auto">
                    <section className="container pl-2 md:pl-0 tracking-wide">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                            {renderItem()}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};
