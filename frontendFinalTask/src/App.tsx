import { useState } from "react";
import JobForm from "./components/Company";
import { JobFormData } from "./types/Types";
import { postdata } from "./apiCalls/Apicalls";
//import { post } from 'express/lib/application'
function App() {
  const handleCompanyDetails = async (jobdata: JobFormData) => {
    const res = await postdata(jobdata);
  };

  return (
    <>
      <JobForm companydetails={handleCompanyDetails}></JobForm>
    </>
  );
}

export default App;
