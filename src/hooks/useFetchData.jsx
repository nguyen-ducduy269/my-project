import axios from "axios";

const useFetchData = (url) => {
  axios.get(url).then((response) => response.data);
};

export default useFetchData;
