import './App.css';
import BasicDetails from './components/BasicDetails/basicDetails';
import { Form, Formik, FormikProps } from 'formik';
import { validationSchema } from './components/BasicDetails/basicDetailsValidations';
import basicInitialValues from './components/BasicDetails/basicInitialValues';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    console.log("Mounted")
  })
  return (
    <div className="App">
      <Formik
        initialValues={basicInitialValues}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 1));
            actions.setSubmitting(false)
          }, 100);
        }}
      >
        <Form>
          <BasicDetails />
          <input type='submit' value='Submit' />
        </Form>
      </Formik>
    </div>
  );
}

export default App;
