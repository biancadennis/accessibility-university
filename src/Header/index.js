import './index.css'

function Nav({onSetActiveView}) {
  return (
    <nav className="nav">
      <p>Accessibility University</p>
      <div className="links">
        <button onClick={() => onSetActiveView('dev')}>
          Dev
        </button>
        <button onClick={() => onSetActiveView('design')}>
          Design
        </button>
        <a onClick={() => onSetActiveView('qa')} tabIndex={0}>
          QA
        </a>

      </div>
    </nav>
  );
}

export default Nav;
