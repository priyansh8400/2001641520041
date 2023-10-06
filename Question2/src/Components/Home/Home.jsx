import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from '../Navbar/Navbar'
import { Link } from 'react-router-dom';

function Home() {

    const [formopen, setFormOpen] = useState(false);

    useEffect(()=>{
        axios.get('')
    },[])

  return (
    <>
        <Navbar />
        <h2 className='p-2'>Ticket Booking Window</h2>
        <button className="btn btn-primary p-2 m-3" onClick={()=>{setFormOpen(true)}}>Book tickets</button>
        { formopen && <form className='m-3 border p-4 primary rounded'>
                <h2 className="heading b">Fill this form to book ticket
                    <button onClick={()=>{setFormOpen(false)}} className="btn btn-danger float-end ">Close</button>
                </h2> <br />
                
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Company Name</label>
                    <input type="text" className="form-control" id="exampleInputText1" aria-describedby="textHelp" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Client Id</label>
                    <input type="text" className="form-control" id="exampleInputName1" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Owner Name</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Owner Email</label>
                    <input type="email" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Roll No.</label>
                    <input type="number" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Client Secret</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" />
                </div>
                <Link to='train-details'>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </Link>
            </form>}
    </>
  )
}

export default Home