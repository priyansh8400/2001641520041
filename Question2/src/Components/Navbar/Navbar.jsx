import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {

    const [formopen, setFormOpen] = useState(false);



    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className='nav-link'><h4 className='me-4'>Railway Express</h4></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className='nav-link active'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link active' onClick={() => { setFormOpen(true) }}>Register</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            { formopen && <form className='m-3 border p-4 primary rounded'>
                <h2 className="heading b">Register
                    <button onClick={()=>{setFormOpen(false)}} className="btn btn-danger float-end ">Close</button>
                </h2> <br />
                
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Company Name</label>
                    <input type="text" className="form-control" id="exampleInputText1" aria-describedby="textHelp" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Owner Name</label>
                    <input type="text" className="form-control" id="exampleInputName1" />
                </div>
                <div className='d-flex p-2'>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Roll Number</label>
                    <input type="number" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Access Code</label>
                    <input type="number" className="form-control" id="exampleInputPassword1" />
                </div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>}
        </>
    )
}

export default Navbar