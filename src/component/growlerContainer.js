import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Growler from './growler.js';
import * as growlerActionCreators from '../actions/growler.action';

// @connect(mapStateToProps, mapDispatchToProps)
class growlerContainer extends Component {

  getMessage() {
    const lang = this.props.currentLocale || "enUS";
    let message = this.props.growler.text;
    if(this.props.messages && this.props.messages[lang]){
      return this.props.messages[lang][message] || message;
    }
    return message;
  }

  render() {
    const message = this.getMessage();
    this.props.hideTimeOutGrowler(this.props.growler, this.props.shownFor);
    return <Growler {...this.props} message={message} />;
  }
}

const mapStateToProps = state => ({
  growler: state.growler,
});
const mapDispatchToProps = dispatch => bindActionCreators(growlerActionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(growlerContainer);
