import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

// Layouts
import { LogOutLayout, LogInLayout } from '@components'

// Permissions Gate
import { AuthenticatedGate } from '@components'

// Home Routes
import { HomePage } from '@pages'

// Home Routes
import { InventoryPage } from '@pages'

// Auth Routes
import { LoginPage } from '@pages'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/webui" replace={false} />} />
        <Route path="/webui" >
          <Route element={<AuthenticatedGate exclude goTo="/webui/" />} >
            <Route path="/webui/auth" element={<LogOutLayout />}>
              <Route path="login" element={<LoginPage />} />
            </Route>
          </Route>
          <Route path="/webui" element={<LogInLayout />}>
            <Route element={<AuthenticatedGate goTo="/webui/auth/login" />} >
              <Route index element={<HomePage />} />
              <Route path='/webui/inventory' element={<InventoryPage />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}