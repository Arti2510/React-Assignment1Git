import '../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListCheck } from '@fortawesome/free-solid-svg-icons';

function Header() {
    return (
        <header className='header flex items-center gap-2 p-4 bg-blue-600 text-white'>
            <FontAwesomeIcon icon={faListCheck} size="lg" />
            <h1 className="text-xl font-bold" style={{marginLeft: '10px'}}>My To-Do List</h1>
        </header>
    );
}

export default Header;