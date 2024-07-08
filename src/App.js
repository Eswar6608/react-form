import "./App.css";
import { Form } from "./Components/Form";
import { Route, Routes } from "react-router-dom";
import { Form1 } from "./Components/Form1";
import { Form2 } from "./Components/Form2";
import { useState } from "react";
import { General } from "./Components/General";

function App() {
  const [formData, setFormData] = useState({
    formCourse: {},
    formFsd: {},
    formDsml: {},
    general: {},
  });
  const [resetKey, setResetKey] = useState(0);

  const handleFormChange = (formName, data) => {
    setFormData((prevState) => ({
      ...prevState,
      [formName]: data,
    }));
  };

  const printTotalValues = () => {
    const totalValues = {
      ...formData.formCourse,
      ...formData.formFsd,
      ...formData.formDsml,
      ...formData.general,
    };
    console.log("Form Submited:", formData);
  };

  const resetForms = () => {
    if (window.confirm("Are you sure you want to clear form?")) {
      setFormData({
        formCourse: {},
        formFsd: {},
        formDsml: {},
        general: {},
      });
      setResetKey((prevKey) => prevKey + 1);
    }
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Form
              clearForm={resetForms}
              onChange={(data) => handleFormChange("formCourse", data)}
              reset={resetKey}
            />
          }
        />
        <Route
          path="/form1"
          element={
            <Form1
              clearForm={resetForms}
              onChange={(data) => handleFormChange("formFsd", data)}
              reset={resetKey}
            />
          }
        />
        <Route
          path="/form2"
          element={
            <Form2
              clearForm={resetForms}
              onChange={(data) => handleFormChange("formDsml", data)}
              reset={resetKey}
            />
          }
        />
        <Route
          path="/general"
          element={
            <General
              triggerClick={printTotalValues}
              clearForm={resetForms}
              onChange={(data) => handleFormChange("general", data)}
              reset={resetKey}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;

// import React, { useState } from "react";
// import FormOne from "./FormOne";
// import FormTwo from "./FormTwo";
// import FormThree from "./FormThree";
// import { useForm } from "react-hook-form";

// const ParentComponent = () => {
//   const [formData, setFormData] = useState({
//     formOne: {},
//     formTwo: {},
//     formThree: {},
//   });

//   const [resetKey, setResetKey] = useState(0);
//   const [selectedForm, setSelectedForm] = useState("formOne"); // default form

//   const handleFormChange = (formName, data) => {
//     setFormData((prevState) => ({
//       ...prevState,
//       [formName]: data,
//     }));
//   };

//   const printTotalValues = () => {
//     // console.log("Form One Data:", formData.formOne);
//     // console.log("Form Two Data:", formData.formTwo);
//     // console.log("Form Three Data:", formData.formThree);

//     // const totalValues = {
//     //   ...formData.formOne,
//     //   ...formData.formTwo,
//     //   ...formData.formThree,
//     // };

//     console.log("Total Values:", formData);
//   };

//   const resetForms = () => {
//     if (window.confirm("Are you sure you want to clear all input fields?")) {
//       setFormData({
//         formOne: {},
//         formTwo: {},
//         formThree: {},
//       });
//       setResetKey((prevKey) => prevKey + 1);
//     }
//   };

//   const handleFormSelection = (event) => {
//     setSelectedForm(event.target.value);
//   };

//   return (
//     <div>
//       <select value={selectedForm} onChange={handleFormSelection}>
//         <option value="">Choose</option>
//         <option value="formOne">Form One</option>
//         <option value="formTwo">Form Two</option>
//         <option value="formThree">Form Three</option>
//       </select>
//       {selectedForm === "formOne" && (
//         <FormOne
//           sub={printTotalValues}
//           clear={resetForms}
//           onChange={(data) => handleFormChange("formOne", data)}
//           reset={resetKey}
//         />
//       )}
//       {selectedForm === "formTwo" && (
//         <FormTwo
//           sub={printTotalValues}
//           clear={resetForms}
//           onChange={(data) => handleFormChange("formTwo", data)}
//           reset={resetKey}
//         />
//       )}
//       {selectedForm === "formThree" && (
//         <FormThree
//           sub={printTotalValues}
//           clear={resetForms}
//           onChange={(data) => handleFormChange("formThree", data)}
//           reset={resetKey}
//         />
//       )}
//     </div>
//   );
// };

// export default ParentComponent;
