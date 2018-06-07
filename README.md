<p align="center">
    <a href="https://nai8.me/sys/to.html?id=6">
        <img src="https://nai8.me/uploads/data/2018/0527/x2K8FKHiFnOjoNJFXHz4ueI8y_ZY7jiI-1527350720.png" height="100" style="border-radius:10px" alt="Hou-Admin Logo"/>
    </a>
</p>
<p align="center">
    一套免费的基于JQ + RequireJS + Semantic-UI的JS集合。
</p>

<p align="center">
    感谢下面伙伴的支持
</p>
<p align="center">
    <a href="https://nai8.me">
        <img src="https://nai8.me/images/logo.png" height="90" alt="https://nai8.me"/>
    </a>
</p>
<p align="center">
    <img src="https://nai8.me/images/qrcodes/xiaobao-qrcode.jpg" height="180" alt="北哥小报"/>
</p>
<p align="center">
    除了代码，还有诗和远方。扫码关注我的公众号。
</p>

## HouJS
Javascript库已经太多太多了，并且很多都足够的稳定好用，我要做的是使用requireJS将好的javascript库整合起来，变成一个集合，为你所用。

## Install of HouJS（HouJS的安装）
下载源代码后将houjs整体放到服务器上，然后只需要引入以下文件
```html
<!--样式文件-->
<link href="xxx/houjs/js/libs/semantic/semantic.min.css" rel="stylesheet">
<link href="xxx/houjs/css/hou.css" rel="stylesheet">

<!--JS文件-->
<script src="xxx/jquery.js"></script>
<script src="xxx/houjs/js/libs/semantic/semantic.min.js"></script>
<script src="xxx/houjs/js/require.js" data-main="xxx/houjs/js/main"></script></head>
```
具体文件的路径请修改成您自己的，同时data-main必须指定为main.js有效的路径，它代表模块的入口配置。

```javascript
// 配置main.js
require.config({
    baseUrl: '/houjs/js/',
    paths: {
        'mods':'mods',
        'libs':'libs',
        'modules':'modules'
    }
});
```
请配置HouJS的js子文件夹所在路径。

**这一切就完成了**

## Use（使用）
当我们部署完之后，使用Hou-Admin的每个功能变的很简单，比如如下代码点击按钮出现弹出框。
```html
<button id="btn">点击我</button>
<script type="text/javascript">
    require(['mods/modal'],function(modal){
        $('#btn').click(function(){
            modal.alert('我是一个按钮');
        });
    });
</script>
```

## Hou-Admin
Hou-Admin是一套由HouJS实现而成的通用型后台管理模板系统，相比较现在大道其行的vue和react，Hou-Admin更适合后端开发人员，拆箱即用，无需更多前端技术和工具就可以轻松搭建出华丽的后台模板。

基于MIT开源协议发布，这意味着无论你是学习还是商业用途，都不会产生版权问题，也欢迎大家使用。

我们的目标是让大家用最少的js代码实现业务需求。

<p align="center">
    <img src="https://nai8.me/images/hou/screen.jpg" width="100%" alt="截屏"/>
</p>


## Set Hou-Admin（配置Hou-Admin）
将html/hou.html做为后台的初始化页面，里面包含菜单和初始化页面。

## Libs（使用到的开源库）
HouJS在界面上使用Semantic UI和JQuery作为基础，同时使用requireJS来组织js代码使其模块化。

## Demo（演示地址）
[Hou-Admin](https://nai8.me/hou)

## Examples（一些常用方案）
- [使用HouJS集成百度ueditor编辑器](https://nai8.me/forum/detail.html?id=115)
- [实现houjs中markdown编辑器（SimpleMDE）本地上传功能](https://nai8.me/forum/detail.html?id=122)

## License（开源协议）
MIT