# Cookie

Cookie 的主要目的是前端存储登录成功后反馈的用户信息 token 值。包含属性：

## 属性
### HttpOnly

httpOnly 只能在服务器端 Response 设置，不能在客户端（浏览器、JavaScript）设置。

### Secure

Secure 只能在 https 协议下才能设置和查看。

## 安全

很多人担心 Cookie 会泄露用户的信息，其实这种担心是多余的，因为 Cookie 是不能通过跨域访问的，还有一些对象是不能脱离 Cookie 来实现的，比如 Session。

## 限制

- 客户端 Cookie 数量最多为 300 个；
- 每个站点 cookie 数量不能超过 20 个；
- 每个 Cookie 最大为 4KB；