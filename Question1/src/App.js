import { useState } from 'react';
import './App.css';
import validator from 'validator';

function App() {

  const [showErr, setShowErr] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false)
  const [inpval, setInpVal] = useState("")

  const validate = (value) => { 
    
    if (validator.isURL(value)) { 
      setErrorMessage(true) 
    } else { 
      setErrorMessage(false) 
    } 
  } 

  return (
    <>
      <div className=' text-white border bg-success p-4'>
        <h4>Number Management HTTP microservice</h4>
      </div>
      <div className="mb-3 m-4 border border-success border-2 rounded p-5">
        <label for="exampleFormControlInput1" className="form-label"> <h2>Enter your URL</h2> </label>
        <input value={inpval} onChange={(e)=>{setInpVal(e.target.value)}} type="text" className="form-control mb-3" id="exampleFormControlInput1" placeholder="https://your_url.com" />
          { showErr && <div>
            {(errorMessage) ? 
            <div className='d-flex gap-3'>
              <button disabled class="btn bg-success text-white mb-3 btn-light">URL is valid</button>
              <div className='mb-3 d-flex gap-3 align-items-center'> <h6>Data : </h6> <span>[1,2,3,4,5,7,6,8] </span></div>
            </div> :
            <button disabled class="btn bg-danger text-white mb-3 btn-light">URL is invalid.</button>}
          </div>}
        <button onClick={()=>{validate(inpval); setShowErr(true)}} className='btn btn-primary'>Validate Url </button>
      </div>
    </>
  );
}

export default App;
