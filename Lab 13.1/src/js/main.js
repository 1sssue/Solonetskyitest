// Функція для відкриття форми авторизації
function openLoginForm() {
    document.getElementById('loginForm').style.display = 'block';
  }
  
  // Функція для закриття форми авторизації
  function closeLoginForm() {
    document.getElementById('loginForm').style.display = 'none';
  }
  
  // Функція для відкриття форми пошуку
  function openSearch() {
    document.getElementById('searchForm').style.display = 'block';
  }
  
  // Функція для закриття форми пошуку
  function closeSearchForm() {
    document.getElementById('searchForm').style.display = 'none';
  }
  
  // Функція для здійснення пошуку за запитом
  function search() {
    const query = document.getElementById('searchQuery').value;
    if (query) {
      // Перехід на сторінку пошуку Google з введеним запитом
      window.location.href = `https://www.google.com/search?q=${query}`;
    }
  }
  
  // Функція для переходу на сторінку рейтингу (IMDb)
  function openRatingPage() {
    window.location.href = 'https://www.imdb.com/list/ls051306277/';
  }
  
  // Обробник подій для кнопки "Пошук"
  document.getElementById('searchButton').addEventListener('click', function(event) {
    event.preventDefault(); // Запобігаємо стандартному переходу по посиланню
    search(); // Викликаємо функцію пошуку
  });
  
  // Обробник подій для кнопки "Рейтинг"
  document.getElementById('ratingButton').addEventListener('click', function(event) {
    event.preventDefault(); // Запобігаємо стандартному переходу по посиланню
    openRatingPage(); // Викликаємо функцію відкриття сторінки з рейтингами
  });
  
  // Обробник подій для кнопки "Авторизація"
  document.getElementById('loginButton').addEventListener('click', function(event) {
    event.preventDefault(); // Запобігаємо стандартному переходу по посиланню
    openLoginForm(); // Викликаємо функцію відкриття форми авторизації
  });
  
  // Обробник подій для кнопки "Закрити авторизацію"
  document.getElementById('closeLoginButton').addEventListener('click', function(event) {
    event.preventDefault(); // Запобігаємо стандартному переходу по посиланню
    closeLoginForm(); // Викликаємо функцію закриття форми авторизації
  });
  
  // Установлення подій для закриття форми пошуку при натисканні на кнопку
  document.getElementById('closeSearchButton').addEventListener('click', function(event) {
    event.preventDefault(); // Запобігаємо стандартному переходу по посиланню
    closeSearchForm(); // Викликаємо функцію закриття форми пошуку
  });
  