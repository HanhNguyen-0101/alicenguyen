import _ from "lodash";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { callback, callbackObj, WebDevelopmentLink, WritingLink } from "../components/global/Global";
import { getContactRequest } from "../redux/actions/contact.action";
import { alignTreeLeft } from "../redux/actions/tree.action";
import { supportFunction } from "../redux/models/contact.model";
import { ContactState } from "../redux/reducers/root.reducer";
import { IContactModel } from "../redux/types/contact.type";
import { CONTACT } from "../utils/constant/constant";

export const SayHi: React.FC<{}> = (props: any) => {
    const dispatch = useDispatch();
    const { contactArr } = useSelector((state: ContactState) => state.contact);
    const renderContact = (contactArr: any) => {
        return _.map(contactArr, function (i: IContactModel) {
            return <a key={i.id} href={i.content} className="py-2 hover:text-yellow-500 focus:text-white">{i.name?.toLowerCase()}</a>;
        });
    }
    const renderEmail = (contactArr: any) => {
        return _.map(contactArr, function (i: IContactModel) {
            return <>
                <span className="block py-2 md:text-base">{i.name?.toLowerCase()}</span>
                <a key={i.id} href={i.content} className="block font-medium text-lg md:text-xl hover:text-yellow-500 focus:text-white">{i.content}</a>
            </>
        });
    }
    let email = supportFunction.filterContactByNameList(contactArr, [CONTACT.EMAIL]);
    let social = supportFunction.filterContactByNameList(contactArr, [CONTACT.LINKEDIN, CONTACT.GITHUB, CONTACT.FACEBOOK, CONTACT.SKYPE])

    useEffect(() => {
        dispatch(alignTreeLeft());
        dispatch(getContactRequest(callbackObj(null, callback("Inside callback after get all contact"))));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <>
            <div style={{ transform: "translate(-50%, -50%)" }} className="text-center md:text-left md:w-2/3 absolute top-1/2 left-1/2 lg:mt-0 py-4 px-5 text-base md:text-xl w-full z-10">
                <p className="animated animatedFadeInUp fadeInUp mb-4 md:mb-8 inline-block w-full">
                    <span className="block font-medium text-lg md:text-3xl pb-2">having a great idea to share?</span>
                    <span className="block md:text-base">or want to have a cup of coffee and chit chat, just drop me a message.</span>
                </p>
                <p className="animated animatedFadeInUp fadeInUp my-3 inline-block w-full">
                    {renderEmail(email)}
                </p>
                <p className="animated animatedFadeInUp fadeInUp my-3 inline-block w-full max-w-xl">
                    <span className="block py-2 md:text-base">or follow me on</span>
                    <div className="grid grid-cols-2 md:grid-cols-4 font-medium text-lg md:text-xl">
                        {renderContact(social)}
                    </div>
                </p>
            </div>
            <div className="absolute flex justify-start items-center bottom-2 md:bottom-3 left-0 px-4 w-full">
                <div className="inline-block text-amber-50 pr-4 pl-2 leading-8 text-right">
                    <p className="pr-4 focus:text-yellow-500 inline-block hover:text-yellow-500 text-base font-medium"><WebDevelopmentLink /></p>
                    <p className="pr-4 focus:text-yellow-500 inline-block hover:text-yellow-500 text-base font-medium"><WritingLink /></p>
                </div>
            </div>
        </>
    );
};
