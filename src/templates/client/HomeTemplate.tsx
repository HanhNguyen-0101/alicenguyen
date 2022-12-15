import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Flower from "../../components/flowers/Flower";
import { callback, callbackObj } from "../../components/global/Global";
import { HeaderClient } from "../../components/header/HeaderClient";
import { getMediaRequest } from "../../redux/actions/media.action";
import { MediaState, TreeState } from "../../redux/reducers/root.reducer";

export const HomeTemplate: React.FC<{}> = (props: any) => {
  const dispatch = useDispatch();
  const { mediaArr } = useSelector((state: MediaState) => state.media);
  const { alignTree } = useSelector((state: TreeState) => state.tree);
  useEffect(() => {
    dispatch(getMediaRequest(callbackObj(null, callback("Inside callback after get all media"))));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="home">
      <div className="absolute top-0 left-0 w-full h-full z-10 text-slate-50">
        <div className="max-h-screen overflow-y-hidden pt-32">
          <HeaderClient mediaArr={mediaArr} />
          <Outlet />
        </div>
      </div>
      <Flower align={alignTree} />
    </div>
  );
};
