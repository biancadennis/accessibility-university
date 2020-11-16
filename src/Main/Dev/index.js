import AccessibilityU from './AccessibilityU.svg'
import Instructors from './Instructors'
import './index.css'

function Dev() {
  return (
    <div>
      <div className="dev-header">
        <img src={AccessibilityU}/>
      </div>
      <Instructors/>
    </div>
  );
}

export default Dev;
