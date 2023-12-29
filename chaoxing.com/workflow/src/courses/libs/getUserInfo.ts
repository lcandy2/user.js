import backgroundRequest from "./request";
import { API_USERINFO, API_USERINFO_ALTERNATIVE } from "../consts";

const getUserInfo = async () => {
    const info = {
        uid: '',
        stuid: '',
        schoolName: '',
        name: '',
        phone: '',
        pic: '',
    }

    const getInfo = async (json) => {
        info.uid = json.msg.uid;
        info.stuid = json.msg.uname;
        info.schoolName = json.msg.schoolname;
        info.name = json.msg.name;
        info.phone = json.msg.phone;
        info.pic = json.msg.pic;
    }

    try {
        const response = await backgroundRequest({ url: API_USERINFO.toString() });
        getInfo(response);
    } catch (error) {
        try {
            const response = await backgroundRequest({ url: API_USERINFO_ALTERNATIVE.toString() });
            getInfo(response);
        } catch (error) {
            console.error(error);
        }
        console.error(error);
    }
    return info;
}

export default getUserInfo;