import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
 const div = <div>
<h1>Welcome To Chalapathi</h1>
<p>Learn Today ,Lead Tomorrow</p>

</div>

createRoot(document.getElementById('root')).render(

  //safety to components
  <StrictMode>
    <App />//app.jsx
  </StrictMode> 
)

