// Reusable header content
(function() {
  // Get the language from the HTML lang attribute or path
  const htmlLang = document.documentElement.getAttribute('lang') || 'ru';
  const path = window.location.pathname;
  let lang = htmlLang;
  
  // Determine language from path
  if (path.includes('/it/')) {
    lang = 'it';
  } else if (path.includes('/ru/')) {
    lang = 'ru';
  }
  
  // Header configuration
  const headerConfig = {
    ru: {
      logoText: 'Каролина Берзина',
      currentLang: 'RU',
      logoLink: 'ru/',
      basePath: '../'
    },
    it: {
      logoText: 'Carolina Berzina',
      currentLang: 'IT',
      logoLink: 'it/',
      basePath: '../'
    }
  };
  
  const config = headerConfig[lang] || headerConfig.ru;
  
  // Adjust base path for root page
  const isRoot = !path.includes('/ru/') && !path.includes('/it/');
  const basePath = isRoot ? '' : config.basePath;
  const ruLink = basePath + 'ru/';
  const itLink = basePath + 'it/';
  const logoLink = isRoot ? 'ru/' : basePath + config.logoLink;
  
  // Create header HTML
  const headerHTML = `
    <header class="header">
      <div class="header__inner">
        <div class="header__logo">
          <a href="${logoLink}">
            <div class="logo">
              ${config.logoText}
            </div>
          </a>
        </div>
        <div class="header__language">
          <div class="language-dropdown">
            <button class="language-button" id="lang-button">
              <span id="lang-current">${config.currentLang}</span>
              <span class="language-arrow">▼</span>
            </button>
            <div class="language-menu">
              <a href="${ruLink}" class="language-option" data-lang="ru">RU</a>
              <a href="${itLink}" class="language-option" data-lang="it">IT</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  `;
  
  // Function to insert header
  function insertHeader() {
    const container = document.querySelector('.container.full');
    if (container) {
      // Check if header already exists
      if (!container.querySelector('.header')) {
        container.insertAdjacentHTML('afterbegin', headerHTML);
      }
      return true;
    }
    return false;
  }
  
  // Try to insert immediately (works if script is after container opening tag)
  if (!insertHeader()) {
    // If container doesn't exist yet, wait a tiny bit and try again
    // This handles cases where script loads before container is fully parsed
    setTimeout(function() {
      if (!insertHeader()) {
        // Last resort: wait for DOMContentLoaded
        document.addEventListener('DOMContentLoaded', insertHeader);
      }
    }, 0);
  }
})();
