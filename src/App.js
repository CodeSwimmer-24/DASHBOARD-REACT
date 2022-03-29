import React from 'react';

// @mui material components
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from 'assets/theme';
import './App.css';
import { Provider } from 'react-redux';
import Routes from 'routes/Routes';

class App extends React.Component<StatePropsType> {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes />
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;
