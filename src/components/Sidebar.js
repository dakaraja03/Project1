import React, { Component } from 'react'

class Sidebar extends Component {
  render() {
    return (
      <div>
        <div id="MainMenu">
          <div className="list-group list-group-flush" id="sidebar">

            <a href="#demo1" className="list-group-item list-group-item-action text-white bg-dark" id="item1" data-toggle="collapse" data-parent="#MainMenu">Item 1 <i className="fa fa-caret-down"></i></a>
            <div className="collapse" id="demo1">
              <a href="#SubMenu1-1" className="list-group-item pl-4" data-toggle="collapse" id="sub-item1" data-parent="#SubMenu1-1">Subitem 1 <i className="fa fa-caret-down"></i></a>
              <div className="collapse list-group-submenu" id="SubMenu1-1">
                <a href="#" className="list-group-item pl-5" data-parent="#SubMenu1-1">Subitem 1 a</a>
                <a href="#" className="list-group-item pl-5" data-parent="#SubMenu1-1">Subitem 2 b</a>
                <a href="#SubSubMenu1-1" className="list-group-item pl-5" data-toggle="collapse" id="sub-sub-item1" data-parent="#SubSubMenu1-1">Subitem 3 c <i className="fa fa-caret-down"></i></a>
                <div className="collapse list-group-submenu list-group-submenu-1" id="SubSubMenu1-1">
                  <a href="#" className="list-group-item pl-5" data-parent="#SubSubMenu1-1">Sub sub item 1</a>
                  <a href="#" className="list-group-item pl-5" data-parent="#SubSubMenu1-1">Sub sub item 2</a>
                </div>
                <a href="#" className="list-group-item pl-5" data-parent="#SubMenu1-1">Subitem 4 d</a>
              </div>
              <a href="#" className="list-group-item pl-4">Subitem 2</a>
              <a href="#" className="list-group-item pl-4">Subitem 3</a>
            </div>

            <a href="#" className="list-group-item list-group-item-action text-white bg-dark" id="item2" data-parent="#MainMenu">Item 2</a>

            <a href="#demo3" className="list-group-item list-group-item-action text-white bg-dark" id="item3" data-toggle="collapse" data-parent="#MainMenu">Item 3 <i className="fa fa-caret-down"></i></a>
            <div className="collapse" id="demo3">
              <a href="#SubMenu3-1" className="list-group-item pl-4" data-toggle="collapse" data-parent="#SubMenu3-1">Subitem 1 <i className="fa fa-caret-down"></i></a>
              <div className="collapse list-group-submenu" id="SubMenu3-1">
                <a href="#" className="list-group-item pl-5" data-parent="#SubMenu3-1">Subitem 1 a</a>
                <a href="#" className="list-group-item pl-5" data-parent="#SubMenu3-1">Subitem 2 b</a>
                <a href="#SubSubMenu3-1" className="list-group-item pl-5" data-toggle="collapse" data-parent="#SubSubMenu3-1">Subitem 3 c <i className="fa fa-caret-down"></i></a>
                <div className="collapse list-group-submenu list-group-submenu-1" id="SubSubMenu3-1">
                  <a href="#" className="list-group-item pl-5" data-parent="#SubSubMenu3-1">Sub sub item 1</a>
                  <a href="#" className="list-group-item pl-5" data-parent="#SubSubMenu3-1">Sub sub item 2</a>
                </div>
                <a href="#" className="list-group-item pl-5" data-parent="#SubMenu3-1">Subitem 4 d</a>
              </div>
              <a href="#" className="list-group-item pl-4">Subitem 2</a>
              <a href="#" className="list-group-item pl-4">Subitem 3</a>
            </div>

            <a href="#demo4" className="list-group-item list-group-item-action text-white bg-dark" id="item4" data-toggle="collapse" data-parent="#MainMenu">Item 4  <i className="fa fa-caret-down"></i></a>
            <div className="collapse" id="demo4">
              <a href="" className="list-group-item pl-4">Subitem 1</a>
              <a href="" className="list-group-item pl-4">Subitem 2</a>
              <a href="" className="list-group-item pl-4">Subitem 3</a>
            </div>
          </div>
        </div>
      </div >
    )
  }
}

export default Sidebar