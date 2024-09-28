### Html структура

```html
<div class="page-wrapper">
	<Container>
		<div class="posters-wrapper">
            <PosterCard />
		</div>
		<div class="pagination">
			<p class="pagination-page">1000 із 20</p>
			<Button>Показати ще</Button>
		</div>
		<ModalMovies />
	</Container>
</div>
```

#### Fetch

```js
`${API_URL}/discover/movie?api_key=${API_KEY_3}`
```

#### Props

```js
const props = {
	favorites: "array",
	onFavorite: "func",
};
```