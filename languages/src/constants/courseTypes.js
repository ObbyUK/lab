const courseTypes = {
  WEEKLY: 'Weekly',
  INTENSIVE: 'Intensive',
  ONE_TO_ONE: 'One to One',
};

const courseNames = {};
courseNames[courseTypes.WEEKLY] = "Weekly classes";
courseNames[courseTypes.INTENSIVE] = "Intensive courses";
courseNames[courseTypes.ONE_TO_ONE] = "1-to-1 lessons";

export { courseNames };
export default courseTypes;