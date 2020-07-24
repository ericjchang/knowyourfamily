import {  useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../store/actions"
import Swal from "sweetalert2";

const useFetch = (url) => {
  
    const dispatch = useDispatch();
    const data = useSelector(state => state.GameReducer.games);
    const setNewData = (name) => {
      dispatch({
        type: "ADD_GAME",
        game: {
          id: data.length + 1,
          name: name,
        },
      });
      Swal.fire({
        position: "top",
        icon: "success",
        title: "Your GAME has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
    };

    const getAllGames = () => {
      dispatch(fetchData(url))
    };

    useEffect(() => {
      dispatch({ type: "NYALAKAN_KEADAAN" });
      getAllGames();

    }, []);

    return [setNewData];
};
  
export default useFetch;
