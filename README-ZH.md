# 1. 概述

-   该项目基于 Vue、TailwindCSS 和 Node.js。
-   当前项目的数据库是 MySQL，请在开始之前初始化数据库（DDL 在 backend/schema.sql 文件中）。
-   架构图:
    ![server.png](https://s2.loli.net/2023/09/29/d1My93hSjrOfYzg.png)

-   架构图
![](https://gitee.com/alex_john/chat-room-demo/blob/main/backend/server.png)

# 2. 启动

-   进入 backend 目录并安装依赖项

```shell
cd ./backend
npm install
# 或其他
pnpm install
yarn install
```

-   通过 pm2 部署后端接口

```shell
npm i pm2 -g
pm2 start ./backend/server.js
```

-   监看接口日志

```shell
pm2 monit
```

-   通过 Docker 部署前端页面（请在此步骤之前安装 Docker）

```shell
docker pull nginx
docker run -d -p 80:80 -v /page/:/usr/share/nginx/html --name nginx-docker nginx:latest
```
