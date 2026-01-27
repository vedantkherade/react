import { BUY_CAKE } from "./cakeTypes";

export const buyCake = (cakeNumber) => {
    return {
        type: BUY_CAKE,
        payload: cakeNumber
    };
}


