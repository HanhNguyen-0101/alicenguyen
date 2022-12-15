import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { ContactState } from "../../redux/reducers/root.reducer";
import { getContactRequest } from "../../redux/actions/contact.action";
import _ from "lodash";
import { CONTACT } from "../../utils/constant/constant";
import { supportFunction } from "../../redux/models/contact.model";
import { callback, callbackObj, mapContactWithIcon } from "../global/Global";
import { IMediaModel } from "../../redux/types/media.type";

export const About: React.FC<{ mediaArr: Array<IMediaModel> }> = ({ mediaArr }) => {
    const dispatch = useDispatch();
    const { contactArr } = useSelector((state: ContactState) => state.contact);
    const CV = mediaArr.find(i => i.subCategory.name.toLowerCase() === "pdf" && i.enabled && i.title.toLowerCase().includes("cv"));

    const renderContact = () => {
        let social = supportFunction.filterContactByNameList(mapContactWithIcon(contactArr), [CONTACT.LINKEDIN, CONTACT.GITHUB, CONTACT.FACEBOOK, CONTACT.SKYPE])
        return _.map(social, function (i: any) {
            return <a
                href={i.content}
                key={i.id}
                target="_blank"
                className="hover:text-inherit focus:text-inherit text-inherit opacity-70 hover:opacity-100 hover:text-amber-400 focus:text-amber-400 focus:opacity-100"
                rel="noreferrer">{i.icon}</a>
        })
    }
    const renderInfoNoLink = () => {
        const info = supportFunction.filterContactByNameList(contactArr, [CONTACT.NAME, CONTACT.BIRTHDAY, CONTACT.ADDRESS]);
        return _.map(info, function (i: any) {
            return <p key={i.id} className="py-2 md:py-3 inline-block w-full md:grid md:grid-cols-3 md:gap-4">
                <span className="block md:text-base opacity-80">{i.name.toLowerCase()}</span>
                <span className="md:col-span-2 block font-medium text-base md:text-lg focus:text-white">{i.content}</span>
            </p>
        })
    }
    const renderInfoWithLink = () => {
        const info = supportFunction.filterContactByNameList(contactArr, [CONTACT.EMAIL, CONTACT.PHONE]);
        return _.map(info, function (i: any) {
            return <p key={i.id} className="py-2 md:py-3 inline-block w-full md:grid md:grid-cols-3 md:gap-4">
                <span className="block md:text-base opacity-80">{i.name.toLowerCase()}</span>
                <a href={i.content} className="md:col-span-2 block font-medium text-base md:text-lg hover:text-yellow-500 focus:text-white">{i.content}</a>
            </p>
        })
    }
    useEffect(() => {
        dispatch(getContactRequest(callbackObj(null, callback("Inside callback after get all contact"))));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div className="flex flex-col justify-center section">
            <div className="pl-2 md:pl-0 md:text-center row justify-content-center pb-6 lg:pb-12 relative ml-24 mr-5 md:max-w-xl lg:max-w-3xl md:mx-auto">
                <h2 className="mb-4 md:text-2xl lg:text-3xl text-white text-lg font-medium tracking-wider">About Me</h2>
                <p className="opacity-70 md:text-base lg:text-lg tracking-wide whitespace-nowrap overflow-hidden text-ellipsis">Doing what you like is freedom. Liking what you do is happiness.</p>
                {CV && <a href={CV?.src} target="_blank" className="md:hidden hover:text-black hover:opacity-100 focus:text-black focus:opacity-100 absolute top-0 text-black font-medium text-sm bg-yellow-200 opacity-80 py-1 px-3 -right-5" rel="noreferrer">Download CV</a>}
            </div>
            <div className={`pb-10 container-dev overflow-y-auto`}>
                <div className="animated animatedFadeInUp fadeInUp relative ml-24 mr-5 md:max-w-lg lg:max-w-xl md:mx-auto">
                    <section className="container pl-2 md:pl-0 tracking-wide">
                        {renderInfoNoLink()}
                        {renderInfoWithLink()}
                        <p className="py-2 md:py-3 inline-block w-full md:grid md:grid-cols-3 md:gap-4">
                            <span className="block md:text-base opacity-80">or follow me on</span>
                            <div className={`md:col-span-2 md:text-3xl md:gap-8 text-xl flex flex-row lg:text-2xl lg:gap-6 gap-3 text-amber-50`}>
                                {renderContact()}
                            </div>
                        </p>
                        <p className="text-center hidden md:block pt-8 w-full md:grid-cols-3 md:gap-4">
                            <div></div>
                            {CV && <a href={CV?.src} target="_blank" className="text-center p-2 uppercase lg:text-base hover:text-black focus:text-black text-black font-medium text-sm bg-yellow-500" rel="noreferrer">Download CV</a>}
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};