import { Form, InputGroup, Button, Collapse } from 'react-bootstrap';
import { useState } from 'react';
import sendRequestToApi from './SendRequestToApi';
const Search = (props) => {

    const [open, setOpen] = useState(false);
    const [input,setInput] =useState('');
    const [responseMessage, setResponseMessage] = useState('Please Search for Movie');

    const handleForm =(e) =>{
      e.preventDefault() ;
      const data = sendRequestToApi(input);
      data.then((data)=>{
        if(data.Response === 'False'){
          setResponseMessage(<span className="text-danger">{input}: {data.Error} </span>);
          setOpen(true);
          props.setShowMovieCard(false);
        }else{
          props.setMovieCardData(data);
          props.setShowMovieCard(true)
          // setResponseMessage(<div className='container'>
          //                   <div className='col'> 
          //                     <p>Title : {data.Title} </p>
          //                     <p> Year: {data.Year} </p>
          //                     <p>Rated : {data.Rated} </p>
          //                     <p>Released : {data.Released} </p>
          //                     <p>Runtime : {data.Runtime} </p>
          //                     <p>Genre : {data.Genre} </p>
          //                   </div>
          //                   <div className='col'>
          //                     <p>Director : {data.Director} </p>
          //                     <p>Writer : {data.Writer} </p>
          //                     <p>Actors : {data.Actors} </p>
          //                     <p>Language : {data.Language} </p>
          //                     <p>Plot : {data.Plot} </p>
          //                   </div>
          //                 </div>);
          setOpen(true)
        }
      });
    }
    
    const handleInput = (e) =>{
      if (e.target.value.length < 1) {
        setResponseMessage('Please Search for Movie');
      }
      setInput(e.target.value)
    }


    return (
    <Form onSubmit={handleForm}> 
    <InputGroup className="mb-3">
        <Form.Control placeholder="Search here" aria-label="Search here" value={input} aria-expanded ={open} onChange={handleInput} aria-describedby="basic-addon2" onFocus={()=>setOpen(!open)} onBlur={()=>{setOpen(false)}}/>
        <Button variant="outline-secondary" id="button-addon2" type='submit'>
          Search
        </Button>
    </InputGroup>
    <Collapse in={open}>
      <div id="example-collapse-text">
       {responseMessage}
      </div>
    </Collapse>
    </Form>
    );
}
export default Search;