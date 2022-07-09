import React from 'react'

const filter = () => {
  return (
    <div className='container_wrapper addSpace'>
        <div className='row'>
            <div className='col-3'>
                <div className='row centerAlign'>
                    <div className='col-4'>
                        <p className='filter_heading'>Date Range:</p>
                    </div>
                    <div className='col-8'>
                   
                    </div>
                </div>
            </div>
            <div className='col-3'>
            <div className='row centerAlign'>
                    <div className='col-4 lowWidth'>
                <p className='filter_heading'>Channel:</p>
                </div>
                    <div className='col-8'>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>All</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
            
                </div>
            
            </div>

        </div>
    </div>
  )
}

export default filter