# Nmap

## 介绍：

Nmap是一个网络连接端扫描软件，用来扫描网上电脑开放的网络连接端。确定哪些服务运行在哪些连接端，并且推断计算机运行哪个操作系统（这是亦称 fingerprinting）。它是网络管理员必用的软件之一，以及用以评估网络系统安全。

### 功能：

- 主机发现
- 端口扫描
- 版本侦测
- 操作系统侦测

### 资料：

- [Nmap官网](https://nmap.org/man/zh/)

- [Nmap中文网](http://www.nmap.com.cn)

- [翻译Forme](https://nanxuanzi.github.io/other/note/txt/nmap.txt)

  查看：[输出翻译](http://nanxuanzi.github.io)

## 常用命令：

**Nmap语法**：**nmap 【扫描类型】【选项】目标**

### 目标说明：

Doc：[Nmap-目标说明](https://nmap.org/man/zh/man-target-specification.html)

1. 一般

   ```js
   //目标可是是ip/域名/网段...
   //目标可以是多个
   nmap 192.168.0.1 baidu.com
   ```

2. 从列表输入，-iL

   ```js
   //从列表输入，将ip/域名..写在文件中
   nmap -iL List.txt
   
   //List.txt内容
   baidu.com
   bilibili.com
   qq.com
   ```

3. 随机目标，-iR

   ```js
   //随机生成10个ip并扫描（生成的ip不一定能访问）
   nmap -iR 10
   ```

4. 排除主机/网络，--exclude

   ```js
   //扫描 baidu.com,bilibili.com 但是排除百度
   nmap baidu.com bilibili.com --exclude baidu.com
   ```

5. 排除文件中的列表，--excludefile

   ```js
   //扫描时排除文件List.txt中的ip...
   nmap cnblogs.com qq.com --excludefile List.txt 
   ```



### 主机发现：

Doc：[Nmap-主机发现](https://nmap.org/man/zh/man-host-discovery.html)

**目的**：用于发现目标主机是否在线

1. 列举目标IP，-sL

   ```js
   //列举目标的ip，但不进行主机发现
   nmap -sL bilibili.com
   ```

2. 只进行主机发现不进行端口扫描，-sn

   ```js
   //进行主机发现(主机是否在线)
   nmap -sn bilibili.com
   ```

3. 只进行ping扫描，-sP

   ```js
   //找存活主机(进行ping扫描)，并不进行端口探测、操作系统识别
   nmap -sP bilibili.com
   
   ```

4. 跳过主机发现，-Pn

   ```js
   //将主机视作开启，跳过主机发现进行端口扫描
   nmap -Pn bilibili.com	
   ```

   

### 端口扫描：

Doc：[Nmap-端口扫描](https://nmap.org/man/zh/man-port-scanning-basics.html)

#### 端口状态：

|         英文         |               解释               |
| :------------------: | :------------------------------: |
|     open（开放）     |    目标主机程序正在监听该端口    |
|    closed（关闭）    |        没有程序监听该端口        |
|   filtered（过滤）   | 防火墙等阻碍该端口访问，无法得知 |
| unfiltered（未过滤） | 能访问，但无法确定状态open/close |

#### 扫描类型：

1. TCP SYN扫描，-sS

   ```js
   //默认的扫描，也叫半开放扫描
   nmap -sS bilibili.com
   ```

2. TCP connect()扫描，-sT

   ```js
   //当SYN扫描不能用时，TCP connect()扫描就是默认的TCP扫描
   nmap -sT bilibili.com
   ```

3. UDP 扫描，-sU

   ```js
   //扫描UDP协议
   nmap -sU bilibili.com
   ```

4. TCP ACK扫描，-sA

   ```js
   //它不能确定open或者 opne|filtered端口。它用于发现防火墙，确定它们是有状态的还是无状态的，哪些端口是被过滤的。
   nmap -sA bilibili.com
   
   //如果返回All 1000 scanned ports on xxx are 
   //filtered 表示被过滤 >有防火墙 
   ```

   

#### 端口、扫描顺序：

1. 指定扫描的端口，-p

   ```js
   //指定扫描的端口
   nmap -p 80,443 bilibili.com
   
   //UDP和TCP
   nmap -p T:25,U:53 bilibili.com
   
   //端口范围
   nmap -p 22-100 bilibili.com
   ```

2. 快速扫描，-F

   ```js
   nmap -F bilibili.com
   ```

   

3. 不按随机顺序扫描，-r

   ```js
   //不按随即顺序扫描
   nmap -r bilibili.com
   ```

   



### 服务和版本探测：

Doc：[Nmap-版本探测](https://nmap.org/man/zh/man-version-detection.html)

1. 服务版本探测

   ```js
   //查看服务版本
   nmap -sV bilibili.com
   ```

   

### 操作系统探测：

Doc：[Nmap-操作系统探测](https://nmap.org/man/zh/man-os-detection.html)

1. 启用操作系统检测

   ```js
   //操作系统检测
   nmap -O bilibili.com
   ```

   

### 防火墙/IDS躲避和哄骗：

Doc：[Nmap-防火墙躲避](https://nmap.org/man/zh/man-bypass-firewalls-ids.html)

1. 碎片扫描，-f

   ```js
   //
   nmap -f bilibili.com
   ```

2. 设置偏移大小，--mtu

   ```js
   //偏移量是8的倍数
   nmap --mtu 32 bilibili.com
   ```

3. 诱饵扫描，-D

   ```js
   //可以指定多个ip或者使用RND随机生成几个IP
   nmap -D RND:11 bilibili.com
   
   nmap -D 192.168.0.1 bilibili.com
   ```

4. 源端口欺骗

   ```js
   //源端口欺骗，--source-port
   nmap --source-port 1000 bilibili.com
   ```

   

### 其他：

- [时间和性能](https://nmap.org/man/zh/man-performance.html)
- [输出](https://nmap.org/man/zh/man-output.html)
- [其他选项](https://nmap.org/man/zh/man-misc-options.html)

1. -T，-v，-A

   ```js
   //-T:设置时间模板(1-5,越高越快)
   //-v:详细输出
   //-A:启用 操作系统检测、版本检测、脚本扫描和跟踪路由
   
   //常用扫描命令
   nmap -T4 -A -v bilibili.com
   ```

## 实例：

### 对某网站进行扫描：

1. 主机发现

   ```js
   //进行主机发现
   nmap -sn hilonggroup.com
   
   //结果：主机是开启的
   ```

   ![image-20210610222859474](G:\Git-workspace\nanxuanzi.github_io\other\note\nmap\img\image-20210610222859474.png)

2. 端口扫描

   ```js
   //进行端口扫描：-sS
   nmap -T4 -sS hilonggroup.com
   ```



## 速查表：

![image-20210610224322474](G:\Git-workspace\nanxuanzi.github_io\other\note\nmap\img\image-20210610224322474.png)