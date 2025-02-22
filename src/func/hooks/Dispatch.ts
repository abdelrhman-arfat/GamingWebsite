import { useDispatch } from "react-redux";
import { AppDispatch } from "../../RTK/store/Store";


export const useAppDispatch = () => {
  const dispatch = useDispatch<AppDispatch>();
  return dispatch;
};
