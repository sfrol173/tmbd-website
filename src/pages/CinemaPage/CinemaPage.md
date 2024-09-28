### Html структура

```html
<header class="page-movie-header">
	<div class="header-bg" style={{backgroundImage: `url(${IMG_URL}${backdrop_path})`}}/>
	<Container>
		<div class="header-wrapper">
            <span class="btn-back" onClick={goBack}>
                <ArrowIcon />
            </span>
			<div class="header-poster">
				<img class="image" src={`${IMG_URL}${poster_path}`} alt={title}/>
			</div>
			<div class="header-content">
				<p class="movie-name">{title}</p>
				<p class="movie-subname"><i>{original_title}</i></p>
				<p class="movie-info">
                    <span class="genres">
                        <span>{name},</span>
                    </span>
					<span class="runtime">{runtime}</span>
				</p>
				<p class="movie-overview">
					{overview}
				</p>
				<p class="movie-created">
					Release date: {release_date}
				</p>
			</div>
		</div>
	</Container>
</header>
```

### Data
```js
`${API_URL}/movie/${id}?api_key=${API_KEY_3}`

const {
    backdrop_path,
    poster_path,
    original_title,
    title,
    genres = [],
    runtime,
    overview,
    release_date,
} = data;
```
