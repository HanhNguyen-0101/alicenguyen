import { ALIGN_TREE_CENTER, ALIGN_TREE_LEFT, ALIGN_TREE_RIGHT } from "../actionTypes/tree.actionTypes";

export const alignTreeLeft = () => ({
    type: ALIGN_TREE_LEFT
});
export const alignTreeRight = () => ({
    type: ALIGN_TREE_RIGHT
});
export const alignTreeCenter = () => ({
    type: ALIGN_TREE_CENTER
});