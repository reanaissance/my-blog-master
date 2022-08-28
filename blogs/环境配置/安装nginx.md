---
title: Nginx安装
date: 2022-08-28
tags:
 - 环境配置
categories:
 -  环境配置
---


::: tip
注意：安装nginx相关依赖包
:::

```
yum -y install gcc zlib zlib-devel pcre pcre-devel openssl openssl-devel make
```



###### 1、下载nginx安装包

```shell
wget -c https://nginx.org/download/nginx-1.23.1.tar.gz
```

###### 2、解压nginx-1.23.1

```shell
tar -zxvf nginx-1.20.0.tar.gz
cd nginx-1.20.0
```

###### 3、其实在 `nginx-1.20.0` 版本中你就不需要去配置相关东西，默认就可以了；当然，如果你要自己配置目录也是可以的

```shell
./configure
```

###### 4、执行下面命令编译nginx

```shell
make
make install
```

###### 5、查找nginx安装路径(默认在/usr/local/nginx)

```shell
whereis nginx
```

###### 6、进入ngxin安装目录

```sh
cd /usr/local/nginx
```

###### 7、启动、停止、重启nginx

```shell
cd /usr/local/nginx/sbin/
./nginx 
./nginx -s stop
./nginx -s quit
./nginx -s reload
```

###### 8、停止再启动（推荐）

```shell
./nginx -s quit
./nginx
```

###### 9、配置文件 `nginx.conf`修改后，要想让配置生效需要重启 `nginx`，使用`-s reload`不用先停止 `nginx`再启动`nginx` 即可将配置信息在 `nginx` 中生效，如下：

```shell
./nginx -s reload
```

###### 10、启动成功后，在浏览器直接输入`IP地址`就可以welcome to nginx !页面