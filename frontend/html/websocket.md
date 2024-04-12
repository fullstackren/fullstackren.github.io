# WebSocket

WebSocket 是 [HTML5](./html5.md) 提供的一种在单个 `TCP` 连接上进行双向通信的协议，以解决客户端与服务端间 `实时通信问题`。此时，客户端浏览器和服务器只需完成一次握手就可以创建持久性的 TCP 连接，接着服务器就可以和浏览器进行 `双向实时通信`。

## WebSocket 优点

WebSocket 建立 TCP 连接后，服务器 `可主动` 向浏览器传递消息，能够更好的节省服务器资源和带宽，实现 `实时` 数据通讯。

## 其他可实现实时通讯的方式

可以使用 ajax 轮询。轮询是由浏览器在 `特定时间间隔` 主动向服务器发起请求，将服务器的数据拉回来。这样不断地向服务器发送请求，会 `占用很多带宽` 和 `服务器资源`。

## WebSocket 指引

- 事件
  - `ws.onmessage`：接收到消息的回调方法；
  - `ws.onopen`：连接成功建立的回调方法；
  - `ws.onclose`：连接关闭的回调方法；
  - `ws.onerror`：连接发生错误的回调方法；
- 方法
  - `ws.send()`：发送消息；
  - `ws.close()`：关闭连接；
- 状态码
  - `0`：表示连接尚未建立；
  - `1`：表示连接已建立，可以进行通信；
  - `2`：表示连接正在进行关闭；
  
## WebSocket 实例

```JavaScript
function websocket() {
    if("WebSocket" in window) {
        console.log("您访问的浏览器支持 WebSocket!");

        // 创建 WebSocket 对象
        let ws = new WebSocket("ws://localhost:2024/ws");

        // 连接成功建立的回调方法
        ws.onopen = function () {
            // 发送消息
            ws.send("Hello WebSocket");
        };

        // 接收到消息的回调方法
        ws.onmessage = function (event) {
            // 接收到的消息
            let msg = event.data;
            console.log(msg);
        };

        // 连接关闭的回调方法
        ws.onclose = function () {
            // 关闭 websocket
            ws.close();
        };

        // 连接发生错误的回调方法
        ws.onerror = function () {
            // 关闭 websocket
            ws.close();
        };

        // 监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，server端会抛异常。
        window.onbeforeunload = function () {
            ws.close();
        };
    } else {
        console.log("您访问的浏览器不支持 WebSocket!");
    }
}

websocket();
```

## WebSockert 心跳机制

心跳检测，就是隔一段时间向服务器仅限一次数据访问，因为长时间不使用会导致ws自动断开，一般是 `间隔 90 秒` 内无操作会自动断开，因此，在间隔时间内进行一次数据访问，以防止 ws 断开即可。这是客户端和服务端之间的一种 `保活机制`。


```JavaScript
// 倒计时 30 秒内无操作则进行一次访问，有操作则重置计时器
// 封装为键值对的形式，成为 JavaScript 对象，与 json 很相似
let heartCheck = {
    timeout: 30000, // 30秒
    timeoutObj: null,
    reset: function () {
        // 接收成功一次推送，就将心跳检测的倒计时重置为30秒
        clearTimeout(this.timeoutObj); // 重置倒计时
        this.start();
    },
    start: function () {
        // 启动心跳检测机制，设置倒计时30秒一次
        this.timeoutObj = setTimeout(function () {
            let message = {
                "type": "t10010",
                "service": "发送维持连接消息！"
            };
            console.log("发送维持连接消息！");
            ws.send(JSON.stringify(message)); // 启动心跳
        }, this.timeout)
    }
    // onopen 连接上，就开始 start 计时，如果在定时时间范围内，onmessage获取到了服务端消息，
    // 就重置 reset 倒计时，距离上次从后端获取消息30秒后，执行心跳检测，看是不是断了。
};

// WebSocket
ws.onopen = function () {
    //当WebSocket创建成功时，触发onopen事件
    console.log("open");
    ws.send("hello"); // 将消息发送到服务端
    heartCheck.start();// 连接成功之后启动心跳检测机制
}

ws.onmessage = function (e) {
    // 当客户端收到服务端发来的消息时，触发 onmessage 事件，参数 e.data 包含server传递过来的数据
    console.log(e.data);
    // 接收一次后台推送的消息，即进行一次心跳检测重置
    heartCheck.reset();
}
```

## 常见问题

服务器通过 WebSocket 推送频率太快，接收渲染跟不上，渲染会消耗内存，容易导致浏览器崩溃。这时，可与服务器协商 `放缓推送频率` 或 `摒弃掉短频快` 的数据（如 5 秒处理一次接受的数据）。

如果推送数据流太大，可尝试将 `数据分页渲染` 或 `瀑布流渲染`，可减轻一定压力。

