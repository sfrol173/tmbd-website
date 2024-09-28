### Html структура

```html
 <span className={`svg-icon svg-${id}`}>
     <svg>
        <use xlinkHref={`public/sprite.svg#${id}`}></use>
     </svg>
</span>
```

#### Props

```js
const props = {
	id: "string",
};
```

### Sprite
```
1) npm i -D vite-svg-sprite-wrapper

2) vite.config.js
    ViteSvgSpriteWrapper({
        icons: 'src/sprites/**/*.svg',///Де будуть лежати всі іконки
        outputDir: './public',// куди покласти готовий спрайт
    })

```