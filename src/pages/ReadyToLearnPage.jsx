import React from 'react';
import { connect } from 'react-redux';
import { mergeAll } from 'ramda';

// Actions & Style
import { viewAction } from '../appActions';
import './ready-to-learn-page.less';
// Components
import BlankCard from './../components/BlankCard.jsx';
import ImageBanner from '../components/ImageBanner.jsx';
import Menu from '../components/Menu.jsx';
import TextList from '../components/TextList.jsx';
import ThreePointSalesBanner from '../components/ThreePointSalesBanner.jsx';

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
        
        <ImageBanner
          blurt="¡Increíble!"
          title="Ready to Learn Spanish"
          descirption="Tell us a bit more about what you're looking for"
          src="https://obby.co.uk/images/home_passion.png"
        />
        <TextList
          list={[
            { title: 'Pronouncinations & Grammar', text: "You'll learn how the spanish alphabet is all something something"},
            { title: 'Pronouncinations & Grammar', text: "You'll learn how the spanish alphabet is all something something"},
            { title: 'Pronouncinations & Grammar', text: "You'll learn how the spanish alphabet is all something something"}
          ]}
        />
        <BlankCard>
          <TextList
            isNumbered={true}
            list={[
              { title: 'Pronouncinations & Grammar', text: "You'll learn how the spanish alphabet is all something something"},
              { title: 'Pronouncinations & Grammar', text: "You'll learn how the spanish alphabet is all something something"},
              { title: 'Pronouncinations & Grammar', text: "You'll learn how the spanish alphabet is all something something"}
            ]}
          />
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