import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Main from './components/Main'
import SideBar from './components/Sidebar'
import Footer from './components/Footer'
function App() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [sidebar,showsidebar]=useState(false)
  function togglesidebar(){
    showsidebar(!sidebar)
  }
  useEffect(()=>{
    async function fetchAPIData(){
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
      console.log(NASA_KEY)
      const url = 'https://api.nasa.gov/planetary/apod?api_key=rhIuduAtRZGTdskE7aBxp9St773Tjleb4e2IVuNf';

      try {
        const res=await fetch(url)
        const apidata= await res.json()
        setData(apidata)
      } catch (error) {
        console.log(error)
      }
    }
    fetchAPIData()
  },[])
  return (
    <>
 {data ? (<Main data={data} />) : (
        <div className="loadingState">
          <i className="fa-solid fa-gear"></i>
        </div>
      )}    { sidebar && (<SideBar data={data} togglesidebar={togglesidebar} />)}
{ data &&    (<Footer data={data} togglesidebar={togglesidebar} />)
}    </>
  )
}

export default App
