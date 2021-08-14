import 'bootstrap/dist/css/bootstrap.min.css';
//component
import Nav from '../component/nav';
import Contact from '../component/contact';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <Contact />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
