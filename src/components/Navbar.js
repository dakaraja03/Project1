import React, { Component } from 'react'

class Navrbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-primary justify-content-between px-5 py-4">
          <a className="navbar-brand" href="#">LOGO</a>
          <form className="form-inline">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1"><i className="fa fa-search" /></span>
              </div>
              <input type="text" className="form-control" placeholder="search" aria-label="Username" aria-describedby="basic-addon1" style={{width: "40vw"}} />
            </div>
          </form>
          {/* <form className="form-inline">
              <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-primary fa fa-search" type="button"></button>
            </form> */}
        </nav >
      </div >
    )
  }
}

export default Navrbar;