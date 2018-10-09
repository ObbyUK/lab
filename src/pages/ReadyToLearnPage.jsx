import React from 'react';
import { connect } from 'react-redux';
import { mergeAll } from 'ramda';
import 'normalize-css';

// Components
import BlankCard from './../components/BlankCard.jsx';
import ImageBanner from '../components/ImageBanner.jsx';
import Menu from '../components/Menu.jsx';

import { viewAction } from '../appActions';
import './ready-to-learn-page.less';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch, state) => ({
  viewPage: () => dispatch(viewAction())
});

const mergeProps = (stateProps, dispatchProps) => mergeAll([
  stateProps,
  dispatchProps,
  {
    
  }
]);

class HomePageContainer extends React.Component {

  componentDidMount() {
    console.log('wut');
    this.props.viewPage();
  }

  render () {
    return (
      <div className="ready-to-learn-page">
        <Menu/>
        <ImageBanner
          blurt="¡Increíble!"
          title="Ready to Learn Spanish"
          descirption="Tell us a bit more about what you're looking for"
          src="https://obby.co.uk/images/home_passion.png"
        />
        <BlankCard>
          Who you
        </BlankCard>
      </div>
    );
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(HomePageContainer);