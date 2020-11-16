import './index.css'

function Nav({onSetActiveView}) {
  return (
    <nav className="nav">
      <p>Accessibility University</p>
      <div className="links">
        <button onClick={() => onSetActiveView('design')}>
          Design
        </button>
        <button onClick={() => onSetActiveView('design')}>
          QA
        </button>
      </div>
    </nav>
  );
}

export default Nav;
