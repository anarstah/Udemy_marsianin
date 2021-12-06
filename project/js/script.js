'use strict';
document.addEventListener('DOMContentLoaded', () => {

/*Переменные и ДБ*/

    const adv = document.querySelectorAll('.promo__adv img'),
        poster = document.querySelector('.promo__bg'),
        genre = poster.querySelector('.promo__genre'),
        listFilms = document.querySelector('.promo__interactive-list'),
        filmForm = document.querySelector('.add'),
        btnSubmit = filmForm.querySelector('button'),
        btnCheckBox = filmForm.querySelector('[type=checkbox]');

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против всех"
        ]
    };


/*Функции*/

    function dbSort() {
        movieDB.movies.sort(function (a, b) {
            a = a.toLowerCase();
            b = b.toLowerCase();
            if (a === b) return 0;
            return a < b ? -1 : 1;
        });
    }

    function start() {
        adv.forEach(item => {
            item.remove();
        });
        genre.textContent = "драма";
        poster.style.cssText = 'background : url("../img/bg.jpg");';
        dbSort();
    }

    /* Мой первый вариант */

    // function createElement(tagName, classTag) {
//     for (let i = 0; i < movieDB.movies.length; i++) {
//         const nameOfElement = document.createElement(tagName);
//         nameOfElement.classList.add(classTag);
//         const nameOfFilm = movieDB.movies[i];
//         listFilms.append(nameOfElement);
//         nameOfElement.textContent = (i + 1) + ') ' + nameOfFilm;
//     }
// }
// createElement('div', 'promo__interactive-item');

    function filmsUpdate(films, parent) {
        parent.innerHTML = '';
        films.forEach((film, i) => {
            if (film.length > 21) {
                film = film.substr(0, 21);
                film += '...';
            }
            parent.innerHTML += `
    <li class="promo__interactive-item">${(i + 1)}) ${film}
        <div class="delete"></div>
    </li>`;
        })
    }

/* Действия */

    start();

    filmsUpdate(movieDB.movies, listFilms);

    btnSubmit.addEventListener('click', (event) => {
        event.preventDefault();
        let newFilm = filmForm.querySelector('.adding__input');
        if (newFilm.value !== '' && newFilm.value !== null) {
            movieDB.movies.push(newFilm.value);
        }
        dbSort();
        filmsUpdate(movieDB.movies, listFilms);
        if (btnCheckBox.checked) {
            console.log('Добавлен мой любимый фильм!');
        }
        filmForm.reset();
    });
});