# http协议
>是浏览器和web服务器之间的通信协议 ~~描述~~
### 通用头信息
>#####&nbsp;&nbsp;**Request URL** 请求的URL，表示要想服务器获取那些内容  
>#####&nbsp;&nbsp;**Request Method** 请求的方法 ***get***获取得到 ***post*** 传递给别人  
>#####&nbsp;&nbsp;**Status Code** 相应的状态码
|code|描述|
|---|---|
|1**|正在响应，还没结束|
|2**|成功的响应|
|3**|响应的重定向|
|4**|客户端请求错误|
|5**|服务端错误|
### 响应的头信息
|  code   | 描述  |
|  :--- | ---  |
| Content-type | 响应的文件类型，例如：html类型为text/html |
| Location | 要跳转的地址，结合状态码使用 |
### http模块
> 用于创建web服务器