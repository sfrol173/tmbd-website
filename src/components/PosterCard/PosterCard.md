### Html структура

```html
<div class="card-poster">
    <img
            src={`${IMG_URL}${poster.poster_path}`}
            height={'376px'}
            alt={poster.name ? poster.name : poster.title}
    />
    <div class="poster-back">
        <h4 class="card-title">{name}</h4>
        <p class="card-subtitle">{poster.original_name}</p>
        <p class="card-desc">{poster.overview}</p>
        <div class="card-buttons">
            <button class="button" to={linkPath} >Детальніше</button>
            <button class="button" theme="outline">Favorite</button>
        </div>
    </div>
</div>
```

#### Props

```js
const props = {
	name: "string",
	originalName: "string",
	overview: "string",
	linkPath: "string",
	posterPath: "string",
	onClick: "func"
};
```