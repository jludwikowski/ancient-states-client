import {Entity} from "./Entity";

export default interface Leader extends Entity {
    leadership: number,
    wisdom: number,
    cunning: number,
    willpower: number,
    imageUrl: ""
}
