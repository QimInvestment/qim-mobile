import { store } from './redux/store';
import { Provider } from 'react-redux';
import RootNavigation from './navigation/RootNavigation';
import { useFonts } from 'expo-font';
import { useCallback} from 'react';



export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'Montserrat': require('./assets/fonts/Montserrat.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {

    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <Provider store={store}>
      <RootNavigation/>
    </Provider>
  );
}
