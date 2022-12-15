import React, { useEffect, useState } from "react";
import { Button } from "antd";
import ReactPlayer from 'react-player'
import { ShareAltOutlined, WifiOutlined, CloseOutlined } from '@ant-design/icons';
import { callback, callbackObj, Logo, mapContactWithIcon } from "../global/Global";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getContactRequest } from "../../redux/actions/contact.action";
import { supportFunction } from "../../redux/models/contact.model";
import _ from "lodash";
import { CONTACT } from "../../utils/constant/constant";
import { ContactState } from "../../redux/reducers/root.reducer";
import { IMediaModel } from "../../redux/types/media.type";

export const HeaderClient: React.FC<{ mediaArr: Array<IMediaModel> }> = ({ mediaArr }) => {
    const dispatch = useDispatch();
    const { contactArr } = useSelector((state: ContactState) => state.contact);
    const media = mediaArr?.find((i: IMediaModel) => i.subCategory.name.toLowerCase() === "mp3" && i.enabled);

    const renderContact = () => {
        let social = supportFunction.filterContactByNameList(mapContactWithIcon(contactArr), [CONTACT.EMAIL, CONTACT.LINKEDIN, CONTACT.GITHUB, CONTACT.SKYPE, CONTACT.FACEBOOK])
        return _.map(social, function (i: any) {
            return <a key={i.id} href={i.content} className="hover:text-inherit focus:text-inherit text-inherit opacity-60 hover:opacity-100 focus:opacity-100">{i.icon}</a>
        })
    }
    const [showShare, setShowShare] = useState(false);
    const [sound, setSound] = useState(false);
    const handleShare = () => {
        setShowShare(!showShare);
    }
    const toggleSound = () => {
        setSound(!sound)
    }
    useEffect(() => {
        dispatch(getContactRequest(callbackObj(null, callback("Inside callback after get all contact"))));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div className="p-3 md:p-5 lg:p-2 fixed top-0 left-0 w-screen">
            <Logo />
            <div className={` ${showShare ? "block" : "hidden"} absolute right-5 md:right-6 md:text-2xl md:gap-5 lg:right-7 top-16 text-xl flex flex-row md:flex-col lg:text-2xl lg:gap-6 gap-3 text-amber-50`}>
                {renderContact()}
            </div>
            <Button onClick={handleShare} className="opacity-60 hover:opacity-100 focus:opacity-100 btn-share pr-0 lg:pr-4 float-right bg-transparent hover:bg-transparent focus:bg-transparent border-transparent hover:border-transparent focus:border-transparent">
                <p className="inline-block">
                    {showShare ? <CloseOutlined className="font-medium text-amber-50 text-lg py-1 pr-1.5" /> : <ShareAltOutlined className="font-medium text-amber-50 text-2xl" />}
                </p>
            </Button>
            <Button onClick={toggleSound} className={`btn-sound float-right px-0 ${sound ? "opacity-100" : "hover:opacity-100 opacity-60"} bg-transparent hover:bg-transparent focus:bg-transparent border-transparent hover:border-transparent focus:border-transparent`}>
                <ReactPlayer playing={sound} loop url={media?.src || "/video/piano.mp"} width={0} height={0} />
                <p className="inline-block pt-2">
                    <WifiOutlined className="font-medium text-white p-0 text-base" style={{ transform: "rotateZ(270deg)" }} />
                    <WifiOutlined className="font-medium text-white p-0 text-base" style={{ transform: "rotateZ(90deg)" }} />
                </p>
            </Button>
        </div>
    );
};
