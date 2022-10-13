// import '../styles/globals.css'
import 'styles/css/style.css';
import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
import '@fortawesome/fontawesome-free/css/brands.min.css';
import '@fortawesome/fontawesome-free/css/regular.min.css';
import '@fortawesome/fontawesome-free/css/solid.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'styles/google-font.css'


import Navbar from 'components/navbar';


function MyApp({ Component, pageProps }) {

  return <>
  <Navbar/>

  <div>
  <Component {...pageProps} />
  </div>

  </>
}

export default MyApp;
