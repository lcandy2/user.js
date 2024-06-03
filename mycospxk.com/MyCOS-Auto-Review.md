# 自动评教：适用于 MyCOS / 麦可思 的自动评教 MyCOS Auto Review

一键评教，自动完成课程评价，支持单选、多选、文本评价。支持仅填充评价和填充并提交评价两种模式。适用于所有采用 MyCOS / 麦可思 （评教系统左上角有MyCOS或M标识）系统的高校或其他单位。

[GitHub](https://github.com/lcandy2/user.js/blob/main/mycospxk.com/MyCOS-Auto-Review.md) | [Greasy Fork](https://greasyfork.org/scripts/467357) | [ScriptCat](https://scriptcat.org/script-show-page/1053) | [Source Code](https://github.com/lcandy2/MyCOS-Auto-Review)

### 功能特点

- 现代化界面：安装脚本后，在学校教学评价页面，会出现自动评价按钮。
  ![自动评价按钮](https://github.com/lcandy2/MyCOS-Auto-Review/assets/45784494/3f60ca86-5a17-430f-8e48-3b9b37eaa850)
- 一键评教：点击评价按钮，会自动填写评价内容，如果点击评价并提交，则会自动提交评价。
  ![一键评教完成](https://github.com/lcandy2/MyCOS-Auto-Review/assets/45784494/6e7b4031-e011-47f5-8910-5906be3ec077)
- 自动提交：可选择开启自动提交功能，评教完成后自动进入下一门课程/教师评教页面。
  ![自动提交评教](https://github.com/lcandy2/MyCOS-Auto-Review/assets/45784494/7d8701a7-0932-43fd-b8f1-af83054bf8d1)
- 简单易用：只需安装浏览器插件，即可一键执行评教任务。

### 安装教程

#### 1. 安装脚本管理器

- [Tampermonkey（推荐）](https://www.tampermonkey.net/)
  - [Chrome 浏览器](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
  - [Firefox 浏览器](https://addons.mozilla.org/firefox/addon/tampermonkey/)
  - [Safari 浏览器](https://apps.apple.com/app/tampermonkey/id1482490089?mt=12)
  - [Microsoft Edge 浏览器](https://microsoftedge.microsoft.com/addons/detail/iikmkjmpaadaobahmlepeloendndfphd)
- 其他脚本管理器

#### 2. 安装脚本

- [Greasy Fork（推荐）](https://greasyfork.org/scripts/467357)
- [ScriptCat](https://scriptcat.org/script-show-page/1053/)
- [GitHub](https://github.com/lcandy2/user.js/blob/main/mycospxk.com/MyCOS-Auto-Review.user.js)

### 使用说明

1. 打开课程评教页面：在浏览器中访问采用 MyCOS / 麦可思 系统（左上角有“MyCOS”或“M”标识）的课程评教页面。

2. 查找一键评教按钮：脚本会添加一个名为“一键评教”的按钮。如果您看不到该按钮，请尝试刷新页面。

3. 自定义评教设置（可选）：如果您想自定义评教设置，可以通过编辑脚本代码中的变量来修改单选题答案、多选题选项和文本题答案。
   ![脚本配置页面](https://github.com/lcandy2/MyCOS-Auto-Review/assets/45784494/6742d669-df2c-4dbc-adcb-556bd7848aa1)

4. 点击一键评教：点击“一键评教”按钮，脚本会自动填写评教内容。如果您点击评价并提交功能，脚本会自动提交评教。

5. 完成评教：评教完成后，您可以在页面上确认评教是否成功。如果开启了自动提交功能，脚本会自动进入下一门课程/教师评教页面。

6. 禁用脚本：为避免与其他网站冲突出错，请在使用完成后及时禁用本脚本。

### 默认配置

脚本的开头包含了一些默认配置选项，您可以根据个人需求对其进行修改。

- `comment`（评价内容）：默认为"我对本课程非常满意。"，即非常满意的评价内容。如果您想修改评价内容，请将该变量的值改为您想要的评价文本。
- `radio`（单选题答案）：默认为`[0, 1]`， 在默认配置下，脚本会在“非常同意”和“同意”之间随机选择。如果您希望修改单选题的答案选项，请将该变量的值修改或增加为您所需的选项序号。其中：
  - `0`：非常同意
  - `1`：同意
  - `2`：一般
  - `3`：不同意
  - `4`：非常不同意
- `checkbox`（多选题全选）：默认为`true`。如果您希望脚本自动勾选多选题的所有选项，请将该变量的值改为`true`。如果您想手动选择多选题的选项，请将该变量的值改为`false`。

### 修改配置

要修改脚本的配置选项，请按照以下步骤进行：

1. 打开脚本代码：在脚本管理器，找到脚本并点击选择“编辑”（或类似选项）。
2. 找到需要修改的配置项：在脚本代码中，找到对应的配置项变量。例如，要修改评价内容，请找到`comment`变量。
3. 修改配置值：将需要的配置值替换为您想要的内容。例如，将`comment`变量的值改为您想要的评价文本。
4. 保存脚本：保存对脚本的修改，以便更新配置。

一旦您修改了配置并保存脚本，重新运行脚本时，它将使用您的新配置进行评教。

请注意，如果您不熟悉编程或对修改代码不太自信，最好请寻求有经验的朋友或专业人士的帮助，以确保修改正确并按您的预期工作。

### 注意事项

- 该脚本仅适用于 MyCOS / 麦可思 系统的课程评教页面，对于其他页面可能无效。
- 自定义评教设置可根据个人需求进行调整，在修改配置时，请确保遵循代码语法和结构。
- 脚本的运行结果可能受到 MyCOS / 麦可思 系统更新和页面结构变化的影响，如果脚本在使用过程中出现问题，请及时反馈给开发者。
- 如果您在修改配置时遇到任何问题，可以随时与脚本作者或相关社区寻求帮助。提供详细的问题描述和相关代码部分，以便他人更好地帮助您。
- 请注意，根据您所在的学校或机构的规定，可能存在限制或规范评教的要求。在使用脚本进行评教时，请确保遵守相关规定，并尊重学校和教师的权益。

### 免责声明

该脚本仅用于辅助自动化评教流程，使用者对评教结果和相关后果负有责任。请在使用脚本时遵守相关法律法规和学校规定，不得滥用脚本功能。

**祝您使用脚本愉快，顺利完成评教任务！**

### 许可

MIT
