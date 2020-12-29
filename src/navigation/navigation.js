import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Icon } from 'react-native-elements'
import Home from '../screens/home';
import Signin from '../screens/signin';
import Signup from '../screens/signup';
import Settings from '../screens/settings';
import Messages from '../screens/messages';
import Profile from '../screens/profile';
import Feedback from '../screens/feedback';
import AboutUs from '../screens/aboutUs';

const MainStack = createStackNavigator()
const AuthStack = createStackNavigator()
const AppStack = createStackNavigator()
const MainBottomTab = createBottomTabNavigator()
const MainDrawer = createDrawerNavigator();



const AuthStackScreens = () => {
    return (
        <AuthStack.Navigator
            screenOptions={{
                // headerShown:true
            }}
        >
            <AuthStack.Screen name="signin" component={Signin}
                options={{
                    title: "SIGN IN"
                }}
            />
            <AuthStack.Screen name="signup" component={Signup}
                options={{
                    title: "SIGN UP"
                }}
            />
        </AuthStack.Navigator>
    )
}

const MainBottomTabScreens = () => {
    return (
        <MainBottomTab.Navigator>
            <MainBottomTab.Screen name="home" component={Home}
                options={{
                    tabBarIcon: ({ color, focused, size }) => <Icon name="home" type="antdesign" color={color} />
                }}
            />
            <MainBottomTab.Screen name="messages" component={Messages}
                options={{
                    tabBarIcon: ({ color, focused, size }) => <Icon name="message1" type="antdesign" color={color} />
                }}
            />
            <MainBottomTab.Screen name="settings" component={Settings}
                options={{
                    tabBarIcon: ({ color, focused, size }) => <Icon name="setting" type="antdesign" color={color} />
                }}
            />
            <MainBottomTab.Screen name="profile" component={Profile}
                options={{
                    tabBarIcon: ({ color, focused, size }) => <Icon name="user" type="antdesign" color={color} />
                }}
            />
        </MainBottomTab.Navigator>
    )
}
const MainDrawerScreens = () => {
    return (
        <MainDrawer.Navigator >
            <MainDrawer.Screen name="mainTab" component={MainBottomTabScreens}
                options={{
                    drawerIcon: ({ color }) => <Icon name="grid" type="entypo" color={color} />
                }}
            />
            <MainDrawer.Screen name="feedback" component={Feedback}
                options={{
                    drawerIcon: ({ color }) => <Icon name="feedback" type="material" color={color} />
                }}
            />
            <MainDrawer.Screen name="aboutus" component={AboutUs}
                options={{
                    drawerIcon: ({ color }) => <Icon name="info" type="material" color={color} />
                }}
            />
        </MainDrawer.Navigator>
    )
}
const AppStackScreens = () => {
    return (
        <AppStack.Navigator>
            <AppStack.Screen name="mainDrawer" component={MainDrawerScreens}
                options={({ navigation, route }) => ({
                    headerShown:false,
                    headerLeft: () => <Icon
                        onPress={() => navigation.openDrawer()}
                        name="menuunfold" type="antdesign" color={'gray'} iconStyle={{ marginLeft: 25 }} />

                })}
            />
        </AppStack.Navigator>
    )
}
const Navigation = () => {
    return (
        <NavigationContainer>
            <MainStack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName="auth"
            >
                <MainStack.Screen name="auth" component={AuthStackScreens} />
                <MainStack.Screen name="app" component={AppStackScreens} />
            </MainStack.Navigator>

            {/* <MainBottomTab.Navigator>
            <MainBottomTab.Screen name="home" component={Home}
                options={{
                    tabBarIcon: ({ color, focused, size }) => <Icon name="home" type="antdesign" color={color} />
                }}
            />
            <MainBottomTab.Screen name="messages" component={Messages}
                options={{
                    tabBarIcon: ({ color, focused, size }) => <Icon name="message1" type="antdesign" color={color} />
                }}
            />
            <MainBottomTab.Screen name="settings" component={Settings}
                options={{
                    tabBarIcon: ({ color, focused, size }) => <Icon name="setting" type="antdesign" color={color} />
                }}
            />
            <MainBottomTab.Screen name="profile" component={Profile}
                options={{
                    tabBarIcon: ({ color, focused, size }) => <Icon name="user" type="antdesign" color={color} />
                }}
            />
        </MainBottomTab.Navigator> */}


            {/* <MainDrawer.Navigator >

                <MainDrawer.Screen name="feedback" component={Feedback}
                    options={{
                        drawerIcon: ({ color }) => <Icon name="feedback" type="material" color={color} />
                    }}
                />
                <MainDrawer.Screen name="aboutus" component={AboutUs}
                    options={{
                        drawerIcon: ({ color }) => <Icon name="info" type="material" color={color} />
                    }}
                />
            </MainDrawer.Navigator> */}

        </NavigationContainer>
    );
}

export default Navigation