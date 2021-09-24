import {StackActions, NavigationActions} from 'react-navigation';
import {connect} from 'react-redux';

const Preload = ({name, navigation}) => {
  navigation.dispatch(
    StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({routeName: 'StarterStack'})],
    }),
  );

  return null;
};

const mapStateToProps = state => ({
  name: state.UserReducer.name,
});

export default connect(mapStateToProps)(Preload);
