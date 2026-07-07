// 英文页面语言切换：纯链接跳转（中文站由 language.js 负责，英文页不做运行时翻译）
(function () {
  var zhPage = window.__zhPage || '../index.html';

  function init() {
    var desktopNav = document.querySelector('nav.hidden.md\\:flex');
    if (desktopNav && !document.getElementById('languageDropdownBtn')) {
      var container = document.createElement('div');
      container.className = 'relative';

      var btn = document.createElement('button');
      btn.className = 'nav-link text-white hover:text-gray-200 flex items-center gap-1';
      btn.id = 'languageDropdownBtn';
      btn.innerHTML = '<i class="ri-global-line"></i><span>Eng</span><i class="ri-arrow-down-s-line"></i>';

      var dropdown = document.createElement('div');
      dropdown.id = 'languageDropdown';
      dropdown.className = 'absolute hidden w-32 bg-white rounded-lg shadow-lg py-2 mt-2 right-0';
      dropdown.innerHTML =
        '<a href="' + zhPage + '" class="block w-full px-4 py-2 text-gray-800 hover:text-primary text-left text-base">中文</a>' +
        '<a href="#" class="block w-full px-4 py-2 text-primary text-left text-base" onclick="return false;">English</a>';

      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        dropdown.classList.toggle('hidden');
      });
      document.addEventListener('click', function () {
        dropdown.classList.add('hidden');
      });

      container.appendChild(btn);
      container.appendChild(dropdown);
      desktopNav.appendChild(container);
    }

    var mobileMenu = document.querySelector('#mobileMenu .flex.flex-col');
    if (mobileMenu) {
      var section = document.createElement('div');
      section.innerHTML =
        '<p class="text-white text-xl font-medium border-b border-gray-700 pb-3">语言 / Language</p>' +
        '<div class="pl-4 pt-2 pb-2">' +
        '<a href="' + zhPage + '" class="block text-white text-lg py-2 touch-target">中文</a>' +
        '<a href="#" class="block text-white text-lg py-2 touch-target font-semibold" onclick="return false;">English</a>' +
        '</div>';
      mobileMenu.appendChild(section);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
