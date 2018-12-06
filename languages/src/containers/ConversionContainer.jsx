import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { evolve, map, __, pipe, prop, mergeAll, contains } from 'ramda';

import './conversion-container.less';
// Actions & Style
import { 
  chooseDateAction,
  viewChooseDatePageAction,
  openEmailPopupAction
} from '../appActions';
import { courseTypeFlows } from './../constants/flows';
import isFullArray from './../lib/isFullArray';
// Components
import BlankCard from './../components/BlankCard.jsx';
import ClassSelectableTimesCard from '../components/ClassSelectableTimesCard.jsx';
import CenterIconBanner from './../components/CenterIconBanner.jsx';
import ImageBulletPoints from '../components/ImageBulletPoints.jsx';
import FocusBanner from '../components/FocusBanner.jsx';
import courseTypes from '../constants/courseTypes';

const mapStateToProps = (state) => ({
  selectedLanguage: state.app.selectedLanguage,
  selectedTimes: state.app.time,
  locations: state.app.locations,
  courseType: state.app.courseType,
  pageFlow: courseTypeFlows[state.app.courseType].conversionPage
});

const mapDispatchToProps = (dispatch) => ({
  chooseDate: (date) => dispatch(chooseDateAction(date)),
  viewChooseDatePage: () => dispatch(viewChooseDatePageAction()),
  openEmailPopup: (text) => dispatch(openEmailPopupAction(text)),
});

const mergeProps = (stateProps, dispatchProps) => mergeAll([
  stateProps,
  dispatchProps,
  {
    openEmailPopup: () => {
      dispatchProps.openEmailPopup({
        title: "Tell us what you want",
        description: `We are constantly adding new classes and locations so if you would like to make a request, just add your details and we will get in touch`,
        submittedTitle: "Thank you",
        submittedDescription: `We will be in touch shortly!`,
        emailText: `None of the dates for ${stateProps.selectedLanguage} in ${stateProps.locations} work.`
      });
    }
  }
]);

class FormContainer extends React.Component {

  componentDidMount() {
    this.props.viewChooseDatePage();
  }

  filterLocations(locations) {
    return locations
      .filter((location) => contains(location.name, this.props.locations));
  }

  filterLocationDates(dates) {
    if (isFullArray(this.props.times)) {
      return dates
        .filter(pipe(
          prop('type'), 
          contains(__, this.props.selectedTimes)
        ))
        .map(this.Location__LocationWithDateButtonProps.bind(this))
    }
    return dates
      .map(this.Location__LocationWithDateButtonProps.bind(this))
  }

  Location__LocationWithDateButtonProps(location) {

    if (this.props.courseType === courseTypes.WEEKLY) {
      return evolve(
        { options: map(this.LocationDate__WeeklyDateButtonProps) },
        location
      );
    }

    if (this.props.courseType === courseTypes.INTENSIVE) {
      return evolve(
        { options: map(this.LocationDate__IntensiveDateButtonProps) },
        location
      );
    }
  }

  LocationDate__WeeklyDateButtonProps(date) {
    return {
      soldOut: date.soldOut,
      text: `${moment(date.starts, 'DD/MM/YYYY').format('dddd')}s`,
      note: `From ${moment(date.starts, 'DD/MM/YYYY').format('Do MMM-YY')}`,
      date,
    };
  }

  LocationDate__IntensiveDateButtonProps(date) {
    return {
      soldOut: date.soldOut,
      text: moment(date.starts, 'DD/MM/YYYY').format('Do MMM'),
      note: `From ${moment(date.starts, 'DD/MM/YYYY').format('Do MMM')}-${moment(date.ends, 'DD/MM/YYYY').format('Do')}`,
      date,
    };
  }

  render () {
    return (
      <div className="conversion-container__body container">

        {/* WEEKLY CLASSES */}
        <div className="conversion-container__card">
          <BlankCard className="conversion-container__card-overide conversion-container__card-overide--flat">
            <h2 className="conversion-container__card-title conversion-container__card-title--flat-card">
              Here's how it works
            </h2>
            <div className="conversion-container__card-section conversion-container__card-section--weekly-classes">
              <ImageBulletPoints 
                hideMobileText={true}
                points={this.props.pageFlow.points}
              />
            </div>
            <CenterIconBanner
              image="/icons/tick.svg"
              title="100% Moneyback guarantee!"
              description="We promise all of our learners a great experience. If you’re unhappy after your first class, we’ll refund you in full."
            />
            <FocusBanner
              priceText={this.props.pageFlow.focusBanner.priceText}
              buttonText={this.props.pageFlow.focusBanner.buttonText}
            />
          </BlankCard>
        </div>

        {/* DATES */}
        <div className="conversion-container__card">
          <BlankCard className="conversion-container__card-overide">
            <div className="conversion-container__card-section conversion-container__card-section--dates">
              <h2 className="conversion-container__card-title">
                Here's what we have for you
              </h2>
            </div>
            {this.filterLocations(this.props.pageFlow.classes).map((location, index) => (
              <div key={index} className="conversion-container__card-section conversion-container__card-section--dates">
                <ClassSelectableTimesCard 
                  title={location.name}
                  address={location.address}
                  priceLabel={this.props.pageFlow.classesPriceLabel}
                  price={this.props.pageFlow.classesPrice}
                  dates={this.filterLocationDates(location.dates)}
                  onClick={(session) => {
                    this.props.chooseDate({ 
                      region: location.value,
                      address: location.address,
                      date: session.starts,
                      startTime: session.lessonsStart,
                      endTime: session.lessonsEnd
                    });
                  }}
                />
              </div>
            ))}
            <div className="conversion-container__card-note">
              None of these dates or locations work for you? <span onClick={this.props.openEmailPopup.bind(this)} className="conversion-container__card-link">Let us know</span>
            </div>
          </BlankCard>
        </div>

      </div>
    );
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(FormContainer);