import { API_COURSE_LIST } from "../consts";
import backgroundRequest from "./request";


const getCourseList = async () => {
    const result = [];
    try {
        const response = await backgroundRequest({ url: API_COURSE_LIST.toString() });
        response.channelList.map(item => {
            // 检查每个层级的数据是否存在
            if (item.content && item.content.course && item.content.course.data && item.content.course.data[0]) {
              const id = item.content.course.data[0].id;
              const name = item.content.course.data[0].name;
              const cover = item.content.course.data[0].imageurl || null;
              const school = item.content.course.data[0].schools || null;
              const teacher = item.content.course.data[0].teacherfactor || null;
              result.push({ id: id, name: name, cover: cover, school: school, teacher: teacher });
            } else {
              return null; // 或者返回一个适当的默认值
            }
          });
    } catch (error) {
        console.error(error);
    }
    return result;
}

export default getCourseList;