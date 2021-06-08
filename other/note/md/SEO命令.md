# SEO命令

> ## 搜索引擎命令

|    命令    |             解释              |
| :--------: | :---------------------------: |
|  “双引号”  |         完全匹配搜索          |
|     -      |            不匹配             |
|            |                               |
|    site    | 搜索某个域名下收录的所有文件  |
|   inurl    |  搜索返回的页面url包含关键字  |
|  intitle   | 搜索返回的页面title包含关键字 |
|  allinurl  |       url包含多个关键字       |
| allintitle |      title包含多个关键字      |
|            |                               |
|  filetype  |      查询指定格式的文件       |

> ## 实例

1. 完全匹配

   搜索结果返回的页面包含： "南轩子"

   ````SEO
   "南轩子"
   ````

2. 不匹配

   搜索返回的页面包含：搜索，但是屏蔽：引擎

   ```
   搜索 -引擎
   ```

3. 某域名收录的所有文件

   搜索返回的页面包含：bilibili.com下所有文件(**已收录**)

   ````
   site:bilibili.com
   ````

4. url包含

   搜索返回页面url内包含：index.php

   ````
   inurl:index.php
   ````

5. url包含多个关键词

   

   ```
   allinurl:bilibili index.php
   ```

6. title包含

   搜索返回页面title包含：南轩子

   ```
   intitle:南轩子
   ```

7. title包含多个关键字

   搜索返回页面url内同时包含：搜索 引擎

   ```
   allintitle:搜索 引擎
   ```

8. 查找文件

   查找文件类型：pdf

   ```
   filetpe:pdf java
   ```

   

   