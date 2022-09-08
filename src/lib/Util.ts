import { Container, Graphics } from "pixi.js";

export default {
    fill: (element: Container, color: number, amount: number) => {
        const fillGraphics = new Graphics();
        fillGraphics
        .beginFill(color)
        .drawRect(0, 0, amount, amount)
        .endFill()

        element.addChild(fillGraphics);
    }
}