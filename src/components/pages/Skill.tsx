import React, { useEffect } from "react";
import { } from '@ant-design/icons';
import { Progress } from "antd";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { SkillState } from "../../redux/reducers/root.reducer";
import { getSkillRequest } from "../../redux/actions/skill.action";
import { callback, callbackObj } from "../global/Global";
import _ from "lodash";
import { ISkillModel } from "../../redux/types/skill.type";

export const Skill: React.FC<{}> = (props: any) => {
    const dispatch = useDispatch();
    const { skillArr } = useSelector((state: SkillState) => state.skill);

    const renderSkill = () => {
        return _.map(skillArr, ((i: ISkillModel, idx: number) => {
            return <div key={idx} className="pb-2">
                <div className="grid grid-cols-2 font-medium opacity-90">
                    <p className="md:text-base">{i.name}</p>
                    <p className="text-right md:text-base">{`${i.rate}%`}</p>
                </div>
                <Progress percent={i.rate} showInfo={false} trailColor="#e9e26745" strokeColor="#ffbd39" />
            </div>
        }))
    }
    useEffect(() => {
        dispatch(getSkillRequest(callbackObj(null, callback("Inside callback after get all skill"))));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div className="flex flex-col justify-center section">
            <div className="row justify-content-center pb-6 lg:pb-12 relative md:text-center ml-24 mr-5 md:max-w-xl lg:max-w-3xl md:mx-auto">
                <h2 className="mb-4 md:text-2xl lg:text-3xl text-white text-lg font-medium tracking-wider">My Skills</h2>
                <p className="opacity-70 md:text-base lg:text-lg tracking-wide whitespace-nowrap overflow-hidden text-ellipsis">No challenge shall never know all its capabilities.</p>
                <span className="opacity-70 pt-1 md:-mr-32 text-sm inline-block w-full text-right">Goethe</span>
            </div>
            <div className={`pb-10 container-dev overflow-y-auto`}>
                <div className="animated animatedFadeInUp fadeInUp relative ml-24 mr-5 md:max-w-lg lg:max-w-3xl md:mx-auto">
                    <section className="container">
                        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 lg:gap-14">
                            {renderSkill()}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};
