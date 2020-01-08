import React, { Component } from 'react'
import { connect } from 'react-redux';
import MobileMenuComponent from '../components/MobileMenu';

class MobileMenuContainer extends Component {
  render = () => {
    return (
      <MobileMenuComponent menuData = {this.props.megaMenuData} />
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
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MobileMenuContainer)