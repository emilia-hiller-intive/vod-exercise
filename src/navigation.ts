import { createStackNavigator } from "react-navigation";
import LandingScreen from "./screens/LandingScreen";
import { ROUTE_PATHS } from "./consts";
import PlayerScreen from "./screens/PlayerScreen";

export const RootStack = createStackNavigator(
  {
    Landing: {
      screen: LandingScreen,
      navigationOptions: {
        title: ROUTE_PATHS.LANDING,
        header: null,
      },
    },
    Player: {
      screen: PlayerScreen,
      navigationOptions: {
        title: ROUTE_PATHS.PLAYER,
        header: null,
      },
    },
  },
  {
    initialRouteName: ROUTE_PATHS.LANDING,
  }
);
