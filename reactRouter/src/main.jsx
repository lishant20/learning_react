import { StrictMode} from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Route,createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, {githubInfoLoader} from './components/Github/Github.jsx'
// const router = createBrowserRouter([
//   {
//     path: '/',        //top level element
//     element: <Layout />,     //kun render garne tyo dine
//     children: [             //aru element home,aboutus,contact
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path:"/contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} /> 
      <Route 
      loader= {githubInfoLoader}
      path='github' element={<Github />} />
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)


//RouterProvider component takes prop---router={router}
//loader---cursor jane bitikai fetch garxa ani cache mah ni rakxa
//useEffect vanda pahile fetch garxah----more optimize
//inside loader method call garnu parxah ani method mah promise 
//return hunxa ....React afai le kehi gardainah so hooks useLoader