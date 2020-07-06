import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme/testioTheme';
import Loading from './Components/Loading/Loading';
import ErrorDisplay from './Components/Error/ErrorDisplay';
import AppRouter from './Components/AppRouter/AppRouter';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Loading />
        <ErrorDisplay />
        <AppRouter />
      </div>
    </ThemeProvider>
  );
}

export default App;
