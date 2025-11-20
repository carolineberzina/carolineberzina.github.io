// Reusable head content - injects head elements immediately
(function() {
  // Get the language from the HTML lang attribute or path
  const htmlLang = document.documentElement.getAttribute('lang') || 'ru';
  const path = window.location.pathname;
  let lang = htmlLang;
  
  // Determine language from path if not in HTML
  if (path.includes('/it/')) {
    lang = 'it';
  } else if (path.includes('/ru/')) {
    lang = 'ru';
  }
  
  // Head content configuration
  const headConfig = {
    ru: {
      lang: 'ru',
      description: 'Каролина Берзина - преподаватель английского языка для подростков и взрослых',
      title: 'Каролина Берзина'
    },
    it: {
      lang: 'it',
      description: 'Carolina Berzina - insegnante di inglese per adolescenti e adulti',
      title: 'Carolina Berzina'
    }
  };
  
  const config = headConfig[lang] || headConfig.ru;
  const basePath = (path.includes('/ru/') || path.includes('/it/')) ? '../' : '';
  
  // Get head element
  const head = document.head || document.getElementsByTagName('head')[0];
  
  // Function to create and append element
  function addElement(tag, attributes, textContent) {
    const el = document.createElement(tag);
    for (const [key, value] of Object.entries(attributes)) {
      el.setAttribute(key, value);
    }
    if (textContent) {
      el.textContent = textContent;
    }
    head.appendChild(el);
    return el;
  }
  
  // Function to set or update meta tag
  function setMeta(name, content, attribute = 'name') {
    let meta = document.querySelector(`meta[${attribute}="${name}"]`);
    if (!meta) {
      meta = addElement('meta', {[attribute]: name, content: content});
    } else {
      meta.setAttribute('content', content);
    }
  }
  
  // Function to set or update link tag
  function setLink(rel, href) {
    let link = document.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      addElement('link', {rel: rel, href: href});
    } else {
      link.setAttribute('href', href);
    }
  }
  
  // Set charset (must be first, insert at beginning if not exists)
  if (!document.querySelector('meta[charset]')) {
    const charset = document.createElement('meta');
    charset.setAttribute('charset', 'UTF-8');
    head.insertBefore(charset, head.firstChild);
  }
  
  // Set viewport
  setMeta('viewport', 'width=device-width, initial-scale=1.0');
  
  // Set description
  setMeta('description', config.description);
  
  // Set title
  document.title = config.title;
  
  // Set stylesheet
  setLink('stylesheet', basePath + 'styles.css');
  
  // Set favicon
  setLink('shortcut icon', basePath + 'favicon.png');
  
  // Set apple touch icon
  setLink('apple-touch-icon', basePath + 'apple-touch-icon.png');
  
  // Update HTML lang attribute
  document.documentElement.setAttribute('lang', config.lang);
})();
