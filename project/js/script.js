/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const adv = document.querySelectorAll('.promo__adv img'),
    poster = document.querySelector('.promo__bg'),
    genre = poster.querySelector('.promo__genre'),
    films = document.querySelector('.promo__interactive-list'),
    filmForm = document.querySelector('.add'),
    btnSubmit = filmForm.querySelector('button');

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против всех"
    ]
};


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
//         films.append(nameOfElement);
//         nameOfElement.textContent = (i + 1) + ') ' + nameOfFilm;
//     }
// }
//
// createElement('div', 'promo__interactive-item');

function filmsUpdate () {

    films.innerHTML = '';

    movieDB.movies.sort();

    movieDB.movies.forEach((film, i) => {
        if (film.length > 21) {
            film = film.substr(0, 21);
            film += '...';
        }
        films.innerHTML += `
    <li class="promo__interactive-item">${(i + 1)}) ${film}
        <div class="delete"></div>
    </li>`;
    })
}






start();

filmsUpdate();

btnSubmit.addEventListener('click', (event) => {
    event.preventDefault();
    let newFilm = filmForm.querySelector('.adding__input');
    if (newFilm.value !== '' && newFilm.value !== null) {
        movieDB.movies.push(newFilm.value);
    }
    newFilm.value = '';
    movieDB.movies.sort();
    console.log(movieDB.movies)
    filmsUpdate();
});