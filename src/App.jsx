import React from 'react'
import Card from './components/Card'
import NavBar from './components/NavBar'


const App = () => {

  return (
    <div className='container mx-auto'>
      <NavBar />
      {/* <h1>Tailwind CSS</h1>
      <h2>Incorporado con PostCss</h2>
      <button className="btn btn-blue btn-blue:hover">Botón</button> */}
      <div className="my-5 flex flex-wrap -mx-2">
        <div className="w-full sm:w-1/2 lg:w-1/3 px-2 my-2">
          <Card photo='https://picsum.photos/800/600' />
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/3 px-2 my-2">
          <Card photo='https://picsum.photos/800/600' />
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/3 px-2 my-2">
          <Card photo='https://picsum.photos/800/600' />
        </div>
      </div>
    </div>
  )
}

export default App