# 1. 概述

-   该项目基于 Vue、TailwindCSS 和 Node.js。
-   当前项目的数据库是 MySQL，请在开始之前初始化数据库（DDL 在 backend/schema.sql 文件中）。

# 2. 启动

-   进入 backend 目录并安装依赖项

```shell
cd ./backend
npm install
# 或其他
pnpm install
yarn install
```

-   通过 Docker 部署前端页面（请在此步骤之前安装 Docker）

```shell
docker pull nginx
docker run -d -p 80:80 -v /page/:/usr/share/nginx/html --name nginx-docker nginx:latest
```
