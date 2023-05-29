import { selector } from "recoil";
import { userState } from "../atoms/userState";

export const userInitial = selector({
  key: "userSelector",
  get: ({ get }) => {
    const { full_name } = get(userState);

    return full_name
      .toUpperCase()
      .match(/(\b\S)?/g)
      .join("");
  },
});
