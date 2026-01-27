
import { BUY_COMBO } from "./comboType";


export const buyCombo = (comboNumber) => {
    return {
        type: BUY_COMBO,
        payload: comboNumber
    };
}



