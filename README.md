<p align="center">
    <a href="https://nai8.me/app/default_index.html?app_id=2">
        <img src="https://nai8.me/uploads/app/2020/1127/j5G-zys9p96OT42zLhj1gPMixwiIh7ca-1606430030.png" height="100" style="border-radius:10px" alt="HouJs Logo"/>
    </a>
</p>
<p align="center">
    一套免费的基于JQ + RequireJS + Semantic-UI / Bootstrap的JS集合。
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

## Libs（使用到的开源库）
HouJS在界面上使用Semantic UI和JQuery作为基础，同时使用requireJS来组织js代码使其模块化。

## Demo（演示地址）
[Hou-Admin](https://nai8.me/hou)

## License（开源协议）
MIT
