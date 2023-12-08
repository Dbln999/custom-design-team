import { RootState } from "../../../app/providers/store/store.ts";

export const getUserAuthData = (state: RootState) => state.user?.authData;
export const getUserLoaded = (state: RootState) => state.user.loaded;
