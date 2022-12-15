import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { SayHiLink, WebDevelopmentLink, WritingLink } from "../components/global/Global";
import { alignTreeCenter } from "../redux/actions/tree.action";

export const Homepage: React.FC<{}> = (props: any) => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(alignTreeCenter());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className="text-center mt-10 lg:mt-0 mx-auto p-4 text-base md:text-xl w-3/4 md:w-1/2 z-10">
        <p>I'm Hanh Nguyen, a guy who loves software development, writing & languages.</p>
      </div>
      <div className="animated animatedFadeInUp fadeInUp absolute flex justify-end items-center top-1/2 md:bottom-2/3 left-0 px-6 w-full text-lg md:text-xl font-medium md:pr-16">
        <div className="inline-block text-amber-50 pr-4 pl-2 leading-8 text-right">
          <p className="block focus:text-amber-50 hover:text-slate-50"><WebDevelopmentLink /></p>
          <p className="block focus:text-amber-50 hover:text-slate-50"><WritingLink /></p>
        </div>
        <p className="inline-block text-yellow-500 pl-4 pr-2 text-4xl md:text-5xl hover:text-yellow-400 focus:text-yellow-500">
          <SayHiLink />
        </p>
      </div>
    </>
  );
};
