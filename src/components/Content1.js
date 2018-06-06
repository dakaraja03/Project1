import React, { Component } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

class Content extends Component {
  constructor() {
    super();
    this.state = {
      reloadPage: true
    }
  }
  componentWillMount() {
    if(this.state.reloadPage) {
      console.log("object")
      // window.location.reload();
      this.setState({reloadPage: false})
    }
  }

  selectAllCheckboxes() {
    var checkboxes = document.getElementsByClassName('foo');
    if (document.getElementById('selectAll').checked) {
      for (var i = 0, n = checkboxes.length; i < n; i++) {
        checkboxes[i].checked = true;
      }
    } else {
      for (var i = 0, n = checkboxes.length; i < n; i++) {
        checkboxes[i].checked = false;
      }
    }
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md">
            <Navbar />
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 h-100">
            <Sidebar />
          </div>
          <div className="col-md-9 my-5 text-center">

            <form>
              <div className="form-group row">
                <label htmlFor="customerName" className="col-sm-4 col-form-label">Premium member</label>
                <div className="col-sm-8">
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check box</label>
                  </div>
                </div>
              </div>

              <fieldset className="form-group">
                <div className="row">
                  <legend className="col-form-label col-sm-4 pt-0">Debit card type</legend>
                  <div className="col-sm-8" id="debitcardType">
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" />
                      <label className="form-check-label" htmlFor="gridRadios1">
                        Radio 1</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                      <label className="form-check-label" htmlFor="gridRadios2">
                        Radio 2</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" />
                      <label className="form-check-label" htmlFor="gridRadios3">
                        Radio 3</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios4" value="option4" />
                      <label className="form-check-label" htmlFor="gridRadios4">
                        Radio 4</label>
                    </div>
                  </div>
                </div>
              </fieldset>

              <div className="form-group">
                <div className="card text-center" style={{ height: "200px" }}>
                  <div className="card-header">
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                      <li className="nav-item">
                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Tab 1</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Tab 2</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Tab 3</a>
                      </li>
                    </ul>
                  </div>
                  <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                      <div className="card-body" id="tab1">
                        <div className="form-group row">
                          <label htmlFor="label1" className="col-sm-4 col-form-label">Label 1</label>
                          <div className="col-sm-5">
                            <input type="email" className="form-control" id="label1" />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label htmlFor="label2" className="col-sm-4 col-form-label">Label 2</label>
                          <div className="col-sm-5">
                            <input type="email" className="form-control" id="label2" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">tab 2</div>
                    <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">tab 3</div>
                  </div>
                </div>
              </div>

              <div className="form-group d-flex">
                <div className="p-2">
                  <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">Show popup</button>

                  <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" >
                    <div className="modal-dialog modal-dialog-centered" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLongTitle">Popup</h5>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <table className="table table-bordered table-hover">
                            <thead>
                              <tr>
                                <th scope="col"><input type="checkbox" id="selectAll" onClick={this.selectAllCheckboxes.bind(this)} /></th>
                                <th scope="col">Branch Name</th>
                                <th scope="col">Branch Code</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th scope="row"><input type="checkbox" className="foo" value="checkbox1" /></th>
                                <td>BSK 3rd Stage</td>
                                <td>1001</td>
                              </tr>
                              <tr>
                                <th scope="row"><input type="checkbox" className="foo" value="checkbox2" /></th>
                                <td>Indira nagar</td>
                                <td>1103</td>
                              </tr>
                              <tr>
                                <th scope="row"><input type="checkbox" className="foo" value="checkbox3" /></th>
                                <td>kodihalli</td>
                                <td>1345</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-primary d-flex justify-content-end">Save & close</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="ml-auto p-2">
                  <button type="submit" className="btn btn-primary btn-lg">Save</button>
                </div>
              </div>
            </form>

          </div>
        </div>
      </div>
    )
  }
}

export default Content
