import React, {lazy} from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux'
import { Suspense } from './utils'
const App = lazy(()=> import("./App"))


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Suspense>
      <Provider store={store}>
        <App />
      </Provider>
    </Suspense>
  </BrowserRouter>
)
