import { View, Text } from 'react-native'
import { FC } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { TypeRootStackParamList } from './navigation.types'
import { routes } from './routes'
import { useAuth } from '@/hooks/useAuth'
import Auth from '@/components/screens/auth/Auth'


const Stack = createNativeStackNavigator<TypeRootStackParamList>()

const PrivateNavigator: FC = () => {
    const { user } = useAuth()

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                contentStyle: {
                    backgroundColor: "#fff"
                }
            }}
        >
            {user ? (
                routes.map(route => (
                    <Stack.Screen key={route.name} {...route} />
                ))
            ) : (
                <Stack.Screen name='Auth' component={Auth} />
            )}

        </Stack.Navigator>
    )
}

export default PrivateNavigator