import { AdaptivityProvider, AppRoot, ConfigProvider, Div, Panel, Root, View } from '@vkontakte/vkui';
import {useEffect} from 'react';
import '@vkontakte/vkui/dist/vkui.css';
import "./assets/style/main.css";
import BottomNavifation from 'components/BottomNavigation/BottomNavigation';

const App = () => {

	function onMount() {
		console.log("HISTORY_FROM_APP", window.history);
	}

	useEffect(onMount, []);

	return (
			<ConfigProvider appearance="light">
				<AdaptivityProvider>
					<AppRoot>
							<BottomNavifation />
					</AppRoot>
				</AdaptivityProvider>
			</ConfigProvider>
	);
}

export default App;
