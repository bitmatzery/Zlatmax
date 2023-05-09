const ratings = document.querySelectorAll('.rating');
if (ratings.length > 0) {
  initRatings();
}

// Основная ф-ция
function initRatings() {
  let ratingActive, ratingValue;
  for (let index = 0; index < ratings.length; index++) {
    const rating = ratings[index];
    initRating(rating);
  }

  // Инициализируем конкретный рейтинг
  function initRating(rating) {
    initRatingVars(rating);

    setRatingActiveWidth();

    if (rating.classList.contains('rating-set')) {
      setRating(rating);
    }
  }

  // Инициализация переменных
  function initRatingVars(rating) {
    ratingActive = rating.querySelector('.rating__active');
    ratingValue = rating.querySelector('.rating__value');
  }

  // Изменяем ширину активных звёзд
  function setRatingActiveWidth(index = ratingValue.innerHTML) {
    const ratingActiveWidth = index / 0.05;
    ratingActive.style.width = `${ratingActiveWidth}%`;
  }

  // Возможность указать оценку
  function setRating(rating) {
    const ratingItems = document.querySelectorAll('.rating__item');
    for (let index = 0; index < ratingItems.length; index++) {
      const ratingItem = ratingItems[index];
      ratingItem.addEventListener('mouseenter', function (e) {
        // Обновление переменных
        initRatingVars(rating);
        // Обновление активных звёзд
        setRatingActiveWidth(ratingItem.value);
      });
      ratingItem.addEventListener('mouseleave', function (e) {
        // Обновление активных звёзд
        setRatingActiveWidth();
      });
      ratingItem.addEventListener('click', function (e) {
        // Обновление переменных
        initRatingVars(rating);

        if (rating.dataset.ajax) {
          // Отправить на сервер
          serRatingValue(ratingItem.value, rating);
        } else {
          // Отобразить указанную оценку
          setRatingValue.innerHTML = index + 1;
          setRatingActiveWidth();
        }
      });
    }
  }

  async function setRatingValue(value, rating) {
    if (!rating.classList.contains('rating-sending')) {
      rating.classList.add('rating-sending');

      // Отправка данных (value) на сервер
      let response = await fetch('../json/rating.json', {
        method: 'GET',

        // body: JSON.stringify({
        // userRating: value
        //}),
        // headers: {
        // 'content-type': 'appLication/json'
        // }
      });

      if (response.ok) {
        const result = await response.json();

        // Получаем новый рейтинг
        const newRating = result.newRating;

        // Вывод нового среднего результата
        ratingValue.innerHTML = newRating;

        // Обновление активных звёзд
        setRatingActiveWidth();

        // rating.classList.remove('rating-sending');
      } else {
        alert('Error');

        rating.classList.remove('rating-sending');
      }
    }
  }
}
