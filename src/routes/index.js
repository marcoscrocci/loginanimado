import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from '../pages/Welcome';
import SignIn from '../pages/SignIn';

const Stack = createNativeStackNavigator();

export default function Routes() {

    const options = {
        headerShown: false
    }

    return (
        <Stack.Navigator>
            <Stack.Screen name="Welcome" component={Welcome} options={options} />
            <Stack.Screen name="SignIn" component={SignIn} options={options} />
        </Stack.Navigator>
    );
}
