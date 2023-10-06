import styles from '../styles/common.module.scss'
import { connect } from 'react-redux'
import { Outlet } from 'react-router-dom'
import Header from '../outlines/Header'
import Footer from '../outlines/Footer'
import Side from '../outlines/Side'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)
const CommonLayout = ({isLogin}): JSX.Element => {
  return (
    <>
      <Header />
      <main className={cx({flex: isLogin, layout_width: isLogin})}>
        {isLogin && <Side />}
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default connect(
  (state: any) => ({isLogin: state.user.isLogin as boolean }),
  {}
)(CommonLayout)
