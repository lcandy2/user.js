import { useState, useEffect } from 'preact/hooks'
import { AutoComplete, Avatar, Comment, Divider, HighlightOption, Textarea } from 'tdesign-react'
import getUserInfo from './libs/getUserInfo';
import getCourseList from './libs/getCourseList';
// import { IDENTIFIER_WORKFLOW_VIDEO, PASSPORT2_MOOC_ACCOUNTMANAGE } from './consts'

const classStyles = `
<style>
.course-list .t-select-option {
  height: 50px;
}

.course-list .custom-option {
  display: flex;
  align-items: center;
}

.course-list .custom-option > img {
  height: 32px;
  width: 48px;
}

.course-list .custom-option__main {
  margin-left: 8px;
}

.course-list .custom-option .description {
  color: var(--td-gray-color-9);
}
</style>
`;


export function App() {
  const [avatarUrl, setAvatarUrl] = useState('');
  const [name, setName] = useState('');
  const [stuid, setStuid] = useState('');
  const [school, setSchool] = useState('');
  const [courseList, setCourseList] = useState([]);
  const [courseListInput, setCourseListInput] = useState('');
  const [courseListValue, setCourseListValue] = useState([]);

  const fetchUserInfo = async () => {
    const userInfo = await getUserInfo();
    setAvatarUrl(userInfo.pic.replace('100_100', '40_40'));
    setName(userInfo.name);
    setStuid(userInfo.stuid);
    setSchool(userInfo.schoolName);
  };

  const fetchCourseList = async () => {
    const list = await getCourseList();
    setCourseList(list);
  }

  useEffect(() => {
    fetchUserInfo();
    fetchCourseList();
    $('head').append(classStyles);
  }, []);

  useEffect(() => {
    setCourseValue();
  }, [courseListInput]);

  const courseListOptions = [
    {
      text: "全部课程###0@0###",
      label: (
        <div className="custom-option" id="all">
          <div className="custom-option__main">
            <span>全部课程</span>
          </div>
        </div>
      )
    },
    ...(
      courseList.length > 0 ? courseList.map((item, index) => ({
        text: `${item.name}###${item.id}@${(index + 1).toString()}###`,
        label: (
          <div className="custom-option" id={item.id}>
            <img src={item.cover} />
            <div className="custom-option__main">
              <HighlightOption content={item.name} keyword={courseListInput} />
              <small className="description">{item.teacher}{item.school && ` | ${item.school}`}</small>
            </div>
          </div>
        )
      })) : []
    )
  ];

  const courseListFilter = (keyword, option) => {
    const spaceRegex = new RegExp(/\s+/g);
    const optionRegex = new RegExp(/###[\d@]+###/g);
    const optionProcessed = option.text.replace(optionRegex, '').replace(spaceRegex, '').toLowerCase();
    const keywordProcessed = keyword.replace(spaceRegex, '').toLowerCase();
    return optionProcessed.includes(keywordProcessed);
  }

  const setCourseValue = () => {
    const pattern = new RegExp(/(.+)###(\d+)@(\d+)###/);
    const match = courseListInput.match(pattern);
    if (match) {
      const index = parseInt(match[3]) 
      const id = match[2];
      const name = match[1];
      setCourseListValue([id, index, name]);
      setCourseListInput(name);
    }
  }

  const courseListOnBlur = () => {
  }

  const courseListOnFocus = () => {
  }

  return (
    <div style={{ paddingRight: 38 }}>
      <Comment
        avatar={(avatarUrl) ? <Avatar image={avatarUrl} size='small' /> : (name) ? <Avatar size='small'>name</Avatar> : null}
        author={name}
        datetime={`${stuid} | ${school}`}
        style={{ height: '32px' }}
      />
      <Divider
        align="center"
        layout="horizontal"
        style={{ margin: '8px 0' }}
      >
        将使用此账号完成视频学习
      </Divider>
      <AutoComplete
        value={courseListInput}
        options={courseListOptions}
        onChange={setCourseListInput}
        onFocus={courseListOnFocus}
        onBlur={courseListOnBlur}
        highlightKeyword
        placeholder="请输入关键词搜索"
        filter={courseListFilter}
        popupProps={{ overlayClassName: '--lcandy2-chaoxing-workflow course-list' }}
        style={{ maxWidth: 600 }}
      />
    </div>
  )
}
