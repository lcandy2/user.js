export const NEW_BASE_SETTINGS = "i.chaoxing.com/base/settings";
// export const PASSPORT2_MOOC_ACCOUNTMANAGE = "passport2.chaoxing.com/mooc/accountManage"
// export const IDENTIFIER_WORKFLOW_VIDEO = "--lcandy2-chaoxing-workflow=video";
export const API_USERINFO = new URL("https://sso.chaoxing.com/apis/login/userLogin.do");
export const API_USERINFO_ALTERNATIVE = new URL("https://sso.chaoxing.com/apis/login/userLogin4Uname.do");
export const API_COURSE_LIST = new URL("https://mooc1-api.chaoxing.com/mycourse/backclazzdata?view=json&mcode=")

const str_z = (len) => {
    len = len || 32;
    let $chars = 'qwertyuioplkjhgfdsazxcvbnm1234567890';
    let maxPos = $chars.length;
    let pwd = '';
    for (let i = 0; i < len; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return pwd;
}

const ua_str = str_z("32");

export const BASE_HEADERS: HeadersInit = {
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    "User-Agent": "User-Agent: Dalvik/2.1.0 (Linux; U; Android 11; M3121K1AB Build/SKQ1.211006.001) (device:M3121K1AB) Language/zh_CN com.chaoxing.mobile/ChaoXingStudy_3_5.1.4_android_phone_614_74 (@Kalimdor)_" + ua_str,
    'X-Requested-With': 'XMLHttpRequest',
    'Sec-Fetch-Site': 'same-origin',
};
