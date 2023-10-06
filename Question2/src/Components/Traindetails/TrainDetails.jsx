import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
function TrainDetails() {

    const [showDetails , setDetails] = useState(false);

  return (
    <>
     <Navbar />
     <form className='m-3 border p-4 primary rounded'>
                <h2 className="heading b">From
                </h2>
                <div className="mb-3">
                    <input type="date" className="form-control" id="exampleInputText1" aria-describedby="textHelp" />
                </div>
                <h2 className="heading b">To
                </h2>
                <div className="mb-3">
                    <input type="date" className="form-control" id="exampleInputText1" aria-describedby="textHelp" />
                </div>
                <div className="mb-3 border d-flex justify-content-evenly p-3 rounded">
                    <div className="cont border border-1 d-flex flex-column border-primary align-items-center rounded p-2" style={{width : "100px"}}>
                        <span>7</span>
                        <span>Oct</span>
                    </div>
                    <div className="cont d-flex flex-column  align-items-center rounded p-2" style={{width : "100px", border: "solid 1px #808080"}}>
                        <span>8</span>
                        <span>Oct</span>
                    </div>
                    <div className="cont d-flex flex-column  align-items-center rounded p-2" style={{width : "100px", border: "solid 1px #808080"}}>
                        <span>9</span>
                        <span>Oct</span>
                    </div>
                    <div className="cont d-flex flex-column  align-items-center rounded p-2" style={{width : "100px", border: "solid 1px #808080"}}>
                        <span>10</span>
                        <span>Oct</span>
                    </div>
                    <div className="cont d-flex flex-column  align-items-center rounded p-2" style={{width : "100px", border: "solid 1px #808080"}}>
                        <span>11</span>
                        <span>Oct</span>
                    </div>
                    <div className="cont d-flex flex-column  align-items-center rounded p-2" style={{width : "100px", border: "solid 1px #808080"}}>
                        <span>12</span>
                        <span>Oct</span>
                    </div>
                </div>
                <button className="btn btn-primary" onClick={(e)=>{setDetails(true); e.preventDefault();}}>Search Trains</button>
            </form>
        {showDetails && <div className="train-details border p-3 mb-5">
            <div className='container mb-3 border border-1 rounded p-4'>
                <h4>NetaJI express</h4>
                <h6>PNR : 12774</h6>
                <div className="d-flex mb-3">
                    <div className="container">
                        <h6>Departure Time</h6>
                        <div className="d-flex">
                        <div className='me-4'>04:30PM(7-oct)</div> to <div className='ms-4'>7:10AM(8-oct)</div>
                        </div>
                    </div>
                </div>

                <div className='mb-3 border border-end p-2 rounded'>
                    <h6>Seat Availablity</h6>
                    <h6>Sleeper - 30</h6>
                    <h6>AC - 10</h6>
                </div>
                <div>
                    <h6>Price</h6>
                    <h6>Sleeper - ₹350</h6>
                    <h6>AC - ₹1000</h6>
                </div>
                <div>
                    <h6>Delay by - 15mins</h6>
                </div>
            </div>
            <div className='container mb-3 border border-1 rounded p-4'>
                <h4>Delhi express</h4>
                <h6>PNR : 12774</h6>
                <div className="d-flex mb-3">
                    <div className="container">
                        <h6>Departure Time</h6>
                        <div className="d-flex">
                        <div className='me-4'>04:30PM(7-oct)</div> to <div className='ms-4'>7:10AM(8-oct)</div>
                        </div>
                    </div>
                </div>

                <div className='mb-3 border border-end p-2 rounded'>
                    <h6>Seat Availablity</h6>
                    <h6>Sleeper - 30</h6>
                    <h6>AC - 10</h6>
                </div>
                <div>
                    <h6>Price</h6>
                    <h6>Sleeper - ₹350</h6>
                    <h6>AC - ₹1000</h6>
                </div>
                <div>
                    <h6>Delay by - 15mins</h6>
                </div>
            </div>
            <div className='container mb-3 border border-1 rounded p-4'>
                <h4>Rajdhani Express</h4>
                <h6>PNR : 12774</h6>
                <div className="d-flex mb-3">
                    <div className="container">
                        <h6>Departure Time</h6>
                        <div className="d-flex">
                        <div className='me-4'>04:30PM(7-oct)</div> to <div className='ms-4'>7:10AM(8-oct)</div>
                        </div>
                    </div>
                </div>

                <div className='mb-3 border border-end p-2 rounded'>
                    <h6>Seat Availablity</h6>
                    <h6>Sleeper - 30</h6>
                    <h6>AC - 10</h6>
                </div>
                <div>
                    <h6>Price</h6>
                    <h6>Sleeper - ₹350</h6>
                    <h6>AC - ₹1000</h6>
                </div>
                <div>
                    <h6>Delay by - 15mins</h6>
                </div>
            </div>
            <div className='container mb-3 border border-1 rounded p-4'>
                <h4>Purwa express</h4>
                <h6>PNR : 12774</h6>
                <div className="d-flex mb-3">
                    <div className="container">
                        <h6>Departure Time</h6>
                        <div className="d-flex">
                        <div className='me-4'>04:30PM(7-oct)</div> to <div className='ms-4'>7:10AM(8-oct)</div>
                        </div>
                    </div>
                </div>

                <div className='mb-3 border border-end p-2 rounded'>
                    <h6>Seat Availablity</h6>
                    <h6>Sleeper - 30</h6>
                    <h6>AC - 10</h6>
                </div>
                <div>
                    <h6>Price</h6>
                    <h6>Sleeper - ₹350</h6>
                    <h6>AC - ₹1000</h6>
                </div>
                <div>
                    <h6>Delay by - 15mins</h6>
                </div>
            </div>

        </div>}
    </>
  )
}

export default TrainDetails