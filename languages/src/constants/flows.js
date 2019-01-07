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
    baseChargePrice: 20000,
    chargePrice: 20000,
    priceSum: {
      calculation: '8 classes',
      previousTotal: '£200',
      total: '£200',
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
    baseChargePrice: 34400,
    chargePrice: 20000,
    priceSum: {
      calculation: '2-day intensive',
      previousTotal: '£200',
      total: '£200',
    }
  }
};
courseTypeFlows[courseTypes.ONE_TO_ONE] = {
  summaryPage: {
    points: [
      {
        image: "/icons/calendar-circle.svg",
        title: "Book a language class on Obby",
        text: "You can book a trial 1h class, or go straight for 5 or 10 hours. Top up at any time without any price change.",
      },
      {
        image: "/icons/people-circle.svg",
        title: "Get matched with a teacher",
        text: "In the next 24h you’ll get matched with one of our trusted teachers. If you’re unhappy with your teacher we’ll match you with a new one.",
      },
      {
        image: "/icons/location-circle.svg",
        title: "Agree on time, date & location",
        text: "We offer full flexibility. You can choose the time, date and location that makes most sense for you. ",
      }
    ],
  },
  checkoutPage: {
    baseChargePrice: 34400,
    chargePrice: 20000,
    priceSum: {
      calculation: '2-day intensive',
      previousTotal: '£200',
      total: '£200',
    }
  }
};

export default flows;
export { courseTypeFlows };