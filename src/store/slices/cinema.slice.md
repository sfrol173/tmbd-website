### Завдання

Зробити функцію actionFetchCinemaPage, асинхронная функція яка повинна робити запит на окремий фільм по id та взяти таки данні

```js
`${API_URL}/movie/${id}?api_key=${API_KEY_3}`
{
	backdrop_path,
    poster_path,
    original_title,
    title,
    genres = [],
    runtime,
    overview,
    release_date
}
```

Зробити функцію actionFetchCinemaAllPage, асинхронная функція яка повинна робити запит по сторінці та додавати нові постери в массив