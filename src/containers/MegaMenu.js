import React, { Component } from 'react'
import { connect } from 'react-redux';
import MegaMenuComponent from '../components/MegaMenu';
import { fetchMegaMenuData_Request } from '../actions/mega_menu';

class MegaMenuContainer extends Component {

  componentDidMount = () => {
    this.props.requestMenuData();
  }

  render = () => {
    return(
      <MegaMenuComponent menuData = {this.props.megaMenuData}/>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    megaMenuData: state.mega_menu.data
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    requestMenuData: () => dispatch(fetchMegaMenuData_Request()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MegaMenuContainer)