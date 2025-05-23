const fs = require('fs');
const path = require('path');

// 要优化的HTML文件列表 (除了index.html，它已经优化过了)
const pagesToOptimize = [
  '产品与解决方案-SEL.html',
  '产品与解决方案-日立.html',
  '产品与解决方案-开关柜.html',
  '联系我们.html',
  '关于我们.html',
  '加入我们.html',
  '职位详情页面-项目经理.html',
  '职位详情页面-电气、电仪销售工程师.html',
  '职位详情页面-电气、电仪应用工程师.html',
  '职位详情页面-实习-电气、电仪应用工程师.html'
];

// 针对head部分的修改
function optimizeHeadSection(content) {
  // 添加viewport设置
  content = content.replace(
    /<meta name="viewport" content="width=device-width, initial-scale=1.0">/,
    '<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">'
  );
  
  // 添加移动端优化CSS
  if (!content.includes('<link href="mobile-fix.css" rel="stylesheet">')) {
    content = content.replace(
      '</head>',
      '<link href="mobile-fix.css" rel="stylesheet">\n</head>'
    );
  }

  return content;
}

// 更新导航部分
function optimizeNavigation(content) {
  // 更新移动菜单按钮
  content = content.replace(
    /<button class="md:hidden text-white w-10 h-10 flex items-center justify-center">/g,
    '<button id="mobileMenuButton" class="md:hidden text-white w-10 h-10 touch-target flex items-center justify-center">'
  );

  // 更新移动导航菜单
  if (!content.includes('id="mobileMenu"')) {
    content = content.replace(
      /<div class="hidden fixed inset-0 bg-primary z-50 pt-20 px-6">/,
      '<div id="mobileMenu" class="hidden fixed inset-0 bg-primary z-50 pt-20 px-6 mobile-menu">'
    );
  }

  // 添加touch-target类到移动菜单链接
  content = content.replace(
    /<a href="index.html" class="text-white text-xl font-medium border-b border-gray-700 pb-3">/g,
    '<a href="index.html" class="text-white text-xl font-medium border-b border-gray-700 pb-3 touch-target">'
  );

  // 将产品和解决方案链接替换为下拉按钮
  const mobileProductDropdownHTML = `<div class="relative">
<button id="mobileProductDropdownBtn" class="w-full text-left text-white text-xl font-medium border-b border-gray-700 pb-3 touch-target flex justify-between items-center">
产品和解决方案
<i class="ri-arrow-down-s-line"></i>
</button>
<div id="mobileProductDropdown" class="hidden pl-4 pt-2 pb-2">
<a href="产品与解决方案-SEL.html" class="block text-white text-lg py-2 touch-target">SEL产品</a>
<a href="产品与解决方案-日立.html" class="block text-white text-lg py-2 touch-target">日立能源产品</a>
<a href="产品与解决方案-开关柜.html" class="block text-white text-lg py-2 touch-target">开关柜组件</a>
</div>
</div>`;

  content = content.replace(
    /<a href="#" class="text-white text-xl font-medium border-b border-gray-700 pb-3">产品和解决方案<\/a>/g, 
    mobileProductDropdownHTML
  );

  // 添加touch-target类到其他移动菜单链接
  content = content.replace(
    /<a href="联系我们.html" class="text-white text-xl font-medium border-b border-gray-700 pb-3">/g,
    '<a href="联系我们.html" class="text-white text-xl font-medium border-b border-gray-700 pb-3 touch-target">'
  );
  
  content = content.replace(
    /<a href="关于我们.html" class="text-white text-xl font-medium border-b border-gray-700 pb-3">/g,
    '<a href="关于我们.html" class="text-white text-xl font-medium border-b border-gray-700 pb-3 touch-target">'
  );
  
  content = content.replace(
    /<a href="加入我们.html" class="text-white text-xl font-medium pb-3">/g,
    '<a href="加入我们.html" class="text-white text-xl font-medium pb-3 touch-target">'
  );

  return content;
}

// 优化页脚
function optimizeFooter(content) {
  // 修复页脚图标对齐问题
  const optimizedFooter = `<footer class="bg-primary text-white py-6">
<div class="container mx-auto px-6">
<div class="flex justify-between items-center footer-container">
<div class="flex items-center space-x-12 footer-info">
<div class="footer-icon">
<i class="ri-phone-line text-white text-xl"></i>
<span class="ml-2 text-white hover:text-gray-200 transition-colors">+86 28 8529 3296</span>
</div>
<div class="footer-icon">
<i class="ri-mail-line text-white text-xl"></i>
<span class="ml-2 text-white hover:text-gray-200 transition-colors">info@e-sunray.com</span>
</div>
</div>
<div class="text-white copyright">
<span class="text-sm">© 2025 成都蜀锐科技有限公司 保留所有权利</span>
</div>
</div>
</div>
</footer>`;

  // 正则表达式来匹配整个页脚部分
  const footerRegex = /<footer class="bg-primary text-white py-6">[\s\S]*?<\/footer>/;
  
  // 替换页脚
  content = content.replace(footerRegex, optimizedFooter);

  return content;
}

// 添加移动端导航脚本
function addMobileScript(content) {
  // 替换旧的脚本，或添加新的脚本
  if (content.includes('<script>document.addEventListener(\'DOMContentLoaded\'')) {
    // 如果已有脚本，替换它
    content = content.replace(
      /<script>[\s\S]*?document\.addEventListener\('DOMContentLoaded'[\s\S]*?<\/script>/,
      '<script src="mobile-nav.js"></script>'
    );
  } else {
    // 如果没有，在body结束前添加
    content = content.replace(
      '</body>',
      '<script src="mobile-nav.js"></script>\n</body>'
    );
  }
  
  return content;
}

// 添加响应式类到图片
function optimizeImages(content) {
  return content.replace(
    /class="[\w\s-]*(object-cover)[\w\s-]*"/g,
    (match) => {
      if (!match.includes('responsive-img')) {
        return match.replace('"', ' responsive-img"');
      }
      return match;
    }
  );
}

// 改进Banner区域
function optimizeBanner(content) {
  // 添加banner-section类来改进Banner的移动显示
  return content.replace(
    /<section class="pt-\[\d+px\] relative bg-gray-100">/g,
    '<section class="pt-[100px] relative bg-gray-100 mobile-pt">'
  );
}

// 优化内容区域的响应式布局
function optimizeContentLayout(content) {
  // 调整标题大小在移动端
  content = content.replace(
    /<h1 class="text-3xl md:text-5xl font-bold mb-4">/g,
    '<h1 class="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 mobile-title">'
  );
  
  // 改进文本包装
  content = content.replace(
    /<p class="text-xl md:text-2xl max-w-3xl">/g,
    '<p class="text-lg sm:text-xl md:text-2xl max-w-3xl text-wrap">'
  );
  
  return content;
}

// 主函数：优化所有页面
async function optimizeAllPages() {
  for (const pageName of pagesToOptimize) {
    try {
      console.log(`正在优化页面: ${pageName}`);
      
      // 读取文件内容
      let content = fs.readFileSync(pageName, 'utf8');
      
      // 应用优化
      content = optimizeHeadSection(content);
      content = optimizeNavigation(content);
      content = optimizeFooter(content);
      content = addMobileScript(content);
      content = optimizeImages(content);
      content = optimizeBanner(content);
      content = optimizeContentLayout(content);
      
      // 写回文件
      fs.writeFileSync(pageName, content, 'utf8');
      
      console.log(`✅ 页面 ${pageName} 优化完成`);
    } catch (error) {
      console.error(`❌ 优化页面 ${pageName} 时出错:`, error);
    }
  }
  
  console.log('所有页面优化完成！');
}

// 执行优化
optimizeAllPages(); 