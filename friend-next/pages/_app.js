import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//component
import Nav from '../component/nav';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
