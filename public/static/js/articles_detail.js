// 获取点击的文章的id
let detail = () => {
    $('#view').css('display', 'none')
    $('#view_Detail').css('display', 'block')
    $('#about').css('display', 'none')
    let that=event.currentTarget;
    let id = $(that)[0].id
    // console.log($(that)[0].id);
    detailShow(id)
}

// 获取跳转文章详情页面
let detailShow = id => {
    let articleDetail =  $('#articleDetail').html()
    detailData()
}

let detailData = () => {
    let data = { //数据
        "title":"文章标题",
        "content": "<h2>文章标题111111</h2><br/><p>这是文章内容</p><p>这是文章内容</p><p>这是文章内容</p><p>这是文章内容</p><p>这是文章内容</p><p>这是文章内容</p><p>这是文章内容</p><p>这是文章内容</p><p>这是文章内容</p>",
        "c_num": 11,
        "c_status": 1,
        "contents": [
            {
                "id": 1,
                "username": '小汪汪',
                "time": '2025-05-29 11:00',
                "content": '文章写得不错'
            },
            {
                "id": 2,
                "username": '小汪汪',
                "time": '2025-05-29 11:00',
                "content": '文章写得不错'
            },
            {
                "id": 3,
                "username": '小汪汪',
                "time": '2025-05-29 11:00',
                "content": '文章写得不错'
            },
            {
                "id": 4,
                "username": '小汪汪',
                "time": '2025-05-29 11:00',
                "content": '文章写得不错'
            }
        ]
    }

    let getTpl = articleDetail.innerHTML
        ,view = document.getElementById('view_Detail');
    laytpl(getTpl).render(data, function(html){
        view.innerHTML = html;
    });

    // 分页
    pages("contents_page", 50)
}