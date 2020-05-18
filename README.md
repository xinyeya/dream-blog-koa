# dream-blog后台接口

## 用户管理

### 查看用户

路由：`/admin/user`

请求方式：`GET`

参数：空（可选）

| key      | type     | 描述       |
| -------- | -------- | ---------- |
| `search` | `object` | 搜索值     |
| `skip`   | `int`    | 第几页     |
| `limit`  | `int`    | 每页多少条 |



### 添加用户
路由：`/admin/user/add`

请求方式：`POST`

参数：

| key           | type     |             |
| :------------ | :------- | ----------- |
| `username`    | `string` | 用户名      |
| `password`    | `string` | 密码        |
| `age`         | `int`    | 年龄        |
| `sex`         | `string` | 性别        |
| `status`      | `int`    | 状态`(0/1)` |
| `avatar`      | `file`   | 头像        |
| `signature`   | `string` | 个人介绍    |
| `qq`          | `string` | QQ号        |
| `create_time` | `Date`   | 注册时间    |
| `article_num` | `int`    | 文章数量    |
| `praise`      | `int`    | 获赞数量    |

返回数据：

| 数据     | 状态 |
| -------- | ---- |
| 添加成功 | 成功 |
| 添加失败 | 失败 |



### 修改用户信息

路由：`/admin/user/update`

请求方式：`POST`

参数

| key    | type     | 描述       |
| ------ | -------- | ---------- |
| `id`   | `string` | 用户`id`   |
| `data` | `object` | 修改的数据 |

返回数据：

| 数据     | 状态 |
| -------- | ---- |
| 修改成功 | 成功 |
| 修改失败 | 失败 |



### 删除用户
路由：`/admin/user/del`

请求方式：`DELETE`

参数

| key  | type     | 描述   |
| ---- | -------- | ------ |
| `id` | `string` | 用户id |

返回数据

| 数据     | 状态 |
| -------- | ---- |
| 删除成功 | 成功 |
| 删除失败 | 失败 |

## 文章管理

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
| `uid`         | `string` | 用户id     |
| `c_id`      | `string`    | 分类id     |
| `create_time`      | `date`   | 发表时间     |
| `common_num`   | `int` | 评论条数 |
| `praise_num`          | `int` | 点赞数     |
| `update_time` | `Date`   | 修改时间 |
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
| `id` | `string` | 文章id |

返回数据

| 数据     | 状态 |
| -------- | ---- |
| 删除成功 | 成功 |
| 删除失败 | 失败 |

## 文章分类

### 查看分类

路由：`/admin/class_label`

请求方式：`GET`

参数：空（可选）

| key      | type     | 描述       |
| -------- | -------- | ---------- |
| `search` | `object` | 搜索值     |
| `skip`   | `int`    | 第几页     |
| `limit`  | `int`    | 每页多少条 |

### 添加分类

路由：`/admin/class_label/add`

请求方式：`POST`

参数：

| key           | type     |    描述      |
| :------------ | :------- | -------- |
| `title`    | `string` | 分类标题   |


返回数据：

| 数据     | 状态 |
| -------- | ---- |
| 添加成功 | 成功 |
| 添加失败 | 失败 |



### 修改文章分类

路由：`/admin/class_label/update`

请求方式：`POST`

参数

| key    | type     | 描述       |
| ------ | -------- | ---------- |
| `id`   | `string` | 分类`id`   |
| `data` | `object` | 修改的分类名 |

返回数据：

| 数据     | 状态 |
| -------- | ---- |
| 修改成功 | 成功 |
| 修改失败 | 失败 |



### 删除分类

路由：`/admin/class_label/del`

请求方式：`DELETE`

参数

| key  | type     | 描述   |
| ---- | -------- | ------ |
| `id` | `string` | 分类id |

返回数据

| 数据     | 状态 |
| -------- | ---- |
| 删除成功 | 成功 |
| 删除失败 | 失败 |

## 音乐管理

### 查看音乐

路由：`/admin/music`

请求方式：`GET`

参数：空（可选）

| key      | type     | 描述       |
| -------- | -------- | ---------- |
| `search` | `object` | 搜索值     |
| `skip`   | `int`    | 第几页     |
| `limit`  | `int`    | 每页多少条 |



### 添加音乐

路由：`/admin/mucic/add`

请求方式：`POST`

参数：

| key           | type     |    描述      |
| :------------ | :------- | -------- |
| `title`    | `string` | 音乐标题 |
| `link` | `string` | 音乐直链 |
| `singer` | `string` | 音乐作者 |
| `images` | `string` | 音乐封面 |


返回数据：

| 数据     | 状态 |
| -------- | ---- |
| 添加成功 | 成功 |
| 添加失败 | 失败 |



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

路由：`/admin/music/del`

请求方式：`DELETE`

参数

| key  | type     | 描述   |
| ---- | -------- | ------ |
| `id` | `string` | 分类id |

返回数据

| 数据     | 状态 |
| -------- | ---- |
| 删除成功 | 成功 |
| 删除失败 | 失败 |

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
| `id` | `string` | 分类id |

返回数据

| 数据     | 状态 |
| -------- | ---- |
| 删除成功 | 成功 |
| 删除失败 | 失败 |

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
| `id` | `string` | 友链id |

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
| `click_num` | `int` | 点击量 |


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
| `id` | `string` | 友链id |

返回数据

| 数据     | 状态 |
| -------- | ---- |
| 删除成功 | 成功 |
| 删除失败 | 失败 |

