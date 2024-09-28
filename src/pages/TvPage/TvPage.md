### Html структура

```html
    <header class="page-tv-header">
        <div class="header-bg" style={{backgroundImage: `url(${IMG_URL}${backdrop_path})`}}/>
        <Container>
            <div class="header-wrapper">
                <span class="btn-back" onClick={goBack}>
                    <ArrowIcon />
                </span>
                <div class="header-poster">
                    <img class="image" src={`${IMG_URL}${poster_path}`} alt={name}/>
                </div>
                <div class="header-content">
                    <p class="movie-name">{name}</p>
                    <p class="movie-subname"><i>{original_name}</i></p>
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
    <div class="page-movie-content">
        <Container>
            <p class="content-title">Seasons</p>
            <div class="cards-seasons">
	            {/* { seasons {air_date,episode_count,name,poster_path} } */}
	            <div class="card">
		            <div class="card-post"><img src={`${IMG_URL}${poster_path}`} alt={name}/></div>
		            <div class="card-content">
			            <p class="card-name">{name}</p>
			            <p class="card-info">
				            <span>{air_date}</span> | <span>{episode_count} episodes</span>
			            </p>
		            </div>
	            </div>
            </div>
            <p class="content-title">Episodes</p>
            <div class="cards-episodes">
	            <div class="episode-item episodes-last">
		            <div class="episode-wrapper">
			            <div class="episode-post">
				            <img src={`${IMG_URL}${last_episode_to_air?.still_path}`}
				                 alt={last_episode_to_air?.name}/>
			            </div>
			            <div class="episode-content">
				            <p class="episode-name">Episodes name: {last_episode_to_air?.name}</p>
				            <p class="episode-date">
					            <i>Episodes date: {last_episode_to_air?.air_date}</i>
				            </p>
				            <p class="episode-info">Season: {last_episode_to_air?.season_number} Episode:
					            {last_episode_to_air?.episode_number} Runtime: {last_episode_to_air?.runtime}
				            </p>
				            <p class="episode-overview">{last_episode_to_air?.overview}</p>
			            </div>
		            </div>
	            </div>
	            <div class="episode-item episodes-next">
		            <div class="episode-wrapper">
			            <div class="episode-post">
				            <img src={`${IMG_URL}${next_episode_to_air?.still_path}`}
				                 alt={next_episode_to_air?.name}/>
			            </div>
			            <div class="episode-content">
				            <p class="episode-name">Episodes name: {next_episode_to_air?.name}</p>
				            <p class="episode-date"><i>Episodes
					            date: {next_episode_to_air?.air_date}</i></p>
				            <p class="episode-info">Season: {next_episode_to_air?.season_number} Episode:
					            {next_episode_to_air?.episode_number} Runtime: {next_episode_to_air?.runtime}
				            </p>
				            <p class="episode-overview">{next_episode_to_air?.overview}</p>
			            </div>
		            </div>
	            </div>
            </div>
        </Container>
    </div>
```

### Data
```js
`${API_URL}/tv/${id}?api_key=${API_KEY_3}`

const {
	backdrop_path,
	poster_path,
	name,
	original_name,
	genres = [], // => {name}
	episode_run_time,
	overview,
	created_by = [],
	seasons = [],// => {air_date,episode_count,name,poster_path}
	last_episode_to_air,
	next_episode_to_air
} = data;
```