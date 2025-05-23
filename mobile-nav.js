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
        mobileMenuButton.innerHTML = '<i class="ri-close-line ri-2x"></i>';
      } else {
        mobileMenu.classList.add('hidden');
        mobileMenuButton.innerHTML = '<i class="ri-menu-line ri-2x"></i>';
      }
    });
  }
  
  // 移动端产品下拉菜单
  if (mobileProductDropdownBtn && mobileProductDropdown) {
    mobileProductDropdownBtn.addEventListener('click', function() {
      if (mobileProductDropdown.classList.contains('hidden')) {
        mobileProductDropdown.classList.remove('hidden');
        mobileProductDropdownBtn.querySelector('i').classList.remove('ri-arrow-down-s-line');
        mobileProductDropdownBtn.querySelector('i').classList.add('ri-arrow-up-s-line');
      } else {
        mobileProductDropdown.classList.add('hidden');
        mobileProductDropdownBtn.querySelector('i').classList.remove('ri-arrow-up-s-line');
        mobileProductDropdownBtn.querySelector('i').classList.add('ri-arrow-down-s-line');
      }
    });
  }
  
  // 桌面端下拉菜单
  if (productDropdownBtn && productDropdown) {
    const productDropdownContainer = document.querySelector('.relative');
    
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
      
      productDropdown.addEventListener('mouseenter', function() {
        clearTimeout(dropdownTimeout);
      });
      
      productDropdown.addEventListener('mouseleave', function() {
        dropdownTimeout = setTimeout(function() {
          productDropdown.classList.add('hidden');
          isDropdownOpen = false;
        }, 300);
      });
      
      document.addEventListener('click', function(e) {
        if (!productDropdown.contains(e.target) && !productDropdownBtn.contains(e.target)) {
          productDropdown.classList.add('hidden');
          isDropdownOpen = false;
        }
      });
      
      productDropdown.addEventListener('click', function(e) {
        e.stopPropagation();
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
  
  // 滚动时收起移动菜单
  window.addEventListener('scroll', function() {
    if (mobileMenu && !mobileMenu.classList.contains('hidden') && window.scrollY > 50) {
      mobileMenu.classList.add('hidden');
      if (mobileMenuButton) {
        mobileMenuButton.innerHTML = '<i class="ri-menu-line ri-2x"></i>';
      }
    }
  });
}); 