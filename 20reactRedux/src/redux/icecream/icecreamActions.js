
import { BUY_ICECREAM } from "./icecreamTypes";

export const buyicecream = (iceCreamNumber) => {
    return {
        type: BUY_ICECREAM,
        payload: iceCreamNumber
    };
}


