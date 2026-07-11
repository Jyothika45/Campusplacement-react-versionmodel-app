import React from 'react'

const AddRegistration = () => {
  return (
    <div>

      <div className="container mt-4">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

            <label htmlFor="regno" className="form-label">Registration Number :</label>
            <input type="text" className="form-control mb-3" />

            <div className="row">

              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="fullname" className="form-label">Full Name :</label>
                <input type="text" className="form-control" />
              </div>

              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="aadhar" className="form-label">Aadhar Number :</label>
                <input type="text" className="form-control" />
              </div>

              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-3">
                <label htmlFor="email" className="form-label">Email Address :</label>
                <input type="email" className="form-control" />
              </div>

              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-3">
                <label htmlFor="phone" className="form-label">Phone Number :</label>
                <input type="tel" className="form-control" />
              </div>

              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-3">
                <label htmlFor="branch" className="form-label">Branch/Department :</label>
                <input type="text" className="form-control" />
              </div>

              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-3">
                <label htmlFor="sslc" className="form-label">SSLC Mark (%) :</label>
                <input type="number" className="form-control" />
              </div>

              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-3">
                <label htmlFor="plustwo" className="form-label">Plus Two Mark (%) :</label>
                <input type="number" className="form-control" />
              </div>

              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-3">
                <label htmlFor="ugdegree" className="form-label">UG Degree Name :</label>
                <select className="form-select">
                  <option>Select UG Degree</option>
                  <option>BCA</option>
                  <option>B.Sc</option>
                  <option>B.Com</option>
                  <option>BA</option>
                  <option>BBA</option>
                  <option>B.Tech</option>
                  <option>BE</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-3">
                <label htmlFor="ugmark" className="form-label">UG Mark (%) :</label>
                <input type="number" className="form-control" />
              </div>

              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-3">
                <label htmlFor="pgdegree" className="form-label">PG Degree Name :</label>
                <select className="form-select">
                  <option>Select PG Degree</option>
                  <option>MCA</option>
                  <option>M.Sc</option>
                  <option>M.Com</option>
                  <option>MA</option>
                  <option>MBA</option>
                  <option>M.Tech</option>
                  <option>ME</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-3">
                <label htmlFor="pgmark" className="form-label">PG Mark (%) :</label>
                <input type="number" className="form-control" />
              </div>

              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mt-4">
                <button className="btn btn-success">SUBMIT</button>
              </div>

            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default AddRegistration