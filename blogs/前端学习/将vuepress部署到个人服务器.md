---
title: 将vuepress项目部署到个人服务器
date: 2022-08-28
tags:
 - 前端
categories:
 -  前端学习
---

1、安装Nginx

```
没有Nginx参考Nginx安装
```

2、将vuepress项目打包

```
vuepress build
```

3、将打包好的项目放到服务器自己创建的目录下

```shell
/x_cloud/master-blog/build
```

4、配置nginx

```
 server {
        listen       80;
        server_name  39.107.121.101; #云服务地址
    
        #charset koi8-r;

        #access_log  logs/host.access.log  main;

        location / {
            root  /x_cloud/master-blog/build/; ##项目目录
            #index  index.html index.htm;
        }
```

5、重启ngxin

```
nginx -s reload
```

6、访问地址

注意：服务器安全组需要将80端口打开

```
39.107.121.101
```

