import usePortfolioSettings from './hooks/usePortfolioSettings';
import useAppearanceEffects from './hooks/useAppearanceEffects';
import { BrowserRouter } from 'react-router-dom';
import AnimatedBackground from './components/AnimatedBackground';
import Navbar from './components/Navbar';
import RouteTransition from './components/RouteTransition';
import './App.css';

function App() {
  const { settings, changeTheme, toggleDynamicBackground } = usePortfolioSettings();
  const useLiteEffects = useAppearanceEffects(settings);

  return (
    <div className="App appShell">
      {settings.dynamicBackgroundEnabled ? (
        <AnimatedBackground performanceMode={useLiteEffects} />
      ) : null}
      <BrowserRouter>
        <RouteTransition />
        <Navbar
          settings={settings}
          onChangeTheme={changeTheme}
          onToggleDynamicBackground={toggleDynamicBackground}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
