import AccessibilityU from './AccessibilityU.svg'
import Instructors from './Instructors'
import './index.css'

function Dev() {
  return (
    <div>
      <div className="dev-header">
        <img src={AccessibilityU}/>
        <Instructors/>
      </div>
    </div>
  );
}

export default Dev;
