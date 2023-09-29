# 1. Overview

-   The project are based on Vue, TailwindCSS and Node.js
-   The Database of the current project is MySQL, please initialize the database before start(DDL in backend/schema.sql)

# 2. Start

-   Enter backend and install the dependencies

```shell
cd ./backend
npm install

# or other
pnpm install
yarn install
```

-   Deploy the frontend page via docker(please install docker before this step)

```shell
docker pull nginx
docker run -d -p 80:80 -v /page/:/usr/share/nginx/html --name nginx-docker nginx:latest
```
