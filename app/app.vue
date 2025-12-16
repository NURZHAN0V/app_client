<template>
  <div class="app">
    <!-- Header -->
    <header class="header">
      <div class="container">
        <div class="header-content">
          <div class="logo">
            <span class="logo-text">App</span>
          </div>
          <nav class="nav">
            <a href="#" class="nav-link">Главная</a>
            <a href="#" class="nav-link">О нас</a>
            <a href="#" class="nav-link">Контакты</a>
          </nav>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="main">
      <div class="container">
        <section class="content">
          <h1 class="title">Добро пожаловать</h1>
          <p class="description">
            Минимальный MVP с адаптивным дизайном для всех устройств
          </p>
        </section>
      </div>
    </main>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <p class="footer-text">© 2025 App. Все права защищены.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* App Container */
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #f5f5f5;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  color: #333;
}

/* Container */
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Header */
.header {
  background: #fff;
  border-bottom: 1px solid #e0e0e0;
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: #667eea;
}

.nav {
  display: flex;
  gap: 2rem;
  list-style: none;
}

.nav-link {
  color: #666;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #667eea;
}

/* Main Content */
.main {
  flex: 1;
  padding: 3rem 0;
}

.content {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  color: #333;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.description {
  font-size: clamp(1rem, 2vw, 1.125rem);
  color: #666;
  line-height: 1.6;
}

/* Footer */
.footer {
  background: #fff;
  border-top: 1px solid #e0e0e0;
  padding: 2rem 0;
  margin-top: auto;
}

.footer-content {
  text-align: center;
}

.footer-text {
  color: #999;
  font-size: 0.875rem;
}

/* Адаптивность для планшетов */
@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
    gap: 1rem;
  }

  .nav {
    gap: 1.5rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  .main {
    padding: 2rem 0;
  }
}

/* Адаптивность для мобильных устройств */
@media (max-width: 480px) {
  .container {
    padding: 0 1rem;
  }

  .header {
    padding: 0.75rem 0;
  }

  .logo {
    font-size: 1.25rem;
  }

  .nav {
    gap: 1rem;
    font-size: 0.9rem;
  }

  .main {
    padding: 1.5rem 0;
  }

  .footer {
    padding: 1.5rem 0;
  }
}

/* Адаптивность для очень маленьких экранов */
@media (max-width: 320px) {
  .nav {
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
  }

  .nav-link {
    font-size: 0.85rem;
  }
}

/* Поддержка темной темы (опционально) */
@media (prefers-color-scheme: dark) {
  .app {
    background: #1a1a1a;
    color: #e0e0e0;
  }

  .header {
    background: #2a2a2a;
    border-bottom-color: #3a3a3a;
  }

  .logo {
    color: #8b9aff;
  }

  .nav-link {
    color: #b0b0b0;
  }

  .nav-link:hover {
    color: #8b9aff;
  }

  .title {
    color: #e0e0e0;
  }

  .description {
    color: #b0b0b0;
  }

  .footer {
    background: #2a2a2a;
    border-top-color: #3a3a3a;
  }

  .footer-text {
    color: #888;
  }
}
</style>