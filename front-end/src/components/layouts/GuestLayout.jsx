
import { Outlet, useLocation } from 'react-router-dom';
import ProgressTracker from '../views/BecomeSaller/ProgressTracker';


export default function GuestLayout() {
  const steps = [{title:"Personal Info",route:'/Personnel_inf'},{title:"Professional Info",route:'/Professional_Info'} , {title:"Account Security",route:'/Account_Security'}];
  const location=useLocation();
  const stepMap = {
    '/BecomeSaller':0,
    '/Personnel_inf': 1,
    '/Professional_Info': 2,
    '/Account_Security': 3,
  };
   // Get the current step based on the location pathname
   const currentStep = stepMap[location.pathname] || 0;
  console.log(stepMap[location.pathname])
  return (
    <div>
      <div  >
        <ProgressTracker steps={steps} currentStep={currentStep} />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}
