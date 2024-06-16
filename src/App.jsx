import Sidebar from './components/Sidebar'
import Main from './components/Main'
import Footer from './components/Footer'
import { useEffect, useState } from 'react'
function App() {

      const [data, setData] = useState(null);
      const [showModal, setShowModal] = useState(false);

      const handleModal = () => {
            setShowModal(!showModal)
      }

      useEffect(() => {
            const fetchApiData = async () => {
                  const NASA_KEY = import.meta.env.VITE_NASA_API_KEY

                  const url = 'https://api.nasa.gov/planetary/apod' + `?api_key=${NASA_KEY}`
                  try {
                        const res = await fetch(url)
                        const data = await res.json()
                        setData(data)
                        console.log('DATA\n', data)
                  }
                  catch (err) {
                        console.log(err.message)
                  }
            }

            fetchApiData()
      }, [])

      return (
            <>
                  {data ? (<Main data={data} />) : (
                        <div className='loadingState'><i className="fa-solid fa-gear"></i></div>
                  )}
                  {showModal && (<Sidebar data={data} handleModal={handleModal} />)}

                  {data && (<Footer data={data} handleModal={handleModal} />)}

            </>
      )
}

export default App



