

// 获取按钮和兴趣部分
const showInterestsButton = document.getElementById("showInterestsButton");
const myInterests = document.getElementById("interests");

// 给按钮添加点击事件
showInterestsButton.addEventListener("click", function() {
    // 切换显示/隐藏兴趣部分
    myInterests.classList.toggle("hidden");
    // 滚动到兴趣部分
    myInterests.scrollIntoView({ behavior: "smooth" });
});

// 选好 DOM
const navbar     = document.querySelector('.navbar');
const navMenu    = document.querySelector('.nav-menu');
const toggleBtn  = document.querySelector('.navbar-toggle');

// 切换移动端菜单
function toggleMenu() {
  navbar.classList.toggle('show');
  navMenu.classList.toggle('show');
}
toggleBtn.addEventListener('click', toggleMenu);

// 移动端：鼠标移到顶部 50px 时自动展开，移出时收起
window.addEventListener('mousemove', e => {
  if (window.innerWidth <= 768) {
    if (e.clientY < 80) {
      navbar.classList.add('show');
      navMenu.classList.add('show');
    }
  }
});
navbar.addEventListener('mouseleave', () => {
  if (window.innerWidth <= 768) {
    navbar.classList.remove('show');
    navMenu.classList.remove('show');
  }
});


// —— 导航项点击翻转 + 跳转 ——

// 就用一次循环，不要重复绑定
document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', function(e) {
    // 移动端点击收起菜单
    if (window.innerWidth <= 768) toggleMenu();

    // 执行翻转动画
    this.classList.add('flipped');

    // 0.5s 后跳转到 href
    setTimeout(() => {
      window.location = this.href;
    }, 500);

    e.preventDefault();
  });
});
