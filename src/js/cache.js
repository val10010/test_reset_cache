import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from '@material-ui/styles';

import { theme } from 'themes/default';
import 'css/reset.scss';
import 'css/main.scss';
import 'css/imports.scss';

const App = () => (
    <ThemeProvider theme={theme}>
        cache7
    </ThemeProvider>
);

render(
    <App />,
    document.getElementById('app')
);
