import { store } from './redux/store';
import { Provider } from 'react-redux';
import RootNavigation from './navigation/RootNavigation';

export default function App() {
  return (
    <Provider store={store}>
      <RootNavigation/>
    </Provider>
  );
}
