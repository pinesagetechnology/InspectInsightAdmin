import { RootState } from "store/rootReducers";

export const getShowOverlayFlag = (state: RootState) => state.overlayState.showLoading;