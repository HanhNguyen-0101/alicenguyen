import _ from "lodash";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { supportFunction } from "../../redux/models/contact.model";
import { CONTACT } from "../../utils/constant/constant";
import { callback, callbackObj, mapContactWithIcon } from "../global/Global";
import { ContactState } from "../../redux/reducers/root.reducer";
import { useDispatch } from "react-redux";
import { getContactRequest } from "../../redux/actions/contact.action";

function Banner() {
  const dispatch = useDispatch();
  const [bannerOpen, setBannerOpen] = useState(true);
  const { contactArr } = useSelector((state: ContactState) => state.contact);
  const renderContact = () => {
    let social = supportFunction.filterContactByNameList(
      mapContactWithIcon(contactArr),
      [
        CONTACT.EMAIL,
        CONTACT.LINKEDIN,
        CONTACT.GITHUB,
        CONTACT.SKYPE,
        CONTACT.FACEBOOK,
      ]
    );
    return _.map(social, function (i: any) {
      return (
        <a
          key={i.id}
          href={i.content}
          target="_blank"
          className="font-medium leading-none hover:underline text-amber-500 hover:text-amber-700 focus:text-amber-500"
          rel="noreferrer"
        >
          {i.icon}
        </a>
      );
    });
  };
  useEffect(() => {
    dispatch(
      getContactRequest(
        callbackObj(null, callback("Inside callback after get all contact"))
      )
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {bannerOpen && (
        <div className="fixed bottom-0 right-0 w-full md:bottom-8 md:right-12 md:w-auto z-50">
          <div className="bg-slate-800 text-slate-50 text-sm py-3 px-4 md:rounded shadow-lg flex justify-between">
            <div className="text-slate-500 inline-flex gap-x-4 pb-1.5 leading-none text-2xl">
              {renderContact()}
            </div>
            <button
              className="text-slate-500 hover:text-slate-400 pl-3 ml-4 border-l border-gray-700"
              onClick={() => setBannerOpen(false)}
            >
              <span className="sr-only">Close</span>
              <svg
                className="w-4 h-4 shrink-0 fill-current"
                viewBox="0 0 16 16"
              >
                <path d="M12.72 3.293a1 1 0 00-1.415 0L8.012 6.586 4.72 3.293a1 1 0 00-1.414 1.414L6.598 8l-3.293 3.293a1 1 0 101.414 1.414l3.293-3.293 3.293 3.293a1 1 0 001.414-1.414L9.426 8l3.293-3.293a1 1 0 000-1.414z" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Banner;
