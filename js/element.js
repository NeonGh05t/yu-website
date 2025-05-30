// —— 模态框控制 ——

// 显示模态框
function showModal(image, description) {
  const modal = document.getElementById('modal');
  const modalImage = document.getElementById('modal-image');
  const modalDescription = document.getElementById('modal-description');

  modalImage.src = image;
  modalDescription.textContent = description;
  modal.style.display = 'flex';
}

// 关闭模态框
function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

// 点击模态框背景也能关闭
window.addEventListener('click', e => {
  const modal = document.getElementById('modal');
  if (e.target === modal) closeModal();
});


// —— 侧边／下拉导航栏 ——

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
