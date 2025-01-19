import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axiosClient from "../../../api/axios";
import { useNavigate } from "react-router-dom";



const UserProfileDashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);



  // // useState for controller backend errors
  //   const [BackErrors,setBackErrors]=useState();

  //---------------------------------------------------------------------------------------
  //----> section of occupation

  const [Occupations, setOccupations] = useState([{ occupation: "", yearsFrom: "", yearsTo: "", skills: [] }]);
  
  useEffect(() => {
    console.log('useeffect')
    console.log(user?.professionalprofile ? true:false)
    if (user?.professionalprofile?.occupation) {
      console.log('kayn')
      const occup = JSON.parse(user.professionalprofile.occupation); // Parse the stored JSON data
      console.log(occup);

      // Directly set the state with the mapped data
      const updatedOccupations = occup.map((el) => ({
        occupation: el.occupation || "",
        yearsFrom: el.yearsFrom || "",
        yearsTo: el.yearsTo || "",
        skills: el.skills || []
      }));

      setOccupations(updatedOccupations); // Update the state with the parsed data

    }
    if (user?.professionalprofile?.skills) {
      setSkills(JSON.parse(user.professionalprofile.skills))

    }
    if (user?.professionalprofile?.education) {
      setEducation(JSON.parse(user.professionalprofile.education))

    }
    if (user?.professionalprofile?.certification) {
      setCertifications(JSON.parse(user.professionalprofile.certification))

    }
    if (user?.professionalprofile?.website_url) {
      setWebsite(user.professionalprofile.website_url)

    }

  }, []);





  // useState for controller the errors
  const [Errors, setErrors] = useState(
    {
      occupation1:
        { occupation_err: false, yearsFrom_err: false, yearsTo_err: false, occ_skills_err: false },
      skills_err: false
    })

  // // Fetch categories
  const { categories } = useSelector(state => state.categories);
  useEffect(() => {
    if (categories.length === 0) {
      const fetchCategories = async () => {
        await axiosClient.get('categories')
          .then((res) => {
            dispatch({ type: 'FETCH_CATEGORIES_SUCCESS', payload: res.data })
          })
          .catch((err) => { console.log(err) })
      };

      fetchCategories();
    }
  }, []);



  // Add a new occupation entry
  const addOccupation = () => {
    setOccupations((prevState) => [
      ...prevState,
      { occupation: "", yearsFrom: "", yearsTo: "", skills: [] },
    ]);
    setErrors({ ...Errors, occupation2: { occupation_err: false, yearsFrom_err: false, yearsTo_err: false, occ_skills_err: false } })
    console.log(Errors)
  };

  // Delete an occupation entry
  const deleteOccupation = (index) => {
    setOccupations((prevState) =>
      prevState.filter((_, i) => i !== index)
    );
  };

  // Update form field
  const updateField = (index, field, value) => {
    setOccupations((prevState) =>
      prevState.map((entry, i) =>
        i === index ? { ...entry, [field]: value } : entry
      )
    );
    setErrors((preErrors) => ({ ...preErrors, [`occupation${index + 1}`]: { ...preErrors[`occupation${index + 1}`], [`${field}_err`]: false } }))
  };

  // Toggle skill selection
  const toggleSkill = (index, skill) => {
    setOccupations((prevState) =>
      prevState.map((entry, i) =>
        i === index
          ? {
            ...entry,
            skills: entry.skills.includes(skill)
              ? entry.skills.filter((s) => s !== skill)
              : entry.skills.length < 5
                ? [...entry.skills, skill]
                : entry.skills,
          }
          : entry
      )
    );
    setErrors((preErrors) => ({ ...preErrors, [`occupation${index + 1}`]: { ...preErrors[`occupation${index + 1}`], occ_skills_err: false } }))
  };
  //-----------------------------------------------------------------------------------------------------
  //--------->  section of skills

  const [skills, setSkills] = useState([]);
  const [skillInput, setSkillInput] = useState("");
  const [levelInput, setLevelInput] = useState("");

  const levels = ["Beginner", "Intermediate", "Expert"];

  const handleAddSkill = () => {
    if (skillInput && levelInput) {
      setSkills([...skills, { skill: skillInput, level: levelInput }]);
      setSkillInput("");
      setLevelInput("");
      setErrors((preErrors) => ({ ...preErrors, skills_err: false }))
    }
  };

  const handleCancel = () => {
    setSkillInput("");
    setLevelInput("");
  };

  const handleDeleteSkill = (index) => {
    const updatedSkills = skills.filter((_, i) => i !== index);
    setSkills(updatedSkills);
    //----------------------------------------------------------------------------------------------------------
  };
  // ---------------------------------------------------------------------------------
  const [education, setEducation] = useState([]);
  const [certifications, setCertifications] = useState([]);
  const [website, setWebsite] = useState("");

  // Form State
  const [educationForm, setEducationForm] = useState({
    country: "",
    college: "",
    title: "",
    major: "",
    year: "",
  });
  const [certificationForm, setCertificationForm] = useState({
    award: "",
    certifiedFrom: "",
    year: "",
  });

  // Add Education
  const handleAddEducation = () => {
    const { country, college, title, major, year } = educationForm;
    if (country && college && title && major && year) {
      setEducation([...education, { ...educationForm }]);
      setEducationForm({ country: "", college: "", title: "", major: "", year: "" });
    }
  };
  //  delete Education
  const handleDeletEducation = (index) => {
    setEducation((prevState) =>
      prevState.filter((_, i) => i !== index))
  }
  // Add Certification
  const handleAddCertification = () => {
    const { award, certifiedFrom, year } = certificationForm;
    if (award && certifiedFrom && year) {
      setCertifications([...certifications, { ...certificationForm }]);
      setCertificationForm({ award: "", certifiedFrom: "", year: "" });
    }
  };
  //  delete Certificate
  const handleDeletCertification = (index) => {
    setCertifications((prevState) =>
      prevState.filter((_, i) => i !== index))
  }



  // -----controlle errors and send data to database ----------------------
  const sendData = () => {

    if (!Occupations[0].occupation) {
      setErrors((preErrors) => ({ ...preErrors, occupation1: { ...preErrors.occupation1, occupation_err: true } }))
    }
    else if (!Occupations[0].yearsFrom) {
      setErrors((preErrors) => ({ ...preErrors, occupation1: { ...preErrors.occupation1, occupation_err: false, yearsFrom_err: true } }))
    }
    else if (!Occupations[0].yearsTo) {
      setErrors((preErrors) => ({ ...preErrors, occupation1: { ...preErrors.occupation1, occupation_err: false, yearsFrom_err: false, yearsTo_err: true } }))
    }
    else if (Occupations[0].skills.length < 1) {
      setErrors((preErrors) => ({ ...preErrors, occupation1: { ...preErrors.occupation1, occupation_err: false, yearsFrom_err: false, yearsTo_err: false, occ_skills_err: true } }))
    }
    else if (Occupations[1] && !Occupations[1].occupation) {
      setErrors((preErrors) => ({ ...preErrors, occupation2: { ...preErrors.occupation2, occupation_err: true } }))

    }
    else if (Occupations[1] && !Occupations[1].yearsFrom) {

      setErrors((preErrors) => ({ ...preErrors, occupation2: { ...preErrors.occupation2, occupation_err: false, yearsFrom_err: true } }))
    }
    else if (Occupations[1] && !Occupations[1].yearsTo) {
      setErrors((preErrors) => ({ ...preErrors, occupation2: { ...preErrors.occupation2, occupation_err: false, yearsFrom_err: false, yearsTo_err: true } }))
    }
    else if (Occupations[1] && Occupations[1].skills.length < 1) {
      setErrors((preErrors) => ({ ...preErrors, occupation2: { ...preErrors.occupation2, occupation_err: false, yearsFrom_err: false, yearsTo_err: false, occ_skills_err: true } }))
    }
    else if (skills.length < 1) {
      setErrors((preErrors) => ({ ...preErrors, skills_err: true }))
    } else {

      const data = new FormData();
      data.append('user_id', user.id)
      data.append('occupation', JSON.stringify(Occupations));
      data.append('skills', JSON.stringify(skills));
      data.append('education', JSON.stringify(education));
      data.append('certification', JSON.stringify(certifications));
      data.append('website_url', website);

      const endpoint = user?.professionalprofile?.id
      ? `/professionalInformations/${user.professionalprofile.id}`
      : `/professionalInformations`;
      const method = user?.professionalprofile?.id ? "PUT" : "POST";

      if (method === "PUT") data.append("_method", "PUT");

      axiosClient.post(endpoint, data)
        .then((res) => {
          console.log(res.data);
          dispatch({ type: 'GET_USER', payload: res.data.user })
          dispatch({ type: 'NOTIFICATION', payload: res.data.message })
          setTimeout(() => { dispatch({ type: 'STOP_NOTIFICATION' }) }, 5000)
          navigate('/Account_Security')
        })
        .catch((err) => {
          console.log(err)
          if (err.response?.status === 422) {
            const errs = err.response.data.errors
            console.log(err.response.data.errors);
            if (typeof err.response.data.errors === 'object') {
              alert(Object.keys(errs).map((msg) => {
                return errs[msg] + '\n'

              }))
            }
          }

        })
      

    }
  }
  return (
    <>
      {/* ------------------------------section of occupation ------------------------------------- */}
      <div className="container my-4 py-4">
        <h4 className="mb-2">Your Occupation<span className="text-danger">*</span></h4>
        {Occupations.map((entry, index) => (
          <div key={index} className="mb-4">
            <div className="row mb-2">
              <div className="col-md-4">
                <label className="form-label">Occupation</label>
                <select
                  className={Errors[`occupation${index + 1}`]?.occupation_err ? "form-select is-invalid" : "form-select"}
                  value={entry.occupation}
                  onChange={(e) =>
                    updateField(index, "occupation", e.target.value)
                  }
                >
                  <option value="">Select Occupation</option>
                  {categories.map((category) => (
                    <option key={category.name} value={category.name}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-3">
                <label className="form-label">From</label>
                <select
                  className={Errors[`occupation${index + 1}`]?.yearsFrom_err ? "form-select is-invalid" : "form-select"}
                  value={entry.yearsFrom}
                  onChange={(e) =>
                    updateField(index, "yearsFrom", e.target.value)
                  }
                >
                  <option value="">Year</option>
                  {Array.from({ length: 30 }, (_, i) => {
                    const year = new Date().getFullYear() - i;
                    return (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="col-md-3">
                <label className="form-label">To</label>
                <select
                  className={Errors[`occupation${index + 1}`]?.yearsTo_err ? "form-select is-invalid" : "form-select"}
                  value={entry.yearsTo}
                  onChange={(e) =>
                    updateField(index, "yearsTo", e.target.value)
                  }
                >
                  <option value="">Year</option>
                  {Array.from({ length: 30 }, (_, i) => {
                    const year = new Date().getFullYear() - i;
                    return (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>

            {entry.occupation && (
              <>
                <p className="my-3">
                  Choose <b>two</b> to <b>five</b> of your best skills in{" "}
                  {entry.occupation}
                </p>
                <div className="row border-bottom mb-3">
                  {categories
                    .filter((category) => category.name === entry.occupation)
                    .flatMap((category) => category.subcategories)
                    .map((subcategory) => (
                      <div key={subcategory.name} className="col-md-3">
                        <div className="form-check d-flex align-items-center p-0">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id={`skill-${index}-${subcategory.name}`}
                            checked={entry.skills.includes(subcategory.name)}
                            onChange={() => toggleSkill(index, subcategory.name)}
                            disabled={
                              !entry.skills.includes(subcategory.name) &&
                              entry.skills.length >= 5
                            }
                          />
                          <label
                            className="form-check-label mx-2 p-0"
                            htmlFor={`skill-${index}-${subcategory.name}`}
                          >
                            {subcategory.name}
                          </label>
                        </div>
                      </div>
                    ))}

                  {(Errors[`occupation${index + 1}`]?.yearsFrom_err || Errors.occupation1?.yearsTo_err) && <p className="text-danger"  >Make sure you’ve added your years of experience. </p>}
                  {Errors[`occupation${index + 1}`]?.occ_skills_err && <p className="text-danger"  >Make sure you’ve added  1 to 5 of your  skills. </p>}
                </div>
                <div>
                  {(index == 0 && Occupations.length < 2) && (
                    <p
                      type="button"
                      style={{ color: "green", fontWeight: 600 }}
                      className="m-2"
                      onClick={addOccupation}
                    >
                      +Add New
                    </p>
                  )}
                  {index == 1 && (
                    <p
                      type="button"
                      style={{ color: "red", fontWeight: 600 }}
                      className="m-2"
                      onClick={() => deleteOccupation(index)}
                    >
                      -Delete
                    </p>
                  )}
                </div>

              </>
            )}
            {(Errors[`occupation${index + 1}`]?.occupation_err) && <p className="text-danger"  >Make sure you’ve added at least one occupation. </p>}
            {/* {(index==1 && Errors?.occupation2.occupation_err) && <p className="text-danger"  >Make sure you’ve added at least one occupation. </p>} */}
          </div>
        ))}
      </div>




      {/*----------------------------- section of skills ---------------------------------------*/}
      <div className="container my-4 py-4">
        <h4 className="mb-2">
          Skills <span className="text-danger ">*</span>
        </h4>
        <p>List the skills related to the services you're offering and add your experience level.</p>

        <div className="d-flex align-items-center gap-2 my-3">
          {/* Skill Input */}
          <select
            className="form-control m-0"
            value={skillInput}
            onChange={(e) => setSkillInput(e.target.value)}
          >
            <option value="">Select Skill</option>
            {categories
              .filter((category) => category.name === Occupations[0].occupation || category.name === Occupations[1]?.occupation) // Match the selected occupation
              .flatMap((category) =>
                category.subcategories.filter((subcategory) =>
                  Occupations[0].skills.includes(subcategory.name) || Occupations[1]?.skills.includes(subcategory.name)// Match the selected skills
                )
              )
              .flatMap((subcategory) => subcategory.semicategories) // Get the semicategories
              .map((semicategory) => (
                <option key={semicategory.id} value={semicategory.name}>
                  {semicategory.name}
                </option>
              ))}
          </select>

          {/* Experience Level Dropdown */}
          <select
            className="form-select m-0"
            value={levelInput}
            onChange={(e) => setLevelInput(e.target.value)}
          >
            <option value="">Experience Level</option>
            {levels.map((level, index) => (
              <option key={index} value={level}>
                {level}
              </option>
            ))}
          </select>

          {/* Add and Cancel Buttons */}
          <button
            className="btn bg-secondary m-0 p-1"
            onClick={handleCancel}
            type="button"
          >
            Cancel
          </button>
          <button
            className="btn bg-primary m-0 p-1"
            onClick={handleAddSkill}
            type="button"
          >
            Add
          </button>
        </div>
        {Errors.skills_err && <p className="text-danger"  >Make sure you’ve added at least one of your strongest skill. </p>}


        {/* Skill Table (Visible only if skills are added) */}
        {skills.length > 0 && (
          <table className="table ">
            <thead>
              <tr>
                <th>Skill</th>
                <th>Level</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {skills.map((skill, index) => (
                <tr key={index}>
                  <td>{skill.skill}</td>
                  <td>{skill.level}</td>
                  <td className="d-flex justify-content-end">
                    <button
                      className="btn bg-danger p-1 "
                      onClick={() => handleDeleteSkill(index)}
                      type="button"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* --------------------------------section of  Education  ---------------------------------------- */}

      <div className="container my-4 py-4">
        <h5 className="mb-2">Education</h5>
        <div className="d-flex align-items-center mb-3">
          <input
            type="text"
            className="form-control m-0 me-2 "
            placeholder="Country of College/University"
            value={educationForm.country}
            onChange={(e) => setEducationForm({ ...educationForm, country: e.target.value })}
          />
          <input
            type="text"
            className="form-control m-0 me-2"
            placeholder="College/University Name"
            value={educationForm.college}
            onChange={(e) => setEducationForm({ ...educationForm, college: e.target.value })}
          />
          <select
            className="form-select m-0 me-2 "
            value={educationForm.title}
            onChange={(e) => setEducationForm({ ...educationForm, title: e.target.value })}
          >
            <option value="">Title</option>
            <option value="Bachelor">Bachelor</option>
            <option value="Master">Master</option>
            <option value="PhD">PhD</option>
          </select>
          <input
            type="text"
            className="form-control m-0 me-2"
            placeholder="Major"
            value={educationForm.major}
            onChange={(e) => setEducationForm({ ...educationForm, major: e.target.value })}
          />
          <input
            type="number"
            className="form-control m-0 me-2"
            placeholder="Year"
            value={educationForm.year}
            onChange={(e) => setEducationForm({ ...educationForm, year: e.target.value })}
          />
          <button className="btn bg-secondary m-0 p-1 me-2" onClick={() => setEducationForm({ country: "", college: "", title: "", major: "", year: "" })}>
            Cancel
          </button>
          <button className="btn bg-primary m-0 p-1 " onClick={handleAddEducation}>
            Add
          </button>
        </div>
        {/* Education Table */}
        {education.length > 0 && (
          <table className="table ">
            <thead>
              <tr>
                <th>Degree</th>
                <th>Years</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {education.map((edu, index) => (
                <tr key={index}>
                  <td>{edu.major}</td>
                  <td>{edu.year}</td>
                  <td className="d-flex justify-content-end" onClick={() => { handleDeletEducation(index) }}><button className="btn bg-danger p-1">Delete</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>


      {/* -----------------------------------Certification Section------------------------------------------ */}

      <div className="container my-4 py-4 ">
        <h5 className="mb-2">Certification</h5>
        <div className="d-flex align-items-center mb-3">
          <input
            type="text"
            className="form-control me-2"
            placeholder="Certificate or Award"
            value={certificationForm.award}
            onChange={(e) => setCertificationForm({ ...certificationForm, award: e.target.value })}
          />
          <input
            type="text"
            className="form-control me-2"
            placeholder="Certified From (e.g., Adobe)"
            value={certificationForm.certifiedFrom}
            onChange={(e) =>
              setCertificationForm({ ...certificationForm, certifiedFrom: e.target.value })
            }
          />
          <input
            type="number"
            className="form-control me-2"
            placeholder="Year"
            value={certificationForm.year}
            onChange={(e) =>
              setCertificationForm({ ...certificationForm, year: e.target.value })
            }

          />
          <button className="btn bg-secondary m-0 p-2 me-2 " onClick={() => setCertificationForm({ award: "", certifiedFrom: "", year: "" })}>
            Cancel
          </button>
          <button className="btn bg-primary m-0 p-2" onClick={handleAddCertification}>
            Add
          </button>
        </div>
        {/* Certification Table */}
        {certifications.length > 0 && (
          <table className="table">
            <thead>
              <tr>
                <th>Certificate or Award</th>
                <th>Year</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {certifications.map((cert, index) => (
                <tr key={index}>
                  <td>{cert.award}</td>
                  <td>{cert.year}</td>
                  <td className="d-flex justify-content-end"><button onClick={() => { handleDeletCertification(index) }} className="btn bg-danger p-1">Delete</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>


      {/*-------------------------------------- Personal Website--------------------------------------- */}
      <div className="container my-4 py-4">
        <h5 className="mb-2">Personal Website</h5>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Ex: https://your_domane_name.com"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </div>
      </div>


      {/* Continue Button */}
      <div className="container d-flex justify-content-end my-4" >
        <button onClick={sendData} className="btn bg-success p-2">Continue</button>
      </div>
      



    </>
  );
};

export default UserProfileDashboard;
