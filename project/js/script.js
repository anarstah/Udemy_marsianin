'use strict';
document.addEventListener('DOMContentLoaded', () => {

    /*Переменные и ДБ*/

    const adv = document.querySelectorAll('.promo__adv img'),
        poster = document.querySelector('.promo__bg'),
        genre = poster.querySelector('.promo__genre'),
        listFilms = document.querySelector('.promo__interactive-list'),
        filmForm = document.querySelector('.add'),
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
        dbSort();
        parent.innerHTML = '';
        films.forEach((film, i) => {
            if (film.length > 21) {
                film = `${film.substr(0, 21)}...`;
            }
            parent.innerHTML += `
    <li class="promo__interactive-item">${(i + 1)}) ${film}
        <div class="delete"></div>
    </li>`;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                movieDB.movies.splice(i, 1);
                filmsUpdate(films, parent);
            });
        })
    }

    /* Действия */

    start();

    filmsUpdate(movieDB.movies, listFilms);

    filmForm.addEventListener('submit', (event) => {
        event.preventDefault();
        let newFilm = filmForm.querySelector('.adding__input');
        if (newFilm.value) {
            movieDB.movies.push(newFilm.value);
        }
        filmsUpdate(movieDB.movies, listFilms);
        if (btnCheckBox.checked) {
            alert('Добавлен мой любимый фильм!');
        }
        event.target.reset();
    });
});