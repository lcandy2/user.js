import { GM_xmlhttpRequest } from "$";
import { BASE_HEADERS } from "../consts";

const backgroundRequest = ({ url, method = "get", headers = BASE_HEADERS, body = "" }) => {
    return new Promise((resolve, reject) => {
        GM_xmlhttpRequest({
            url,
            method,
            headers: headers as Record<string, string> | undefined,
            data: body,
            onload: (res) => {
                try {
                    const json = JSON.parse(res.responseText) || {};
                    resolve(json);
                } catch (error) {
                    console.error(error);
                }
            },
            onerror: (err) => {
                reject(err);
            },
        });
    });
}

export default backgroundRequest;