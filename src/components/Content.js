import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

class Content extends Component {

  nextPage(e) {
    e.preventDefault();
    // console.log("object")
    window.location.href = "/page2"
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md">
            <Navbar />
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-3 bg-dark">
              <Sidebar />
            </div>
            <div className="col-md-9 my-5 text-center">

              <form>
                <div className="form-group row">
                  <label htmlFor="customerName" className="col-sm-6 col-form-label">Cutomer Name</label>
                  <div className="col-sm-6">
                    <input type="text" className="form-control" id="customerName" placeholder="enter name" />
                  </div>
                </div>

                <div className="form-group row">
                  <label htmlFor="gender" className="col-sm-6 col-form-label">Gender</label>
                  <div className="col-sm-6">
                    <select className="form-control" id="gender">
                      <option>select...</option>
                      <option defaultValue="male">Male</option>
                      <option defaultValue="female">Female</option>
                    </select>
                  </div>
                </div>

                <div className="form-group row">
                  <label htmlFor="branch" className="col-sm-6 col-form-label">Branch</label>
                  <div className="col-sm-6">
                    <form className="d-flex flex-row">
                      <input type="search" className="form-control mr-4" id="branch" placeholder="enter branch" aria-label="Search" />
                      <button className="btn my-0 fa fa-search bg-primary text-dark" type="button"></button>
                    </form>
                  </div>
                </div>

                <div className="form-group row">
                  <label htmlFor="dob" className="col-sm-6 col-form-label">DOB</label>
                  <div className="col-sm-6">
                    <input type="date" className="form-control" id="dob" />
                  </div>
                </div>

                <div className="form-group row">
                  <label htmlFor="commects" className="col-sm-6 col-form-label">Comments</label>
                  <div className="col-sm-6">
                    <textarea type="text" className="form-control" id="comments" placeholder="enter comments" />
                  </div>
                </div>

                <div className="form-group row">
                  <label htmlFor="someField" className="col-sm-6 col-form-label">Some field</label>
                  <div className="col-sm-6">
                    <select className="form-control" id="someField">
                      <option>select...</option>
                      <option defaultValue="1">1</option>
                      <option defaultValue="2">2</option>
                      <option defaultValue="3">3</option>
                    </select>
                  </div>
                </div>

                <fieldset className="form-group">
                  <div className="row">
                    <legend className="col-form-label col-sm-6">Select</legend>
                    <div className="col-sm-6 text-left" id="select">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="gridRadios" id="gridCheckbox1" value="option1" />
                        <label className="form-check-label" htmlFor="gridCheckbox1">
                          Mobile Banking</label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="gridRadios" id="gridCheckbox2" value="option2" />
                        <label className="form-check-label" htmlFor="gridCheckbox2">
                          Internet Banking</label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="gridRadios" id="gridCheckbox3" value="option3" />
                        <label className="form-check-label" htmlFor="gridCheckbox3">
                          Passbook</label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="gridRadios" id="gridCheckbox4" value="option4" />
                        <label className="form-check-label" htmlFor="gridCheckbox4">
                          Checkbox 4</label>
                      </div>
                    </div>
                  </div>
                </fieldset>
                <div className="form-group">
                  <div className="d-flex justify-content-end">
                    <button type="button" className="btn btn-primary btn-lg" id="next-btn" onClick={this.nextPage.bind(this)}>Next</button>
                  </div>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Content
