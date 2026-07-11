import React from 'react'

const DeleteReg = () => {
  return (
   <div>

      <div className="container mt-5">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

            <div className="card shadow p-4">

              <div className="row">

                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label htmlFor="regno" className="form-label">
                    Registration Number :
                  </label>
                  <input type="text" className="form-control" />
                </div>

                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mt-4">
                  <button className="btn btn-success">
                    DELETE
                  </button>
                </div>

              </div>

            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default DeleteReg