### Html структура

```html
    <div class="modal-wrapper"
        <div class="modal">
            <div class="modal-box">
	            <button type="button" class="modal-close">
		            <Close/>
	            </button>
	            <header class="modal-header">
		            <h4>Modal</h4>
                </header>
	            <div class="modal-content">
		            КІНО => {title}
                </div>
	            <footer class="modal-footer">
                    <div class="button-wrapper">
                        <Button class="btn">OK</Button>
                        <Button class="btn">Cansel</Button>
                    </div>
                </footer>
            </div>
        </div>
    </div>
```

#### Props

```js
const props = {
	onClose: "func",
	isOpen: "bool",
	onModal: "func",
};
```


#### Завдання

1. Розбити структуру на мікро компоненнти
2. Обьеднати мікро компоненти в базовий компонет
