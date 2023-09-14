import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@mui/material'
import { CssBaseline } from '@mui/material'
import App from './App.tsx'
import { theme } from './theme.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
    </ThemeProvider>
)
