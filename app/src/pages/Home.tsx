
import { Link } from 'react-router-dom';
import '../sass/style.scss';
import logo from '../../public/bio-icon.png';
import Footer from '../components/Footer';



export default function Home() {
  return (
    <section className='wrapper'>
      <main className="home">
          <header className="header">
              <div className="heading">
                  <img src={logo} alt='A blue DNA helix logo' height={50} />
                  <h1>BioNews</h1>
              </div>

              <p>
                  Your source for the <strong className="strong">TOP</strong>{' '}
                  bio-medical science news
              </p>
          </header>
          <Link to="/blog" className="main__a">Explore</Link>
      </main>
      <Footer/>
      </section>
  );
}
