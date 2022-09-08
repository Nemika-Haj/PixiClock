import "./app.scss";
import * as Pixi from "pixi.js";

const app = new Pixi.Application({
  backgroundAlpha: 0,
  width: window.innerWidth,
  height: window.innerHeight
});

const container = new Pixi.Container();

const sprite = Pixi.Sprite.from('./assets/Clock.png');
sprite.anchor.set(.5);

container.addChild(sprite);
container.x = app.view.width / 2;
container.y = app.view.height / 2;

const lineContainer = new Pixi.Container();
lineContainer.y -= 2;

const longLine = new Pixi.Graphics();
longLine
.beginFill(0x000000)
.drawRect(0,0, 100, 4)
.endFill();
lineContainer.addChild(longLine);

const shortLine = new Pixi.Graphics();
shortLine
.beginFill(0x000000)
.drawRect(0,0, 50, 4)
.endFill();

const thinLine = new Pixi.Graphics();
thinLine
.beginFill(0x000000)
.drawRect(0,0, 100, 2)
.endFill();

lineContainer.addChild(shortLine);
lineContainer.addChild(thinLine);
container.addChild(lineContainer);

app.stage.addChild(container);

app.ticker.add(() => {
  const timeNow = new Date();
  thinLine.rotation = Math.PI * 1.5 + Math.PI / 30 * timeNow.getSeconds();
  longLine.rotation = Math.PI * 1.5 + Math.PI / 30 * timeNow.getMinutes();
  shortLine.rotation = Math.PI * 1.5 + Math.PI / 30 * ((timeNow.getHours()) * (timeNow.getMinutes()));
})

document.body.appendChild(app.view);