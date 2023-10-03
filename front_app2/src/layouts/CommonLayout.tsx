import { Outlet } from 'react-router-dom'
import Header from '../outlines/Header'
import Footer from '../outlines/Footer'

const CommonLayout = (): JSX.Element => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default CommonLayout
