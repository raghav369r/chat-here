import axios from "axios";
import { getJwt } from "../local";
import { BACKEND_URL_HTTP } from "../../utils/constants";
export const uploadProfile = async (formdata) => {
  const token = getJwt();
  const url = `${BACKEND_URL_HTTP}/uploadprofile`;
  try {
    const res = await axios.post(url, formdata, {
      headers: { Authorization: token },
    });
    return res.data;
  } catch (ex) {
    console.log(ex);
    return { error: ex.message };
  }
};
