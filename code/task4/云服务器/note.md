# 1. 购物服务器/部署应用
- 47.242.92.227
- nllcoder.com

## 1.1 阿里云服务器 - CentOS 8

### 1.1.1 购物服务器
- https://www.aliyun.com/product/ecs
- 购买香港节点 (域名不需要备案)
- 系统选择的是 CentOS 8, 或者其他系统

### 1.1.2 远程登录服务器
[ssh](https://www.cnblogs.com/l199616j/p/11582753.html)
``` js
// 登录远程服务器
ssh root@47.242.92.227
password  Lyka3156*

// curl 发送http请求一个资源
// 因为我们服务器是香港的所以能访问到google
curl https://www.google.com
curl https://www.youtube.com


// 好玩的东西  ***
// 我们本地访问不了
// 可以使用服务器去代理本地1080端口访问
// 也就是我们本地访问1080端口号的时候会使用服务器(香港)去访问
// 使用代理服务器去请求     https://google.com/
ssh -D 1080 root@47.242.92.227

// 当前文件夹的路劲
pwd 
```



### 1.1.3 SSH 免密登录
- http://www.ruanyifeng.com/blog/2011/12/ssh_remote_login.html
- 客户端操作
``` js
// 生成公钥
cd C:\Users\Administrator\.ssh

ssh-keygen
// 生成的公钥文件名称
lyka3156_com_rsa

// 把公钥拷贝到服务器
scp lyka3156_com_rsa.pub root@47.242.92.227:/root/.ssh
```
- 客户端操作 -- 修改本机的 .ssh/config 文件
[config](https://blog.csdn.net/ky1in93/article/details/83093981)
``` js
// 配置方式1
Host 47.242.92.227
HostName 47.242.92.227
User root
PreferredAuthentications publickey
IdentityFile C:\Users\Administrator\.ssh\lyka3156_com_rsa

// 配置方式2
Host lyka3156.com
HostName lyka3156.com
User root
PreferredAuthentications publickey
IdentityFile C:\Users\Administrator\.ssh\lyka3156_com_rsa
```
- 服务器
``` js
cd ~/.shh
// 找到 authorized_keys 文件
// 把 lyka3156_com_rsa.pub 文件内容追加到 authorized_keys 文件末尾
cat >> authorized_keys < lyka3156_com_rsa.pub
// 重启 ssh 服务
systemctl restart 
// 退出
exit 
```

### 1.1.4 安装 Node.js
- 使用 yum 安装的 node.js 版本不是最新的版本，是10的版本
``` js
yum install node
```
- 使用 nvm 安装 Node.js
- [https://github.com/nvm-sh/nvm](https://github.com/nvm-sh/nvm)
```bash
# 查看环境变量
echo $PATH
# 安装 nvm 
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
# 重新连接 ssh
exit
ssh root@47.242.92.227
# 查看 nvm 版本
nvm --version
# 安装 Node.js lts(最新稳定版)
nvm install --lts
# 查看环境变量
echo $PATH
# 通过环境变量知道node安装的路劲
cd /root/.nvm/versions/node/v12.18.4/bin
ls 
# 通过上面命令我们看到已经安装好了 node npm npx
node npm  npx
# 我们全局安装好的都会在环境变量中
echo $PATH
```
 
### 1.1.5 安装 pm2
```bash
# 通过 npm 全局安装 pm2
npm i pm2 -g
# 通过环境变量知道node安装的路劲
cd /root/.nvm/versions/node/v12.18.4/bin
ls 
# 通过上面命令我们看到已经安装好了 node npm npx
node npm  npx pm2 pm2-dev pm2-docker pm2-runtime
# 查看 pm2 的版本
pm2 -v
```

## 1.2 部署Nuxt.js 项目
### 1.2.1 手工部署 Nuxt.js 项目

- baseURL: https://conduit.productionready.io

- .nuxt
- static
- nuxt.config.js
- package.json
- package-lock.json
- pm2.config.json

```bash
# 服务器 root 下创建 realworld-nuxtjs 文件夹
mkdir realworld-nuxtjs

# 本地运行   将本地压缩文件上传到服务器中
scp ./realworld-nuxtjs.zip root@47.242.92.227:/home/realworld-nuxtjs

# 切换目录
cd realworld-nuxtjs

# 服务器上解压
unzip realworld-nuxtjs.zip

# 查看隐藏目录
ls -a

# 删除压缩目录
rm rf realworld-nuxtjs.zip

# 安装依赖
npm i

# npm run start
pm2 start npm -- start

# pm2 启动命令
pm2 start pm2.config.json

# pm2 停止命令
pm2 stop xxxx

# 查看 pm2 日志
pm2 log
```

### 1.2.2 使用 pm2 启动服务
- GitHub 仓库地址：https://github.com/Unitech/pm2
- 官方文档：https://pm2.io/
- 安装: npm install --global pm2
- 启动：pm2 start 脚本路劲
``` js
pm2 start npm -- start
```

pm2 常见命令
``` js
// 启动命令
// pm2 start pm2.config.json
pm2 start npm -- start
// 查看所有 pm2 命令
pm2 list
// 停止进程
pm2 stop pid
// 重载应用
pm2 reload
// 重启进程
pm2 restart [app-name]
// 删除应用
npm2 delte
// 进程日志
pm2 log
```
### 1.2.3 自动部署

#### 1.2.3.1 Github
- 创建远程仓库
- 个人设置-Developer settings-Personal access tokens
   - eb3809d4386be83cbdffe294aca53a2372835dab
- 项目设置-Secrets

## 1.3 购买域名/域名解析

## 1.4 部署 Vue.js 项目

## 1.5 Nginx 配置浏览器缓存

## 1.6 方向代理配置

## 1.7 HTTPS 配置

# vm 命令
[vm命令](https://blog.csdn.net/q6678188/article/details/80577152)
``` js
// 编辑文件名
- vi 文件名
// 进入修改状态
- 按下键盘insert按钮
// 修改完成
- esc
// 保存并退出
- :wq 
- :q 退出
```

[node进程](https://blog.csdn.net/weixin_34138521/article/details/91925347)
- 杀死node 进程
``` js
pkill node   
// 或 
tskill node
```

[pm2命令1](https://www.cnblogs.com/bq-med/p/9012438.html)
[pm2命令2](https://blog.csdn.net/qq_32281471/article/details/91369344)
```js
// 启动命令
pm2 start pm2.config.json
// 查看所有 pm2 命令
pm2 list
// 停止进程
pm2 stop pid
// 重载应用
pm2 reload
// 重启进程
pm2 restart [app-name]
// 删除应用
npm2 delte
// 进程日志
pm2 log
```

# linux 系统命令
``` js
// 创建文件
mkdir 文件名
// 删除文件
rm -rf 文件名
// 上传文件
scp ./pm2.config.json root@47.242.92.227:/home/realworld
// 查看文件
cat 文件
```
