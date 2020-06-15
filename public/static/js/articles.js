let data = [
    {
        "id": 1,
        "title":"文章标题",
        "desc": '这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介',
        "image": "https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3544375238,114231233&fm=26&gp=0.jpg",
        "label": ['标签1', '标签2', '标签3'],
        "create_time": "2020-5-28 09:46"
    },
    {
        "id": 2,
        "title":"文章标题",
        "desc": '这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介',
        "image": "https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3544375238,114231233&fm=26&gp=0.jpg",
        "label": ['标签1', '标签2', '标签3'],
        "create_time": "2020-5-28 09:46"
    },
    {
        "id": 3,
        "title":"文章标题",
        "desc": '这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介',
        "image": "",
        "label": ['标签1', '标签2', '标签3'],
        "create_time": "2020-5-28 09:46"
    },
    {
        "id": 4,
        "title":"文章标题",
        "desc": '这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介',
        "image": "https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3544375238,114231233&fm=26&gp=0.jpg",
        "label": ['标签1', '标签2', '标签3'],
        "create_time": "2020-5-28 09:46"
    }
]

var getTpl = article.innerHTML
    ,view = document.getElementById('view');
laytpl(getTpl).render(data, function(html){
    view.innerHTML = html;
});