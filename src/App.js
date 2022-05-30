import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';
import { ThemeProvider, ThemeContext } from './contexts/ThemeContext';

import themes from './styles/themes';

class App extends React.Component {
  state = {
    changed: false,
  };

  componentDidMount() {
    console.log('componentDidMount executed');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate', {
      currentState: this.state,
      prevState,
      prevProps,
    });
  }

  componentDidCatch(error, info) {
    console.log('componentDidCatch', { error, info });
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('componentShouldUpdate', {
      currentState: this.state,
      nextState,
      nextProps, // mostra o valor que o componente vai renderizar, e com isso podemos manipular o return pra que dependendo do valor o componente seja renderizado (true) ou não (false)
    });

    return true;
  }

  render() {
    console.log('rendered');

    return (
      <ThemeProvider>
        <button onClick={() => this.setState({ changed: true })}>
          Change state
        </button>
        <ThemeContext.Consumer>
          {({ theme }) => (
            <StyledThemeProvider theme={themes[theme] || themes.dark}>
              <GlobalStyle />
              <Layout />
            </StyledThemeProvider>
          )}
        </ThemeContext.Consumer>
      </ThemeProvider>
    );
  }
}

export default App;
