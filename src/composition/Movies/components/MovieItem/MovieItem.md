### Html структура

```html
<div class="film-poster">
    <img src={`${IMG_URL}${poster_path}`} height='376px' alt="title"/>
    <div class='film-poster-back'>
        <h3 class="film-poster__title">title</h3>
        <p class="film-poster__subtitle">
            <i>original_title</i>
        </p>
        <p class="film-poster__desc">overview</p>
        <div class="button__wrapper">
            <a class="button" href="linkPath">Show more</a>
            <button class="button" type="button">Favorite</button>
        </div>
    </div>
</div>
```


#### Props

```js
const props = {
	posterPath: "string",
	title: "string",
	originalTitle: "string",
	overview: "string",
	linkPath: "string",
	onClick: "func"
};
```
