import axios from "axios";

const sendRequestToApi = (id) => {
  return axios.get(`${process.env.REACT_APP_OMDB_BASE_PATH}${process.env.REACT_APP_OMDB_KEY}&i=${id}`)
    .then((response)=>response.data)
    .catch((error)=> error);
}
export default sendRequestToApi;


// using Asyc to make it promise
    // const sendRequestToApi = async (id) => {
        //     const response = await axios
        //          .get(`${process.env.REACT_APP_OMDB_BASE_PATH}${process.env.REACT_APP_OMDB_KEY}&i=${id}`);
        //      return response.data;
        //      // .catch((error)=> {return error});