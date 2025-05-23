// 移动端导航控制
document.addEventListener('DOMContentLoaded', function() {
  // 获取DOM元素
  const mobileMenuButton = document.getElementById('mobileMenuButton');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileProductDropdownBtn = document.getElementById('mobileProductDropdownBtn');
  const mobileProductDropdown = document.getElementById('mobileProductDropdown');
  
  // 桌面端下拉菜单控制
  const productDropdownBtn = document.getElementById('productDropdownBtn');
  const productDropdown = document.getElementById('productDropdown');
  let isDropdownOpen = false;
  let dropdownTimeout;
  
  // 移动菜单切换
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', function() {
      if (mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.remove('hidden');
        mobileMenu.classList.add('flex');
        mobileMenuButton.innerHTML = '<i class="ri-close-line ri-2x"></i>';
      } else {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('flex');
        mobileMenuButton.innerHTML = '<i class="ri-menu-line ri-2x"></i>';
      }
    });
  }
  
  // 移动端产品下拉菜单 - 强化版本
  if (mobileProductDropdownBtn && mobileProductDropdown) {
    console.log("Mobile dropdown elements found"); // 调试信息
    
    // 防止多次绑定
    mobileProductDropdownBtn.removeEventListener('click', handleMobileDropdownClick);
    mobileProductDropdownBtn.addEventListener('click', handleMobileDropdownClick);
    
    // 触摸事件增强
    mobileProductDropdownBtn.addEventListener('touchstart', function(e) {
      e.stopPropagation(); // 阻止事件冒泡
    });
    
    mobileProductDropdownBtn.addEventListener('touchend', handleMobileDropdownClick);
  }
  
  // 移动端下拉菜单点击处理函数
  function handleMobileDropdownClick(e) {
    e.preventDefault();
    e.stopPropagation();
    
    console.log("Mobile dropdown button clicked"); // 调试信息
    
    if (!mobileProductDropdown) {
      console.error("Mobile product dropdown element not found");
      return;
    }
    
    if (mobileProductDropdown.classList.contains('hidden')) {
      // 显示下拉菜单
      mobileProductDropdown.classList.remove('hidden');
      mobileProductDropdown.classList.add('block');
      
      // 更改图标
      const icon = mobileProductDropdownBtn.querySelector('i');
      if (icon) {
        icon.classList.remove('ri-arrow-down-s-line');
        icon.classList.add('ri-arrow-up-s-line');
      }
      
      console.log("Mobile dropdown opened"); // 调试信息
    } else {
      // 隐藏下拉菜单
      mobileProductDropdown.classList.add('hidden');
      mobileProductDropdown.classList.remove('block');
      
      // 更改图标
      const icon = mobileProductDropdownBtn.querySelector('i');
      if (icon) {
        icon.classList.remove('ri-arrow-up-s-line');
        icon.classList.add('ri-arrow-down-s-line');
      }
      
      console.log("Mobile dropdown closed"); // 调试信息
    }
  }
  
  // 确保移动端下拉菜单内部链接可点击
  if (mobileProductDropdown) {
    const mobileDropdownLinks = mobileProductDropdown.querySelectorAll('a');
    mobileDropdownLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.stopPropagation();
        // 允许链接正常工作
      });
      
      // 为移动设备优化
      link.addEventListener('touchend', function(e) {
        e.stopPropagation();
        // 允许链接正常工作
      });
    });
  }
  
  // 桌面端下拉菜单
  if (productDropdownBtn && productDropdown) {
    const productDropdownContainer = productDropdownBtn.closest('.relative');
    
    if (productDropdownContainer) {
      productDropdownContainer.addEventListener('mouseenter', function() {
        clearTimeout(dropdownTimeout);
        productDropdown.classList.remove('hidden');
        isDropdownOpen = true;
      });
      
      productDropdownContainer.addEventListener('mouseleave', function() {
        dropdownTimeout = setTimeout(function() {
          productDropdown.classList.add('hidden');
          isDropdownOpen = false;
        }, 300); // 300ms delay before hiding
      });
      
      // 点击产品下拉按钮时的处理（适用于触摸设备）
      productDropdownBtn.addEventListener('click', function(e) {
        if ('ontouchstart' in document.documentElement) {
          e.preventDefault();
          if (isDropdownOpen) {
            productDropdown.classList.add('hidden');
            isDropdownOpen = false;
          } else {
            productDropdown.classList.remove('hidden');
            isDropdownOpen = true;
          }
        }
      });
    }
  }
  
  // 处理iOS设备上的触摸事件
  if ('ontouchstart' in document.documentElement) {
    document.body.style.cursor = 'pointer';
    
    // 增加触摸反馈
    const touchTargets = document.querySelectorAll('.touch-target, a, button');
    touchTargets.forEach(function(el) {
      el.addEventListener('touchstart', function() {
        this.style.opacity = '0.7';
      });
      
      el.addEventListener('touchend', function() {
        this.style.opacity = '1';
      });
    });
  }
  
  // 点击页面任何地方关闭菜单
  document.addEventListener('click', function(e) {
    // 关闭移动导航菜单
    if (mobileMenu && !mobileMenu.classList.contains('hidden') && 
        mobileMenuButton && !mobileMenuButton.contains(e.target) && 
        !mobileMenu.contains(e.target)) {
      mobileMenu.classList.add('hidden');
      mobileMenu.classList.remove('flex');
      mobileMenuButton.innerHTML = '<i class="ri-menu-line ri-2x"></i>';
    }
    
    // 关闭桌面导航下拉菜单
    if (productDropdown && !productDropdown.classList.contains('hidden') && 
        productDropdownBtn && !productDropdownBtn.contains(e.target) && 
        !productDropdown.contains(e.target)) {
      productDropdown.classList.add('hidden');
      isDropdownOpen = false;
    }
  });
  
  // 滚动时收起移动菜单
  window.addEventListener('scroll', function() {
    if (mobileMenu && !mobileMenu.classList.contains('hidden') && window.scrollY > 50) {
      mobileMenu.classList.add('hidden');
      mobileMenu.classList.remove('flex');
      if (mobileMenuButton) {
        mobileMenuButton.innerHTML = '<i class="ri-menu-line ri-2x"></i>';
      }
    }
  });
}); 