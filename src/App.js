import React from 'react'
import Builder from './containers/Builder'
import { ThemeProvider } from "@material-ui/styles";
import theme from './components/ui/theme'
function App() {
  return (
  
    <ThemeProvider theme={theme}>
      <React.Fragment>

      <Builder/>
    </React.Fragment>
    </ThemeProvider>

    
  );
}

export default App;
