### Html структура

```html
<div class="page-wrapper">
	<Container>
		<div class="posters-wrapper">
			<PosterCard />
		</div>
		<ModalMovies />
	</Container>
</div>
```

#### Props

```js
const props = {
	data: "array",
	onFavorite: "func",
};
```