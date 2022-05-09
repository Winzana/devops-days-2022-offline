import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import { useNavigate } from 'react-router-dom';

const HomeRoute = () => <Text>Home</Text>;

const AddRoute = () => <Text>Add</Text>;

const MyComponent = () => {
  const navigate = useNavigate();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', icon: 'home' },
    { key: 'add', title: 'Add', icon: 'plus' },
  ]);

  const changeRoute = (routeIdx) => {
    setIndex(routeIdx);
    if (routeIdx == 0) {
      navigate(`/`);
    } else {
      navigate(`/${routes[routeIdx].key}`);
    }
  };

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    add: AddRoute,
  });

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return (<BottomNavigation navigationState={{ index, routes }} onIndexChange={changeRoute} renderScene={renderScene} style={{ position: 'fixed', bottom: 0, left: 0, width: '100%' }} />
  );
};

export default MyComponent;
