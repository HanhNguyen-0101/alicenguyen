import { Carousel, Image } from "antd";
import React from "react";
import moment from "moment";
import { IMediaModel } from "../../redux/types/media.type";
import { IProjectModel } from "../../redux/types/project.type";

const contentStyle: React.CSSProperties = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

export const ProjectDetailComponent: React.FC<{ mediaArr: Array<IMediaModel>, project: IProjectModel, customView: any }> = ({ mediaArr, project, customView }) => {
    let dateStr = "";
    if (project?.date) {
        const dateArr = JSON.parse(project?.date);
        dateStr = `${moment(dateArr[0]).format("MMMM DD, YYYY")} - ${moment(dateArr[1]).format("MMMM DD, YYYY")}`;
    }
    const renderTech = () => {
        let arr = null;
        if (project?.technical) {
            arr = JSON.parse(project?.technical);
            return arr.map((i: string, idx: number) => {
                return <span key={idx} className={`inline-block px-3 py-1 text-sm font-semibold rounded-md opacity-90 ${customView.bright === "b--dark" && "bg-amber-400 text-black"} ${customView.bright === "b--light" && "bg-amber-400"}`}>{i}</span>
            })
        } else {
            return <></>
        }
    }
    const renderCarousel = () => {
        let arr = null;
        if (project?.images) {
            arr = JSON.parse(project?.images);
            return arr.map((i: number, idx: number) => {
                let img = mediaArr?.find(m => m.id === i);
                return img ? <div key={idx} style={contentStyle}>
                    <Image width="100%" src={img.src} alt={img.title} preview={false} />
                </div> : <></>
            })
        } else {
            return <></>
        }
    }
    return (
        <>
            <article className="space-y-8">
                <div className="space-y-6">
                    <div className="flex justify-between w-full flex-row items-center">
                        <p className="lg:text-base md:text-base opacity-90">{project?.subCategory.name}.</p>
                        <p className="flex-shrink-0 text-xs md:text-xs lg:text-xs opacity-70">{dateStr}</p>
                    </div>
                    <h1 className="text-2xl md:text-4xl lg:text-4xl font-bold md:tracking-tight text-inherit">{project?.name}.</h1>
                    <div className="flex flex-wrap space-x-3 pt-2">
                        {renderTech()}
                    </div>
                    <div className="flex flex-wrap pt-2">
                        {project?.link && <div>
                            <span className="opacity-80">URL : </span>
                            <a className="px-2 opacity-90 hover:opacity-100 hover:text-black hover:underline bg-amber-400 text-black font-medium" href={project?.link} target="_blank" rel="noreferrer">{project?.link}</a>
                        </div>}
                    </div>
                </div>
            </article>
            <div className="flex flex-wrap border-t border-dashed border-inherit"></div>
            <div className="flex flex-col flex-wrap space-y-3">
                {project?.organization && <div className="font-medium" >
                    <span className="opacity-80">Organization : </span>
                    <span className="text-lg font-medium text-red-600">{project?.organization.name}</span>
                </div>}
                {project?.members && <div className="font-medium" >
                    <span className="opacity-80">Team members : </span>
                    <span>{project?.members}</span>
                </div>}
            </div>
            {project?.images && <Carousel autoplay>
                {renderCarousel()}
            </Carousel>}
            <div dangerouslySetInnerHTML={{ __html: project?.description }} className="text-sm md:text-xl md:leading-8 font-normal leading-7 lg:text-xl lg:leading-8 post--single-content" />
        </>
    );
};
