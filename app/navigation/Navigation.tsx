import { FC } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import PrivateNavigator from './PrivateNavigator'


const Navigation: FC = () => {
	return (
		<NavigationContainer>
			<PrivateNavigator />
		</NavigationContainer>
	)
}

export default Navigation