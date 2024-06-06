// import './App.css'
import Card from './Cards/Card'
import { ProductInfo } from './Cards/Product'

function App() {

  return (
    <>
      <div className='w-full h-[100vh] bg-slate-200'>
        <Card product={ProductInfo}  />
      </div>
    </>
  )
}

export default App
