/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Брюс Всемогущий"
    ]
};

const advertising = document.querySelector('.promo__adv'),
    genre = document.querySelector('.promo__genre'),
    bg = document.querySelector('.promo__bg'),
    films = document.querySelectorAll('.promo__interactive-item');


function test() {
    advertising.remove();

    genre.innerHTML = "драма";

    bg.style.cssText = 'background : url("../img/bg.jpg");';

    let i = 0;
    films.forEach(item =>{
        let film = movieDB.movies[i];
        item.innerHTML = film;
        i++
    });

}

test ();



