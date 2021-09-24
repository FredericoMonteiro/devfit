const INITIAL_STATE = {
  name: '',
  level: '',
  workoutDays: [],
  myWorkouts: [],
  lastWorkout: '',
  dailyProgress: ['2019-09-20', '2019-09-19'],
};

export default function UserReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_NAME':
      return {...state, name: action.payload.name};
    default:
      return state;
  }
}
