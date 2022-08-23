import {
  SITE_GENRL,
  GETSITE_GENRL,
  HOME_BANER,
  NFT_PROMOT,
  NFT_POPULAR,
  NFT_RECENT,
  NFT_BANNER,
  CREATE_SERVICES,
  HOME_DOCS,
  UPDATE_DOCS,
} from "../constat";


import { useNavigate } from "react-router-dom";

import history from "../../components/history/history";
import Cookies from "universal-cookie";


let token = localStorage.getItem("token");




var initState = {
  SiteGenrlmsg: null,
  GetgnrlsiteData: [{}],
  HomeBanner: null,
  NftPromote: "",
  NftPopular: "",
  NftRecent: "",
  NftBanner: "",
  HomeDocs: "",
  isDocUpdated: null,
  SiteGeneralupdate: null,
};

export function adminDashboard_red(state = initState, action) {
  //  const navigate = useNavigate();

  const cookies = new Cookies();

  switch (action.type) {
    case UPDATE_DOCS:
      // state.isDocUpdated = action.payload;
      console.log("isDocUpdated run", action.payload.user);

      return {
        ...state,
        isDocUpdated: action.payload.msg,
      };
      break;

    case HOME_BANER:
      // state.SiteGenrlmsg = "General Setting Succesfully Applied.";
      console.log("reducer run SITE_GENRL");

      console.log(action.payload);

      return {
        ...state,
        // data: action.payload,
        HomeBanner: action.payload,
      };
      break;

    case HOME_DOCS:
      // state.SiteGenrlmsg = "General Setting Succesfully Applied.";
      console.log("reducer run HOME_DOCS");

      console.log(action.payload);

      return {
        ...state,
        // data: action.payload,
        HomeDocs: action.payload,
      };
      break;

    case SITE_GENRL:
      // state.SiteGenrlmsg = "General Setting Succesfully Applied.";
      console.log("reducer run SITE_GENRL");

      console.log(action.payload);

      return {
        ...state,
        // data: action.payload,
        SiteGeneralupdate: action.payload,
      };
      break;

    case NFT_PROMOT:
      console.log("reducer run NFT_PROMOT");

      console.log(action.payload);

      return {
        ...state,
        // data: action.payload,
        NftPromote: action.payload,
      };
      break;

    case NFT_POPULAR:
      console.log("reducer run NFT_POPULAR");

      console.log(action.payload);

      return {
        ...state,
        // data: action.payload,
        NftPopular: action.payload,
      };
      break;

    case NFT_RECENT:
      console.log("reducer run NFT_RECENT");

      console.log(action.payload);

      return {
        ...state,
        // data: action.payload,
        NftRecent: action.payload,
      };
      break;

    case NFT_BANNER:
      console.log("reducer run NFT_BANNER");

      console.log(action.payload);

      return {
        ...state,
        // data: action.payload,
        NftBanner: action.payload,
      };
      break;

    case GETSITE_GENRL:
      // state.SiteGenrlmsg = "General Setting Succesfully Applied.";
      console.log("reducer run SITE_GENRL");

      console.log(action.payload);

      return {
        ...state,
        // data: action.payload,
        GetgnrlsiteData: action.payload,
      };
      break;
    default:
      break;
  }
  return state;
}
