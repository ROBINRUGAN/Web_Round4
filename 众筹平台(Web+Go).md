# 众筹平台ヾ(≧▽≦*)o

## 合作成员信息

### 前端

- ##### 成员：吴荣榜

- ##### 语言与框架：Vue 2.x

- ##### 学号：222200314

### 后端

- ##### 成员：李梓玄

- ##### 语言与框架：Go (采用gin +gorm编写)

- ##### 学号：222200311

## 项目介绍

### 功能

- #### 登录

  使用**用户名**和**密码**进行登录。通过检索数据库获取用户名存在情况以及用户信息匹配情况，校验通过后返回用户的个人信息，返回**token值**，并向**用户中心**传值。

- #### 注册

  注册的时候需要填写**用户名**，密码，以及**邮箱**。默认注册用户类型为**普通用户**（没有管理员审核系统），且账号余额为0。

- #### 众筹列表

  - 展示审核通过的各个项目，提供**图片缩略图**和**标题**展示，点击可以进入项目详情页。

  - 提供**关键词搜索**功能，且为实时数据监测。

- #### 捐款

  在项目详情页里面有捐款功能，输入金额之后提交即可。

- #### 上传项目

  在首页**点击登记筹款求助**进入上传项目界面。需要提供**标题**，**简介**，**联系电话**，以及**图片**。上传之后，需要管理员进行审核，审核通过后才会在项目众筹列表中展示。

  在用户中心可以查看自己已上传的项目。

- #### 管理员审核

  - 提供三个菜单选项：**所有已审核项目**，**所有未审核项目**，**所有已驳回项目**，点击之后会显示相应的页面。
  - 对于每个项目，管理员可以通过点击**通过**、**驳回**、**删除**三个按钮来实现相应的操作
  - 此外，管理员也可以通过点击项目进入详情页获取项目信息

### 优点

- #### 将项目和数据库部署到服务器，并绑定自己的域名

- #### 使用反向代理配置服务器，解决跨域问题

- #### 使用Token进行身份核验，并将登录信息加入浏览器Cookies

### 不足

- #### 投资无法实现真正人民币投资

- #### 移动端网页未实现适配








