import cn from 'classnames'
import './index.css'

function Nav({onSetActiveView, activeView}) {
  return (
    <nav className="nav">
      <p>Accessibility University</p>
      <div className="links">
        <button
          className={cn('link', {active: activeView === 'dev'})}
          onClick={() => onSetActiveView('dev')}>
          Dev
        </button>
        <button
          className={cn('link', {active: activeView === 'design'})}
          onClick={() => onSetActiveView('design')}>
          Design
        </button>
        <a
          className={cn('link', {active: activeView === 'qa'})}
          onClick={() => onSetActiveView('qa')} tabIndex={0}>
          QA
        </a>
      </div>
    </nav>
  );
}

export default Nav;
