import { AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import NewTodoScreen from '../screens/NewTodoScreen';
import { colors } from '../style/colorsheet/colors';
import ProfileScreen from './../screens/ProfileScreen';

const MainTabNavigator = () => {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarLabelStyle: { fontSize: 14, color: 'white' },
                tabBarStyle: { backgroundColor: colors.main },
                headerShown: false,
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: () => <AntDesign name="home" size={24} color={colors.light} />
                }}
            />
            <Tab.Screen
                name="NewTodo"
                component={NewTodoScreen}
                options={{
                    tabBarIcon: () => <AntDesign name="form" size={24} color={colors.light} />
                }}
            />
            
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarIcon: () => <AntDesign name="profile" size={24} color={colors.light} />
                }}
            />
        </Tab.Navigator>
    )
}

export default MainTabNavigator