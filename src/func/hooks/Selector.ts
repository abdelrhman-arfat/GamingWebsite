import { useSelector } from "react-redux";
import { RootState } from "../../RTK/store/Store";

export const GetGameName = () => {
  return useSelector((state: RootState) => state.GameName);
};
export const GatPlatFormName = () => {
  return useSelector((state: RootState) => state.PlatForm);
};
