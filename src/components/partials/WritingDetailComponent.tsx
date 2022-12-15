import React from "react";
import moment from "moment";
import { IBlogModel } from "../../redux/types/blog.type";


export const WritingDetailComponent: React.FC<{ blog: IBlogModel }> = ({ blog }) => {
    return (
        <>
            <article className="space-y-8">
                <div className="space-y-6">
                    <div className="flex justify-between w-full flex-row items-center">
                        <p className="lg:text-base md:text-base opacity-90">{blog?.subCategory.name}.</p>
                        <p className="flex-shrink-0 text-xs md:text-xs lg:text-xs opacity-70">{moment(blog?.createdAt).format("MMMM DD, YYYY")} - 9 phút đọc</p>
                    </div>
                    <h1 className="text-2xl md:text-4xl lg:text-4xl font-bold md:tracking-tight text-inherit">{blog?.title}.</h1>
                </div>
            </article>
            <div className="flex flex-wrap border-t border-dashed border-inherit"></div>
            <div dangerouslySetInnerHTML={{ __html: blog?.content }} className="text-sm md:text-xl md:leading-8 font-normal leading-7 lg:text-xl lg:leading-8 post--single-content" />
        </>
    );
};
