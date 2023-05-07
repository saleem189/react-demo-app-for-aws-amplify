import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import sendRequestToApi from './SendRequestToApi';
const Carosal = () =>{

    const imdb_ids =['tt0439572','tt1877830','tt0770828'];
    const [apidata, setApiData] = useState([]);

    useEffect(() => {
        // imdb_ids.forEach(id =>{
        //     sendRequest(id)
        //     .then((data) => {
        //         (data.Response !== false) ? setApiData((prevData) => [...prevData, data]) : console.error(data.response + '   '+ data.Error);
        //     })
        // });
        
        // ! this code is removing duplicates when ever component is mouted (if its a hook or any state)
        const fetchData = async () => {
            const data = await Promise.all(imdb_ids.map(id => sendRequestToApi(id)));
            setApiData(prevData => {
              const newData = [...prevData];
              data.forEach(item => {
                if (!newData.some(d => d.imdbID === item.imdbID)) {
                  newData.push(item);
                }
              });
              return newData;
            });
          };
          fetchData();
    }, [])
    
    


    const carosal_items = apidata.map(item => {
        return (

            <Carousel.Item interval={1000} key={Math.floor(Math.random()*1342)}>
                <img className="d-block w-100" src={item.Poster} alt="First slide"/>
                <Carousel.Caption>
                <h3>{item.Title}</h3>
                <p>{item.Plot}</p>
                </Carousel.Caption>
            </Carousel.Item>
        )
    })


    return (
        <Carousel>
            {carosal_items}
        </Carousel>
    );

}
export default Carosal;