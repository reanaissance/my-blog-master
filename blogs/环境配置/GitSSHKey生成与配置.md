---
title: git SSH KEY生成与配置
date: 2022-08-28
tags:
 - 环境配置
categories:
 -  环境配置
---

## 一、检查用户名和邮箱是否配置

```shell
git config --global --list
```

<img :src="$withBase('/images/image-20220828020243190.png')" alt="mixureSecure">

## 二、未配置，配置用户名和邮箱

```shell
git config --global  user.name "这里换上你的用户名"
git config --global user.email "这里换上你的邮箱"
```

## 三、生成密钥

```shell
ssh-keygen -t rsa -C "这里换上你的邮箱"
#执行命令后需要进行3次或4次确认：
#确认秘钥的保存路径（如果不需要改路径则直接回车）；
#如果上一步置顶的保存路径下已经有秘钥文件，则需要确认是否覆盖（如果之前的秘钥不再需要则直接回车覆盖，如需要则手动拷贝到其他目录后再覆盖）；
#创建密码（如果不需要密码则直接回车）；
#确认密码；
#执行结果如下

```

<img :src="$withBase('/images/image-20220828020553046.png')" alt="mixureSecure">

## 四、查看密钥文件

<img :src="$withBase('/images/image-20220828020713399.png')" alt="mixureSecure">

在用户目录下/.ssh 会生成id_rsa 和 id_rsa.pub两个文件

## 五、打开github配置

​	1.将文件id_rsa.pub中的内容拷贝到key项中 点击add ssh key

<img :src="$withBase('/images/image-20220828020905944.png')" alt="mixureSecure">