import { Link } from 'react-router-dom';
import Logo from './Logo';
import { useContext } from 'react';
import { AuthContext } from '../context/Auth';

function Navbar() {
  const {currentUser, logout} = useContext(AuthContext)
  return (
    <div className="navbar">
        <nav>
            <Logo/>
            <div className="links">
                <Link className="link" to="/?cat=medicine">Medicine</Link>
                <Link className="link" to="/?cat=biotechnology">Biotechnology</Link>
                <Link className="link" to="/?cat=microbiology">Microbiology</Link>
                <Link className="link" to="/?cat=bioinformatics">Bioinformatics</Link>
                <Link className="link" to="/?cat=biochemistry">Biochemistry</Link>
                <span className='user'>{currentUser?.username}</span>
                {currentUser? <button onClick={logout} className='auth-link'>Logout</button> : <Link className='auth-link' to='/login'>Login</Link>}
                <span className='write'>
                    <Link to="/write">Post</Link>
                </span>
            </div>
        </nav>
    </div>
  )
}

export default Navbar