### Html структура

```html
<button class="button"></button>
```

#### Props

```js
const props = {
  onClick: "func",
  type: "string",
  className: "string",
  href: "string",
  children: "any",
  to: "string",
  isOutline: "bool",
  restProps: "object",
};
```

#### Imports

```js
import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import './Button.scss'
```
