# React-redux-mysql


   准备实现一个资源上传和交易网站，后期继续完善。
   使用react+redux实现前端的页面和逻辑；后台用到express框架，数据库使用的是mysql，之前有用过mongodb的，都是可以的；
   其中还有登录的浏览器存储，这里使用的不是cookie和session，而是用的JWT（json web token）。

    【TODO】
    ·完善资源全网上传时的本地存储问题（description）
    ·全网资源的展示信息应从区块链拉取（liked/readCount）
    ·将购买所有权、阅读权同步至区块链
    ·监听区块链API发布的event
    ·阅读权记录在链下数据库的新表中

    【2018-9-15 updated by yaolu】
    ·为了在我的MAC上运行，用npm install重新安装了依赖包，更改了数据库连接的密码
    //修改依赖
    ·更新智能合约至demo-network@0.0.6.bna（详见项目digital-copyright-demo）
    ·修改file数据表（增加allWeb/readCount字段），以区分资源是全站还是仅本站可见的
    //功能实现
    ·完善同步到区块链上userId为‘平台名-用户名’
    ·完成钱包充值同步区块链
    ·完善资源全网上传的区块链信息（版权所有人）


