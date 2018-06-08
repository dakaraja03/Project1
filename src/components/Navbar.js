import React, { Component } from 'react'

class Navrbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-primary justify-content-between px-5 py-4">
          <a className="navbar-brand" id="logo" href="/">LOGO</a>
          <form className="form-inline">
            <div className="input-group" id="search-navbar">
              <div className="input-group-prepend">
                <span className="input-group-text bg-white" id="basic-addon1"><i className="fa fa-search" /></span>
              </div>
              <input type="text" className="form-control" id="search-bar" placeholder="search..." aria-label="Username" aria-describedby="basic-addon1" style={{ width: "39vw" }} />
            </div>
          </form>
        </nav >
      </div >
    )
  }
}

export default Navrbar;