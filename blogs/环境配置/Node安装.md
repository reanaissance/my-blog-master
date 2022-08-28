---
title: Node安装
date: 2022-08-28
tags:
 - 环境配置
categories:
 -  环境配置
---


1、下载二进制文件

```shell
wget https://nodejs.org/dist/v16.13.2/node-v16.13.2-linux-x64.tar.xz
```

2、解压Node xz文件

```shell
xz -d node.tar.xz
```
::: tip
​注意：xz找不到命令可以使用以下命令下载
:::

```shell
yum install xz.x86_64 -y
```

3、解压node文件

```shell
tar xvf tar xvf node-v16.13.2-linux-x64.tar
```

4、配置环境变量

```shell
cd node-v16.13.2-linux-x64\bin

pwd查看该文件路径

vim /etc/profile

#node环境
export PATH=$PATH:'/x_cloud/devlopTools/node/node-v16.13.2-linux-x64/bin'

#刷新profile使环境变量生效

source /etc/profile
```

5、检查是否安装成功

```shell
node -v

npm -v
```

6、设置淘宝镜像源

```shell
npm config set registry " https://registry.npm.taobao.org "

```

