# dream-blog后台接口

## 用户管理

### 查看用户信息

路由：`/admin/users`

请求方式：`GET`

参数：空（可选）

返回案例
```json
// 成功
{
	"code": 200,
	"msg": "成功",
	"data": [{
		"username": "admin",
		"desc": "11",
		"qq": "1329132389",
		"a_num": 0,
		"p_num": 0,
		"h_num": 0
	}]
}

// 失败
{
	"code": 200,
	"msg": "成功"
}
```


### 修改用户信息

路由：`/admin/user/update`

请求方式：`POST`

参数

| key        | type     | 描述     | 是否必须传 |
| ---------- | -------- | -------- | ---------- |
| `username` | `string` | 用户名   | 是         |
| `password` | `string` | 用户密码 | 否         |
| `qq`       | `string` | 用户qq   | 否         |
| `desc`     | `string` | 用户简介 | 否         |
| `avatar`   | `file`   | 用户头像 | 否         |

返回数据：

```json
// 成功
{
	"code": 200,
	"msg": "成功"
}

// 失败
{
	"code": 500,
	"msg": "失败"
}
```



###  文章管理

### 查看文章

路由：`/admin/article`

请求方式：`GET`

参数：空（可选）

| key      | type     | 描述       |
| -------- | -------- | ---------- |
| `search` | `object` | 搜索值     |
| `skip`   | `int`    | 第几页     |
| `limit`  | `int`    | 每页多少条 |

### 添加文章

路由：`/admin/article/add`

请求方式：`POST`

参数：

| key           | type     |    描述      |
| :------------ | :------- | -------- |
| `title`    | `string` | 文章标题   |
| `desc`    | `string` | 文章简介     |
| `content`         | `string`    | 文章内容1     |
| `c_id`      | `string`    | 分类id     |
| `comon_status` | `int`    | 是否开启评论`(0/1)` |
| `cover`      | `file`    | 文章封面 |

返回数据：

| 数据     | 状态 |
| -------- | ---- |
| 添加成功 | 成功 |
| 添加失败 | 失败 |



### 修改文章内容

路由：`/admin/article/update`

请求方式：`POST`

参数

| key    | type     | 描述       |
| ------ | -------- | ---------- |
| `id`   | `string` | 文章`id`   |
| `data` | `object` | 修改的数据 |

返回数据：

| 数据     | 状态 |
| -------- | ---- |
| 修改成功 | 成功 |
| 修改失败 | 失败 |



### 删除文章
路由：`/admin/article/del`

请求方式：`DELETE`

参数

| key  | type     | 描述   |
| ---- | -------- | ------ |
| `id` | `array` | 文章id |

返回数据

| 数据     | 状态 |
| -------- | ---- |
| 删除成功 | 成功 |
| 删除失败 | 失败 |

## 标签管理

### 查看分类

路由：`/admin/labels`

请求方式：`GET`

参数：空

```json
{
    "code": 200,
    "msg": "成功",
    "data": [
        {
            "id": 1,
            "title": "标签1"
        },
        {
            "id": 2,
            "title": "标签2"
        },
        {
            "id": 3,
            "title": "标签3"
        },
        {
            "id": 4,
            "title": "标签4"
        },
        {
            "id": 5,
            "title": "标签5"
        },
        {
            "id": 6,
            "title": "标签6"
        },
        {
            "id": 11,
            "title": "标签7"
        }
    ]
}
```



### 添加分类

路由：`/admin/labels/insert`

请求方式：`POST`

参数：

| key           | type     |    描述      |
| :------------ | :------- | -------- |
| `title`    | `object` | 分类标题   |

返回数据：

```json
// 成功案例
{
    "code": 200,
    "msg": "添加成功"
}
// 失败案例
{
    "code": 500,
    "msg": "添加失败"
}
```



### 删除分类

路由：`/admin/class_label/del`

请求方式：`DELETE`

参数

| key  | type     | 描述   |
| ---- | -------- | ------ |
| `id` | `object` | 分类id |

返回数据

```json
// 成功案例
{
    "code": 200,
    "msg": "删除成功"
}
// 失败案例
{
    "code": 500,
    "msg": "数据不存在"
}
```



## 音乐管理

### 查看音乐

路由：`/admin/music`

请求方式：`GET`

参数：空（可选）

| key     | type     | 描述       |
| ------- | -------- | ---------- |
| `skip`  | `int`    | 第几页     |
| `limit` | `int`    | 每页多少条 |

返回数据：

```json
{
	"code": 200,
	"msg": "查询成功",
	"data": [{
		"id": 1,
		"title": "反语",
		"music": "https://sharefs.yun.kugou.com/202006040937/9e29ea4a94c1a73b0485b36c78eaeb72/G190/M0A/19/15/npQEAF4YclyAbOSfAD7cFW0auNM105.mp3",
		"singer": "まじ娘",
		"images": "http://singerimg.kugou.com/uploadpic/softhead/150/20200331/20200331104759985.jpg"
	}, {
		"id": 4,
		"title": "CARAMELLDANSEN(ウッーウッーウマウマ(゜∀゜))(Speedycake Remix)",
		"music": "http://music.163.com/song/media/outer/url?id=4879880.mp3",
		"singer": "キャラメル",
		"images": "http://127.0.0.1:3000undefined"
	}, {
		"id": 3,
		"title": "测试音乐标题",
		"music": "测试音乐链接",
		"singer": "测试音乐歌手",
		"images": "http://127.0.0.1:3000/uploads/202064/1591243326319.jpg"
	}]
}
```



### 搜索音乐
路由：`/admin/music`

请求方式：`GET`

参数：空（可选）

| key     | type     | 描述       |
| ------- | -------- | ---------- |
| `skip`  | `int`    | 第几页     |
| `limit` | `int`    | 每页多少条 |
| `search` | `string`    | 搜索标题 |

返回数据：

```json
{
	"code": 200,
	"msg": "查询成功",
	"data": [{
		"id": 1,
		"title": "反语",
		"music": "https://sharefs.yun.kugou.com/202006040937/9e29ea4a94c1a73b0485b36c78eaeb72/G190/M0A/19/15/npQEAF4YclyAbOSfAD7cFW0auNM105.mp3",
		"singer": "まじ娘",
		"images": "http://singerimg.kugou.com/uploadpic/softhead/150/20200331/20200331104759985.jpg"
	}, {
		"id": 4,
		"title": "CARAMELLDANSEN(ウッーウッーウマウマ(゜∀゜))(Speedycake Remix)",
		"music": "http://music.163.com/song/media/outer/url?id=4879880.mp3",
		"singer": "キャラメル",
		"images": "http://127.0.0.1:3000undefined"
	}, {
		"id": 3,
		"title": "测试音乐标题",
		"music": "测试音乐链接",
		"singer": "测试音乐歌手",
		"images": "http://127.0.0.1:3000/uploads/202064/1591243326319.jpg"
	}]
}
```




### 添加音乐

路由：`/admin/musics/insert`

请求方式：`POST`

参数：

| key           | type     |    描述      |
| :------------ | :------- | -------- |
| `title`    | `string` | 音乐标题 |
| `link` | `string` | 音乐直链 |
| `singer` | `string` | 音乐作者 |
| `images` | `string` | 音乐封面 |


返回数据：

```json
// 成功案例
{
    "code": 200,
    "msg": "删除成功"
}
// 失败案例
{
    "code": 500,
    "msg": "数据不存在"
}
```



### 修改音乐

路由：`/admin/music/update`

请求方式：`POST`

参数

| key    | type     | 描述       |
| ------ | -------- | ---------- |
| `id`   | `string` | 分类`id`   |
| `data` | `object` | 修改的音乐信息 |

返回数据：

| 数据     | 状态 |
| -------- | ---- |
| 修改成功 | 成功 |
| 修改失败 | 失败 |



### 删除音乐

路由：`/admin/musics/del`

请求方式：`DELETE`

参数

| key  | type     | 描述   |
| ---- | -------- | ------ |
| `id` | `int` | 音乐id |

返回数据

```json
// 成功案例
{
    "code": 200,
    "msg": "删除成功"
}
// 失败案例
{
    "code": 500,
    "msg": "删除失败"
}
```



## 评论管理

### 查看评论

路由：`/admin/comments`

请求方式：`GET`

参数：空（可选）

| key      | type     | 描述       |
| -------- | -------- | ---------- |
| `search` | `object` | 搜索值     |
| `skip`   | `int`    | 第几页     |
| `limit`  | `int`    | 每页多少条 |


### 删除评论

路由：`/admin/comments/del`

请求方式：`DELETE`

参数

| key  | type     | 描述   |
| ---- | -------- | ------ |
| `id` | `array` | 分类id |

返回数据

| 数据     | 状态 |
| -------- | ---- |
| 删除成功 | 成功 |
| 删除失败 | 失败 |



# 下面接口开发中

---



## 友情链接

### 查看友链

路由：`/admin/friend_link`

请求方式：`GET`

参数：空（可选）

| key      | type     | 描述       |
| -------- | -------- | ---------- |
| `search` | `object` | 搜索值     |
| `skip`   | `int`    | 第几页     |
| `limit`  | `int`    | 每页多少条 |



### 添加友链

路由：`/admin/friend_link/add`

请求方式：`POST`

参数：

| key           | type     |    描述      |
| :------------ | :------- | -------- |
| `title`    | `string` | 友链标题 |
| `link` | `string` | 友情链接 |


返回数据：

| 数据     | 状态 |
| -------- | ---- |
| 添加成功 | 成功 |
| 添加失败 | 失败 |



### 修改友链

路由：`/admin/friend_link/update`

请求方式：`POST`

参数

| key    | type     | 描述       |
| ------ | -------- | ---------- |
| `id`   | `string` | 友链`id`   |
| `data` | `object` | 修改的友情链接 |

返回数据：

| 数据     | 状态 |
| -------- | ---- |
| 修改成功 | 成功 |
| 修改失败 | 失败 |



### 删除友链

路由：`/admin/friend_link/del`

请求方式：`DELETE`

参数

| key  | type     | 描述   |
| ---- | -------- | ------ |
| `id` | `array` | 友链id |

返回数据

| 数据     | 状态 |
| -------- | ---- |
| 删除成功 | 成功 |
| 删除失败 | 失败 |

## 广告链接

### 查看广告

路由：`/admin/advertising`

请求方式：`GET`

参数：空（可选）

| key      | type     | 描述       |
| -------- | -------- | ---------- |
| `search` | `object` | 搜索值     |
| `skip`   | `int`    | 第几页     |
| `limit`  | `int`    | 每页多少条 |



### 添加广告

路由：`/admin/advertising/add`

请求方式：`POST`

参数：

| key           | type     |    描述      |
| :------------ | :------- | -------- |
| `title`    | `string` | 广告标题 |
| `link` | `string` | 广告链接 |
| `img_title` | `file` | 封面图 |


返回数据：

| 数据     | 状态 |
| -------- | ---- |
| 添加成功 | 成功 |
| 添加失败 | 失败 |



### 修改广告

路由：`/admin/advertising/update`

请求方式：`POST`

参数

| key    | type     | 描述       |
| ------ | -------- | ---------- |
| `id`   | `string` | 广告`id`   |
| `data` | `object` | 修改的广告 |

返回数据：

| 数据     | 状态 |
| -------- | ---- |
| 修改成功 | 成功 |
| 修改失败 | 失败 |



### 删除广告

路由：`/admin/advertising/del`

请求方式：`DELETE`

参数

| key  | type     | 描述   |
| ---- | -------- | ------ |
| `id` | `array` | 友链id |

返回数据

| 数据     | 状态 |
| -------- | ---- |
| 删除成功 | 成功 |
| 删除失败 | 失败 |

