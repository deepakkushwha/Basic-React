import React, { useState } from 'react';
import Stepper from '../Common/Stepper';

export default function Upload() {
    const [date, setDate] = useState('');
    const [selectionRange, setSelectionRange] = useState('');
    const [number, setNumber] = useState('');
    const [name, setName] = useState('');

    return (
        <div>
            <div className="container">
                <Stepper />
                <div className="row">
                    <div className='location mt-3'>
                        <div className="col-7">
                            <form>
                                <div className='inner-location'>
                                    <h3>Help Us With Additional Details</h3>
                                    <p>Please enter your detail & Continue</p>
                                </div>
                                <h4 className='mt-4'>Upload Photo</h4>
                                <div className="first-box mt-4">
                                    <div className="drop-photo">Drop your photo here</div>
                                    <div className="drop-photo">Drop your photo here</div>
                                    <div className="drop-photo">Drop your photo here</div>
                                </div>

                                <hr />

                                <div className="row mt-4">
                                    <div className="second-box">
                                        <div className="col-5">
                                            <input name={date} value={date} onChange={(e) => setDate(e?.target?.value)} type="date" class="form-control" placeholder='Policy Start Date' id="exampleInputEmail1" aria-describedby="emailHelp" />

                                        </div>
                                        <div className="col-5">
                                            <input name={selectionRange} value={selectionRange} onChange={(e) => setSelectionRange(e?.target?.value)} type="option" class="form-control" placeholder='Select Branch Office' id="exampleInputEmail1" aria-describedby="emailHelp" />


                                        </div>
                                        <div className="col-5 mt-3">
                                            <input name={number} value={number} onChange={(e) => setNumber(e?.target?.value)} type="number" class="form-control" placeholder='GST Number(Optional)' id="exampleInputEmail1" aria-describedby="emailHelp" />

                                        </div>
                                    </div>
                                </div>

                                <hr />
                                <h4 className='mt-4'>Nominee Details</h4>

                                <div className="row mt-4">
                                    <div className="second-box">

                                        <div className="col-5">
                                            <input name={name} value={name} onChange={(e) => setName(e?.target?.value)} type="text" class="form-control" placeholder='Nominee Name' id="exampleInputEmail1" aria-describedby="emailHelp" />

                                        </div>
                                        <div className="col-5">
                                            <input name={name} value={name} onChange={(e) => setSelectionRange(e?.target?.value)} type="text" class="form-control" placeholder='Relationship' id="exampleInputEmail1" aria-describedby="emailHelp" />


                                        </div>
                                        <div className="col-5 mt-3">
                                            <input name={date} value={date} onChange={(e) => setDate(e?.target?.value)} type="date" class="form-control" placeholder='NomineesDOB' id="exampleInputEmail1" aria-describedby="emailHelp" />

                                        </div>
                                    </div>
                                </div>



                            </form>
                        </div>
                        <div className="col-5"></div>

                    </div>


                </div>
            </div>
        </div>
    )
}
