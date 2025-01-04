import  { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axiosClient from "../../../api/axios";
import { useNavigate } from "react-router-dom";


const UserProfileDashboard = () => {
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const { user, token } = useSelector((state) => state.auth);

  const [categories, setCategories] = useState([]);
  const [formState, setFormState] = useState([
    { occupation: "", yearsFrom: "", yearsTo: "", skills: [] },
  ]);

  // Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axiosClient.get("categories");
        setCategories(data);
      } catch (err) {
        console.error("Failed to fetch categories:", err);
      }
    };

    fetchCategories();
  }, []);

  // Add a new occupation entry
  const addOccupation = () => {
    setFormState((prevState) => [
      ...prevState,
      { occupation: "", yearsFrom: "", yearsTo: "", skills: [] },
    ]);
  };

  // Delete an occupation entry
  const deleteOccupation = (index) => {
    setFormState((prevState) =>
      prevState.filter((_, i) => i !== index)
    );
  };

  // Update form field
  const updateField = (index, field, value) => {
    setFormState((prevState) =>
      prevState.map((entry, i) =>
        i === index ? { ...entry, [field]: value } : entry
      )
    );
  };

  // Toggle skill selection
  const toggleSkill = (index, skill) => {
    setFormState((prevState) =>
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
  };
  const [skills, setSkills] = useState([]);
  const [skillInput, setSkillInput] = useState("");
  const [levelInput, setLevelInput] = useState("");

  const levels = ["Beginner", "Intermediate", "Expert"];

  const handleAddSkill = () => {
    if (skillInput && levelInput) {
      setSkills([...skills, { skill: skillInput, level: levelInput }]);
      setSkillInput("");
      setLevelInput("");
    }
  };

  const handleCancel = () => {
    setSkillInput("");
    setLevelInput("");
  };

  const handleDeleteSkill = (index) => {
    const updatedSkills = skills.filter((_, i) => i !== index);
    setSkills(updatedSkills);
  };
  return (
    <>
      <div className="container">
        <h4 className="mt-4">Your Occupation</h4>
        {formState.map((entry, index) => (
          <div key={index} className="mb-4">
            <div className="row mb-2">
              <div className="col-md-4">
                <label className="form-label">Occupation</label>
                <select
                  className="form-select"
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
                  className="form-select"
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
                  className="form-select"
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
                </div>

                <div>
                  {index < 1 && (
                    <p
                      type="button"
                      style={{ color: "green", fontWeight: 600 }}
                      className="m-2"
                      onClick={addOccupation}
                    >
                      +Add New
                    </p>
                  )}
                  {index >= 1 && (
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
          </div>
        ))}
      </div>
      <div className="container mt-4">
      <h4>
        Skills <span className="text-danger">*</span>
      </h4>
      <p>List the skills related to the services you're offering and add your experience level.</p>

      <div className="d-flex align-items-center gap-2 my-3">
        {/* Skill Input */}
        <input
          type="text"
          className="form-control m-0"
          placeholder="Add Skill (e.g. Voice Talent)"
          value={skillInput}
          onChange={(e) => setSkillInput(e.target.value)}
        />

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
          className="btn btn-secondary m-0 p-1"
          onClick={handleCancel}
          type="button"
        >
          Cancel
        </button>
        <button
          className="btn btn-primary m-0 p-1"
          onClick={handleAddSkill}
          disabled={!skillInput || !levelInput}
          type="button"
        >
          Add
        </button>
      </div>

      {/* Skill Table (Visible only if skills are added) */}
      {skills.length > 0 && (
        <table className="table table-bordered">
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
                <td>
                  <button
                    className="btn btn-danger p-1"
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
    </>
  );
};

export default UserProfileDashboard;
