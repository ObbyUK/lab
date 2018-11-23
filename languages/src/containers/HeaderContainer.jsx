import React from 'react';
import { connect } from 'react-redux';
import mergeAll from 'ramda/src/mergeAll';

import './header-container.less';
// Components
import ImageBanner from '../components/ImageBanner.jsx';

const mapStateToProps = (state) => ({
  header: state.app.flow.headers[state.app.status]||{}
});

const mapDispatchToProps = (dispatch) => ({});

const mergeProps = (stateProps, dispatchProps) => mergeAll([
  stateProps,
  dispatchProps,
  {}
]);

class HeaderContainer extends React.Component {

  render () {
    return (
      <div className="header-container">
        <ImageBanner
          blurt={this.props.header.blurt}
          title={this.props.header.title}
          description={this.props.header.description}
          src={this.props.header.src}
        />
      </div>
    );
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(HeaderContainer);