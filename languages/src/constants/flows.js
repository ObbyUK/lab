// Constants
import languages from './languages';
import courseTypes from './courseTypes';
import IntensiveClasses from './classes/IntensiveClasses';
import WeeklyClasses from './classes/WeeklyClasses';
// Flows
import spanishFlow from './flows/spanish';
import frenchFlow from './flows/french';
import italianFlow from './flows/italian';
import germanFlow from './flows/german';


var flows = {};
flows[languages.SPANISH] = spanishFlow;
flows[languages.FRENCH] = frenchFlow;
flows[languages.ITALIAN] = italianFlow;
flows[languages.GERMAN] = germanFlow;

var courseTypeFlows = {};
courseTypeFlows[courseTypes.WEEKLY] = {
  conversionPage: {
    title: "Weekly classes",
    classes: WeeklyClasses,
    classesPriceLabel: "8 classes",
    classesPrice: "£200",
    points: [
      {
        image: "/icons/calendar-circle.svg",
        title: "Our classes run once per week for 8 weeks all across London",
        text: "",
      },
      {
        image: "/icons/people-circle.svg",
        title: "Get teacher and additional learning support on-the-go via our online community",
        text: "",
      },
      {
        image: "/icons/location-circle.svg",
        title: "All classes are recorded & made available online in case you miss a class or want a recap",
        text: "",
      }
    ],
    focusBanner: {
      priceText: "8 classes = £200",
    }
  },
  checkoutPage: {
    chargeDetails: {
      baseChargePrice: 20000,
      chargePrice: 20000,
      title: '8 classes',
    }
  }
};
courseTypeFlows[courseTypes.INTENSIVE] = {
  conversionPage: {
    title: "Intensive classes",
    classes: IntensiveClasses,
    classesPriceLabel: "2 day intensive",
    classesPrice: "£200",
    points: [
      {
        image: "/icons/calendar-circle.svg",
        title: "Our 2-day intensive courses run for 6 hours per day over two separate days",
        text: "",
      },
      {
        image: "/icons/people-circle.svg",
        title: "Get additional learning support on-the-go via our online community",
        text: "",
      },
      {
        image: "/icons/location-circle.svg",
        title: "All classes are recorded & made available online in case you miss a class or want a recap",
        text: "",
      }
    ],
    focusBanner: {
      priceText: "2-day intensive = £200",
    }
  },
  checkoutPage: {
    chargeDetails: {
      baseChargePrice: 20000,
      chargePrice: 20000,
      title: '2-day intensive',
    },
  }
};

var oneToOneCourses = {
  TEN_HOURS: '10 hours',
  FIVE_HOURS: '5 hours',
  ONE_HOUR: '1 hour',
};
courseTypeFlows[courseTypes.ONE_TO_ONE] = {
  summaryPage: {
    points: [
      {
        image: "/icons/1-circle.svg",
        title: "Book a language class on Obby",
        text: "You can book a trial 1h class, or go straight for 5 or 10 hours. Top up at any time without any price change.",
      },
      {
        image: "/icons/2-circle.svg",
        title: "Get matched with a teacher",
        text: "In the next 24h you’ll get matched with one of our trusted teachers. If you’re unhappy with your teacher we’ll match you with a new one.",
      },
      {
        image: "/icons/3-circle.svg",
        title: "Agree on time, date & location",
        text: "We offer full flexibility. You can choose the time, date and location that makes most sense for you. ",
      }
    ],
    priceBoxes: [
      {
        color: "sun",
        title: "10 hours",
        previousPrice: "£350",
        price: "£300",
        note: "Save £50",
        buttonText: "Select",
        value: oneToOneCourses.TEN_HOURS
      },
      {
        color: "robbins-egg-blue",
        title: "5 hours",
        previousPrice: "£175",
        price: "£150",
        note: "Save £25",
        buttonText: "Select",
        value: oneToOneCourses.FIVE_HOURS
      },
      {
        color: "camelot",
        title: "1 hour",
        price: "£35",
        buttonText: "Select",
        value: oneToOneCourses.ONE_HOUR
      }
    ],
  },
  checkoutPage: {
    chargeOptions: [
      {
        value: oneToOneCourses.TEN_HOURS,
        baseChargePrice: 35000,
        chargePrice: 30000,
        title: "10 x 1-to-1 Classes",
      },
      {
        value: oneToOneCourses.FIVE_HOURS,
        baseChargePrice: 17500,
        chargePrice: 15000,
        title: '5 x 1-to-1 Classes',
      },
      {
        value: oneToOneCourses.ONE_HOUR,
        baseChargePrice: 3500,
        chargePrice: 3500,
        title: '1-to-1 Class',
      }
    ],
  }
};

export default flows;
export { courseTypeFlows };