var posts=["2024/12/26/Linux命令大全/","2025/01/12/html知识点/","2025/04/11/免费激活系统/","2024/12/24/使用Hexo搭建自己的博客/","2025/01/14/CSS/","2025/03/29/python/","2025/03/17/MySQL/","2025/05/28/推荐实用网站/","2025/11/21/openstack云计算平台安装/","2024/12/25/关于429的那些事/","2026/01/03/智能合约开发solidity/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };