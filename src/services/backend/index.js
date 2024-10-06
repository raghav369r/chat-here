import axios from "axios";
import { getJwt } from "../local";
export const uploadProfile = async (formdata) => {
  const token = getJwt();
  const url = ` http://localhost:3000/uploadprofile`;
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
