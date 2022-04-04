import "./css/base.scss";
import { sayHello } from "./js/hello";

import imgSrc from "./images/404notfound.png";
import imgSrc1 from "./images/u=3646704477,823964487&fm=26&fmt=auto.webp";

sayHello();
console.log("hello world");

const app = document.getElementById("app");
console.log(app);

const img = document.createElement("img");

img.src = imgSrc;

app.appendChild(img);

const img1 = document.createElement("img");

img1.src = imgSrc1;

app.appendChild(img1);