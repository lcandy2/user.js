![运行图](https://raw.githubusercontent.com/lcandy2/ShiTingShuo/master/docs/pic_v4.png)

# 视听说自动答题挂课助手

[GitHub](https://github.com/lcandy2/ShiTingShuo) | [GreasyFork](https://greasyfork.org/zh-CN/scripts/474368-%E6%B8%85%E5%8D%8E%E7%A4%BE%E8%A7%86%E5%90%AC%E8%AF%B4-%E8%87%AA%E5%8A%A8%E7%AD%94%E9%A2%98-2023) | [ScriptCat](https://scriptcat.org/script-show-page/1268)

> 适用于清华英语社 - 视听说
>
> 现已更新 2023 最新适配版, 修复已知问题, 且已完全支持语音题目自动回答和多次提交后获取答案
>
> 本脚本基于[此脚本](https://greasyfork.org/zh-CN/scripts/418876-%E6%B8%85%E5%8D%8E%E7%A4%BE%E8%A7%86%E5%90%AC%E8%AF%B4-%E8%87%AA%E5%8A%A8%E7%AD%94%E9%A2%98)

## 使用

- 点击上方按钮或点此[安装](https://github.com/lcandy2/ShiTingShuo/raw/main/dist/main.user.js)脚本

注：需配合脚本管理器使用，推荐使用 [Tampermonkey](https://www.tampermonkey.net/)

## 构建

```
$ yarn build
```

## 主要功能

- 自动挂机，获得学时
- 自动试错，获取正确答案
- 自动完成相应题目
- 可无人值守，全自动挂课

## 支持题型

> 经过长时间测试，除了题型混合题（极少）外，均能达到完成率100%，<del>除了录音题目</del>，均可自动获取并提交正确答案

1. 填空
2. 录音
3. 视频
4. 单选
5. 下拉选择
6. 角色扮演

## 更新记录

#### v0.4.8

1. 增加“重做已完成题目”功能
2. 优化进度提示

#### v0.4.7

1. 增加进度显示

#### v0.4.6

1. 增加试错次数支持

#### v0.4.5

1. 同步[Atarsei](https://greasyfork.org/zh-CN/scripts/452423-%E6%B8%85%E5%8D%8E%E7%A4%BE%E8%A7%86%E5%90%AC%E8%AF%B4%E4%BF%AE%E6%94%B9%E7%89%88-%E8%87%AA%E5%8A%A8%E7%AD%94%E9%A2%98)代码
2. 修复用户界面不弹出的错误

#### v0.4.4

1. 解决语音获取跨域问题
2. 提高托块题目回答正确率
3. 添加多选题支持

#### v0.4.3

1. 语音分块发送, 修复了发送失败的问题
2. 添加窗口拖动功能

## 常见问题

**1、完成录音题是出现异常？**

请插入麦克风或耳机后重试

**2、会不会被封号？**

不确定！但因只是模拟用户操作，理论上不会

**3、托块拖不进去**

窗口太小就会这样，全屏即可

## 鸣谢

这些人直接或间接对此脚本提供了帮助：
[@hyun](https://greasyfork.org/zh-CN/users/718868-hyun)
[@Atarsei](https://greasyfork.org/zh-CN/users/885971-atarsei)
[@paleblue111](https://greasyfork.org/zh-CN/users/916139-paleblue111)
[@amitopia](https://greasyfork.org/zh-CN/users/918781-amitopia)
[@mfac](https://greasyfork.org/zh-CN/users/966066-mfac)
