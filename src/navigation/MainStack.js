import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

// Pages
import Preload from '../pages/Preload';
import StarterStack from './StarterStack';
// import AppStack from './AppStack';

const MainStack = createStackNavigator(
  {
    Preload,
    StarterStack,
    // AppStack,
  },
  {
    initialRouteName: 'Preload',
    defaultNavigationOptions: {
      header: null,
    },
  },
);

export default createAppContainer(MainStack);
