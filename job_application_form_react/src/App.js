import React, { useState, useRef } from 'react';
import Stepper from 'react-stepper-horizontal';
import { Formik, Form } from 'formik';

// React Fragments of form:
import BasicDetails from './components/BasicDetails/basicDetails';
import Education from './components/Education/education';

// Initial Values:
import basicInitialValues from './components/BasicDetails/basicInitialValues';

// Validation Schemas:
import { validationSchema } from './components/BasicDetails/basicDetailsValidations';
import { eduValidationSchema } from './components/Education/validationSchema';


function App() {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({});

  function getSectionComponent() {
    switch (activeStep) {
      case 0: return <BasicDetails />;
      case 1: return <Education />;
      default: return <div>Not Found! </div>;
    }
  }

  function handleSubmit(data) {
    setFormData(() => {
      Object.assign(formData, { data })
    })
    console.log(formData);
  }


  return (
    <div className="App">
      <Formik
        initialValues={basicInitialValues}
        // validationSchema={eduValidationSchema}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 1));
            actions.setSubmitting(false)
            handleSubmit(values)
          }, 100);
        }}
      >
        <Form>
          {getSectionComponent(activeStep)}
          <br />
          <br />
          <input
            type='submit'
            value='Next'
          />
        </Form>
      </Formik>
    </div>
  );
}

export default App;
