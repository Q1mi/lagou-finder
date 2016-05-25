LagouJobsFinder
===
方便`就近`找到合适的工作
---

## 功能介绍

* 指定过滤条件抓取Lagou网的职位
* 调用百度地图API获取职位地理位置
* 所获信息存入sqlite数据库中
* 使用Flask提供前端展示

## 目录结构
    lagou-finder
    ├── README.md
    ├── demo.png #示例图
    ├── BaiduMapApi.py #百度API文件
    ├── finder.py #查找工作
    ├── jobDB.py #数据库model
    ├── lagouAPI.py #拉勾网API文件
    ├── webapp.py #主程序
    ├── LICENSE
    ├── sqlite.data #sqlite数据库
    ├── static #静态文件
    │   ├── plugins #插件
    │   ├── favicon.ico #图标
    │   ├── js #javascripts文件
    │   │   ├── BaiDuApi_MDT.js
    │   │   ├── index.coffee
    │   │   ├── index.js
    │   │   └── index2.js #当前使用的js文件
    │   ├── plugins #插件
    │   └── styles #存放样式文件
    │       └── common.css #共用样式文件
    └── templates #html文件
        ├── about.html #关于页
        ├── index.html #主页
        └── index2.html #当前使用的主页


## 作者介绍
### sagaxu:
1. Java和PHP都在工作中用了3年以上，Python使用强度没那么高，业余爱好就选它了。
2. Python的Library非常丰富，十分适合做各种小工具，工作中我也常用它写simulator。
### Q1mi:
1. 学习Python中...

## 遗留问题

1. 异常处理和日志功能暂未添加。


## DEMO展示
![alt tag](https://github.com/sagaxu/lagou-finder/raw/master/demo.png)
