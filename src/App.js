import React, {useContext} from 'react';
import './App.css';
import FirstStep from './FirstStep'
import SecondStep from './SecondStep'
import ThirdStep from './ThirdStep'
import { Stepper, Step, StepLabel } from '@material-ui/core'
import { multiStepContext } from './StepContext'

function App() {

  const { currentStep, finalData } = useContext(multiStepContext)
  function showStep(step){
    switch (step){
      case 1:
        return <FirstStep />
      case 2:
        return <SecondStep />
      case 3:
        return <ThirdStep />
    }

  }

  return (
    <div className="App">
      <header>
        <h1 style={{color:'black', textDecoration:'none'}}>React Multistep Form</h1>
        <div className='center-stepper'>
          <Stepper activeStep={currentStep-1} orientation="horizontal">
            <Step>
              <StepLabel></StepLabel>
            </Step>
            <Step>
                <StepLabel></StepLabel>
              </Step>
            <Step>
              <StepLabel></StepLabel>
            </Step>
          </Stepper>
        </div>
        { showStep(currentStep) }
        
      </header>
    </div>
  );
}

export default App;
