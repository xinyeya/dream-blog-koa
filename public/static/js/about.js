$('body').ready(function() {
    let data = { //数据
        "title":"文章标签",
        "list":[
            '标签111', '标签2', '标签2424243', "标签4",
            '标签111', '标签2', '标签2424243', "标签4",
            '标签111', '标签2', '标签2424243', "标签4"
        ]
    }
    var getTpl = aboutView.innerHTML
        ,view = document.getElementById('about');
    laytpl(getTpl).render(data, function(html){
        view.innerHTML = html;
    });
})