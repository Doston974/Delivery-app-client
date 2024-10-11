import Navigation from "@/navigation/Navigation";
import AuthProvider from "@/providers/AuthProvider";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from 'react-native-safe-area-context';


export default function App() {
	return (
		<>
			<AuthProvider>
				<SafeAreaProvider>
					<Navigation />
				</SafeAreaProvider>
				<StatusBar style="light" />
			</AuthProvider>
		</>
	)
}

