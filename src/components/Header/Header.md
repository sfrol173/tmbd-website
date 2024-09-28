### Html структура

```html
<header class="header">
	<div class="container">
		<div class="header__wrapper">
			<div class="header__logo">
				<a href="#" class="logo">
					<IconLogo/>
				</a>
			</div>
			<div class="header__actions">
				<div class="header__favorites-list">
					Список обраних

					<span class="icon-favorite">
                        <span class="count">0</span>
                        <IconFavorite/>
                    </span>
				</div>
			</div>
		</div>
	</div>
</header>
```


#### Imports

```js
import React from "react";
import './Header.scss'
```
