var posts=["2025/03/17/MySQL/","2025/03/03/CSS/","2025/01/12/html知识点/","2025/03/29/python/","2025/04/11/免费激活系统/","2024/12/26/linux笔记/","2024/12/25/关于429的那些事/","2024/12/28/推荐实用网站/","2024/12/24/使用Hexo搭建自己的博客/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };