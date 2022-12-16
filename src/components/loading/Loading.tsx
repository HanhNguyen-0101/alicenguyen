import React from "react";
import { useSelector } from "react-redux";
import LoadingStyle from "./../../css/loading/loading.module.css";

export default function Loading() {
  const { isLoading } = useSelector((state:any) => state.loading);
  const loadingClass = isLoading ? "show-loading" : "hide-loading";
  return (
    <div className={`${LoadingStyle.loading} ${LoadingStyle[loadingClass]}`}>
      <div className={`${LoadingStyle.logo}`}>
        <img alt="loading" src="images/loading/logo.gif" width={300} />
      </div>
      <div className={`${LoadingStyle.tree}`}>
        <img alt="loading" src="images/loading/tree.gif" />
      </div>
      <div className={`${LoadingStyle.catus}`}>
        <img alt="loading" src="images/loading/catus.gif" width={150} />
      </div>
    </div>
  );
}