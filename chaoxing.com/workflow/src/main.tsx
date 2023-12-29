import 'tdesign-react/es/style/index.css';

import { NEW_BASE_SETTINGS } from './courses/consts';
import { Main as CourseMain } from './courses/main';

// 获取当前网址
const currentURL = window.location.href;

const COURSE = currentURL.includes(NEW_BASE_SETTINGS);

$(() => {
  if (COURSE) CourseMain();

});

