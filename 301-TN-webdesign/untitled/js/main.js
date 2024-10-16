const options = document.querySelectorAll(".option");

options.forEach(function(option) {
  option.addEventListener("click", function() {
    options.forEach(function(opt) {
      opt.classList.remove("active");
    });

    this.classList.add("active");
  });
});

function changePhoto() {
  const options = document.querySelectorAll('.option');
  const activeOption = document.querySelector('.option.active');

  const currentIndex = Array.from(options).indexOf(activeOption);
  const nextIndex = (currentIndex + 1) % options.length;

  activeOption.classList.remove('active');
  options[nextIndex].classList.add('active');
}

setInterval(changePhoto, 5000); // Змінюємо фотографії кожні 5 секунд



const options1 = document.querySelectorAll(".option1");

options1.forEach(function(option1) {
  option1.addEventListener("click", function() {
    options1.forEach(function(opt) {
      opt.classList.remove("active");
    });

    this.classList.add("active");
  });
});

function changePhoto1() {
  const options1 = document.querySelectorAll('.option1');
  const activeOption1 = document.querySelector('.option1.active');

  const currentIndex1 = Array.from(options1).indexOf(activeOption1);
  const nextIndex1 = (currentIndex1 + 1) % options1.length;

  activeOption1.classList.remove('active');
  options1[nextIndex1].classList.add('active');
}

setInterval(changePhoto1, 5000); // Змінюємо фотографії кожні 5 секунд

const options2 = document.querySelectorAll(".option2");

options2.forEach(function(option2) {
  option2.addEventListener("click", function() {
    options2.forEach(function(opt) {
      opt.classList.remove("active");
    });

    this.classList.add("active");
  });
});
function changePhoto2() {
  const options2 = document.querySelectorAll('.option2');
  const activeOption2 = document.querySelector('.option2.active');

  const currentIndex2 = Array.from(options2).indexOf(activeOption2);
  const nextIndex2 = (currentIndex2 + 1) % options2.length;

  activeOption2.classList.remove('active');
  options2[nextIndex2].classList.add('active');
}

setInterval(changePhoto2, 5000); // Змінюємо фотографії кожні 5 секунд



const anchors = document.querySelectorAll('a[href*="#"]')

for(let anchor of anchors) {
  anchor.addEventListener("click",function (event) {
    event.preventDefault();
    const blockID = anchor.getAttribute('href')
    document.querySelector('' + blockID).scrollIntoView({
      behavior:"smooth",
      block:"start"
    })
  })
}

document.addEventListener('DOMContentLoaded', () => {
  updateTime();
  setInterval(updateTime, 1000);
});

function updateTime() {
  const now = new Date();
  const day = now.toLocaleString('en-US', { weekday: 'short'});
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  document.documentElement.style.setProperty('--timer-day', `'${day}'`);
  document.documentElement.style.setProperty('--timer-hours', `'${hours}'`);
  document.documentElement.style.setProperty('--timer-minutes', `'${minutes}'`);
  document.documentElement.style.setProperty('--timer-seconds', `'${seconds}'`);
}

