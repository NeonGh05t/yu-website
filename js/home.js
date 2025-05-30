


// 获取按钮和介绍部分
const showIntroButton = document.getElementById('showIntroButton'); // 获取按钮
const introductionSection = document.getElementById('introduction'); // 获取介绍部分
const canvasContainer = document.getElementById('p5-canvas-container'); // 获取画布容器

// 页面加载时设置按钮文本和介绍部分状态
window.addEventListener('load', function() {
    introductionSection.classList.remove('visible'); // 页面加载时，确保介绍部分隐藏
    showIntroButton.textContent = "Show Introduction"; // 页面加载时，按钮文本为 "Show Introduction"
});

// 使用 IntersectionObserver 监听 #introduction 是否进入视口
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // 触发显示动画
            introductionSection.classList.add('visible'); // 显示介绍部分
            showIntroButton.textContent = "Go Back"; // 按钮文本变为 "Go Back"
        } else {
            // 退出视口时隐藏介绍部分
            introductionSection.classList.remove('visible'); // 隐藏介绍部分
            showIntroButton.textContent = "Show Introduction"; // 按钮文本恢复为 "Show Introduction"
        }
    });
}, { threshold: 0.5 }); // 当 50% 的部分进入视口时触发

// 开始观察 #introduction 元素
observer.observe(introductionSection);

// 添加按钮点击事件，切换介绍部分的显示和隐藏
showIntroButton.addEventListener('click', function() {
    // 如果介绍部分已经显示，隐藏它并滚动回画布
    if (introductionSection.classList.contains('visible')) {
        introductionSection.classList.remove('visible'); // 隐藏介绍部分
        showIntroButton.textContent = "Show Introduction"; // 按钮文本恢复为“Show Introduction”
        // 滚动回画布容器的位置
        canvasContainer.scrollIntoView({ behavior: 'smooth' }); // 平滑滚动回画布
    } else {
        // 如果介绍部分未显示，立即显示它
        introductionSection.classList.add('visible'); // 立即显示介绍部分
        showIntroButton.textContent = "Go Back"; // 按钮文本更改为 "Go Back"
        // 平滑滚动到介绍部分
        introductionSection.scrollIntoView({ behavior: 'smooth' }); // 平滑滚动到介绍部分
    }
});

// 获取画布元素
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// 设置画布尺寸
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// 设备像素比
const devicePixelRatio = window.devicePixelRatio || 1;  // 获取设备像素比，默认值为 1

// 设置画布的宽度和高度（实际像素尺寸）
canvas.width = window.innerWidth * devicePixelRatio;
canvas.height = window.innerHeight * devicePixelRatio;

// 设置 canvas CSS 样式，确保它适应屏幕
canvas.style.width = window.innerWidth + "px";  // 设置显示区域的宽度
canvas.style.height = window.innerHeight + "px";  // 设置显示区域的高度



// 荣格名言
const baseTexts = [
    "The privilege of a lifetime is to become who you truly are.",
    "I am not what happened to me, I am what I choose to become.",
    "Your vision will become clear only when you can look into your own heart.",
    "The most terrifying thing is to accept oneself completely.",
    "Your task is not to seek for love, but merely to seek and find all the barriers within yourself that you have built against it.",
    "Knowing your own darkness is the best method for dealing with the darknesses of other people.",
    "The creation of something new is not accomplished by the intellect but by the play instinct.",
    
   
    "In all chaos there is a cosmos, in all disorder a secret order.",
    "There is no coming to consciousness without pain.",
    "Art is a kind of innate drive that seizes a human being and makes him its instrument.",
    "Everything that irritates us about others can lead us to an understanding of ourselves.",
    "Your task is not to seek for love, but merely to seek and find all the barriers within yourself that you have built against it.",
    "We are not what happened to us, we are what we choose to become.",
    "The purpose of life is not to be happy, but to be worthy of happiness.",
    "He who looks outside dreams, he who looks inside awakens.",
    
    
];

// 设置文本的字体和大小
const fontSize = 20; // 设置适中的字体大小
const fontStyle = `bold ${fontSize}px 'Roboto', monospace`;  // 使用 Courier New 字体（编程感强）



// 设置更大的行间距
const lineSpacing = 100; // 设置行间距

let lastMouseX = 0;  // 上一帧的鼠标 X 位置
let lastMouseY = 0;  // 上一帧的鼠标 Y 位置
let mouseSpeed = 0;  // 鼠标速度
let opacity = 1;  // 初始透明度

// 欢迎语
const welcomeText = "WELCOME TO MY SPIRITUAL WORLD"; // 居中显示的文字

// 监听鼠标位置
window.addEventListener("mousemove", function(event) {
    let speedX = Math.abs(event.clientX - lastMouseX);
    let speedY = Math.abs(event.clientY - lastMouseY);
    mouseSpeed = (speedX + speedY) / 2;  // 计算鼠标移动速度
    lastMouseX = event.clientX;
    lastMouseY = event.clientY;

    // 根据鼠标速度控制透明度
    opacity = Math.max(0, Math.min(1, 1 - mouseSpeed / 50));  // 透明度随鼠标速度变化
});

// 绘制波动效果和透明度变化
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);  // 清空画布

    ctx.font = fontStyle;  // 设置字体大小和样式
    ctx.fillStyle = "white";  // 设置文本颜色
    ctx.textAlign = "center";  // 设置文本居中
    ctx.textBaseline = "middle";  // 设置文本垂直居中
    ctx.globalAlpha = opacity;  // 设置透明度

    // 绘制欢迎语“WELCOME TO MY SPIRITUAL WORLD”，居中显示
    ctx.font = `bold 60px 'Segoe UI', Tahoma, sans-serif`;  // 设置较大的字体和加粗
    ctx.fillText(welcomeText, canvas.width / 2, canvas.height / 2);  // 居中显示（水平和垂直）


    // 默认波动频率：文字波动的基本速度
    let baseWaveFrequency = 1.5;  // 默认波动频率

    // 鼠标移动时，增加波动的频率
    let waveFrequency = baseWaveFrequency + mouseSpeed / 180000;  // 鼠标速度越快，波动频率越高


    // 绘制每一行文本
    let yOffset = 100;  // 文本的初始垂直位置
    baseTexts.forEach((text, index) => {
        //let offset = Math.sin(Date.now() / 250 + index) * 30;  // 使用正弦函数产生上下波动
        //let pulse = Math.sin(Date.now() / 500 + index) * 10 + fontSize;  // 字体大小随波动变大变小
        let offset = Math.sin(Date.now() / (300 / waveFrequency) + index) * 30;  // 使用正弦函数产生上下波动，波动频率随鼠标速度变化
        let pulse = Math.sin(Date.now() / (500 / waveFrequency) + index) * 10 + fontSize;  // 字体大小随波动变大变小
        ctx.font = `bold ${pulse}px 'Orbitron', sans-serif`;  // 动态调整字体大小
        ctx.fillText(text, canvas.width / 2, yOffset + index * (fontSize + lineSpacing) + offset);  // 绘制每一行文本，带波动效果
    });

    requestAnimationFrame(draw);  // 持续更新
}

// 调用绘制函数
draw();

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
