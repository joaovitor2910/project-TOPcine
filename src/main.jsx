import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter} from 'react-router-dom'
import Router from './routes/routes'
import GlobalStyle from './styles/globalStyles'
import { UserStorage } from './contexts/UserContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
    <UserStorage>
       <Router />
    </UserStorage>
      </BrowserRouter>
    <GlobalStyle />
  </StrictMode>
)
