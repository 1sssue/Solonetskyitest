// Функція для обробки події 'keyup'
function handleInputEvent(e) {
  var input = e.target;
  var label = input.previousElementSibling;

  if (e.type === 'keyup') {
    if (input.value === '') {
      label.classList.remove('active', 'highlight');
    } else {
      label.classList.add('active', 'highlight');
    }
  } else if (e.type === 'blur') {
    if (input.value === '') {
      label.classList.remove('active', 'highlight');
    } else {
      label.classList.remove('highlight');
    }
  } else if (e.type === 'focus') {
    if (input.value === '') {
      label.classList.remove('highlight');
    } else if (input.value !== '') {
      label.classList.add('highlight');
    }
  }
}

// Отримуємо всі елементи форми та додаємо обробник подій
var formElements = document.querySelectorAll('.form input, .form textarea');
formElements.forEach(function (element) {
  element.addEventListener('keyup', handleInputEvent);
  element.addEventListener('blur', handleInputEvent);
  element.addEventListener('focus', handleInputEvent);
});

// Отримуємо всі посилання табів і додаємо обробник подій
var tabLinks = document.querySelectorAll('.tab a');
tabLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    var parent = link.parentNode;
    parent.classList.add('active');

    var siblings = parent.parentNode.querySelectorAll('li');
    siblings.forEach(function (sibling) {
      if (sibling !== parent) {
        sibling.classList.remove('active');
      }
    });

    var target = link.getAttribute('href');
    var tabContents = document.querySelectorAll('.tab-content > div');
    tabContents.forEach(function (content) {
      if (content !== target) {
        content.style.display = 'none';
      }
    });

    document.querySelector(target).style.display = 'block';
  });
});

