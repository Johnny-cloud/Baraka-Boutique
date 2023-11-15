import { createRoot } from 'react-dom/client'
import { App } from './components'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

const root = createRoot(document.getElementById('root'))

root.render(
    <div>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </div>
)