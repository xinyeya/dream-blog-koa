(function () {
//初始化小人物 需设置属性pluginRootPath: "live2dw/"指明资源跟路径
    L2Dwidget.init({
        pluginRootPath: "lib/live2d/live2dw/",//资源root路径
        pluginJsPath: "lib/",//js相对root的路径
        pluginModelPath: "assets/",//模型相对root的路径
        tagMode: !1,
        debug: !1,
        model: {
            scale: 2,
            jsonPath: "/static/lib/live2d/live2dw/assets/model/sagiri/sagiri.model.json"
        },
        display: {//大小位置什么的自己慢慢调就是了
            position: "right",//定位
            width: 100,//宽度
            height: 180,//高度
            hOffset: 40,//左右
            vOffset: 0//上下
        },
        mobile: {
            show: !1
        },
        log: !1
    });
})()