import React, { useState } from 'react';

const titles = [
  {
    name: 'AdvertisingManagement',
    skills: ['Communication Skills', 'Creative Thinking', 'Strategic Thinking', 'Project Management', 'Analytical Skills', 'Leadership Skills']
  },
  {
    name: 'Bachelor of Architecture',
    skills: ['Design Skills', 'Technical Skills', 'Communication Skills', 'Analytical Skills', 'Teamwork Skills', 'Project Management Skills']
  },
  {
    name: 'Business Management',
    skills: ['Leadership Skills', 'Communication Skills', 'Analytical Skills', 'Strategic Thinking', 'Problem-Solving Skills', 'Financial Management Skills']
  },
  {
    name: 'Diploma in Dramatization',
    skills: ['Acting Skills', 'Script Writing', 'Directing Skills', 'Theater Production Skills', 'Communication Skills', 'Collaboration Skills']
  }
];

function Recommendedroute() {
  const [selectedSkills, setSelectedSkills] = useState({});

  const handleSkillSelect = (skill) => {
    setSelectedSkills({
      ...selectedSkills,
      [skill]: !selectedSkills[skill]
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    let maxMatchedSkills = 0;
    let titleWithMaxMatchedSkills = '';

    for (let i = 0; i < titles.length; i++) {
      const title = titles[i];
      let matchedSkills = 0;
      for (let j = 0; j < title.skills.length; j++) {
        const skill = title.skills[j];
        if (selectedSkills[skill]) {
          matchedSkills++;
        }
      }
      if (matchedSkills > maxMatchedSkills) {
        maxMatchedSkills = matchedSkills;
        titleWithMaxMatchedSkills = title.name;
      }
    }

    if (maxMatchedSkills === 0) {
      alert('No matching titles found');
    } else {
      alert(`Title with maximum number of matched skills: ${titleWithMaxMatchedSkills}`);
    }
  };

  const skillCheckboxes = titles.reduce((acc, title) => {
    title.skills.forEach(skill => {
      if (!acc[skill]) {
        acc[skill] = false;
      }
    });
    return acc;
  }, {});

  return (
    <div>
      <h1>Select your skills:</h1>
      <form onSubmit={handleFormSubmit}>
        {Object.keys(skillCheckboxes).map(skill => (
          <label key={skill}>
            <input type="checkbox" checked={selectedSkills[skill]} onChange={() => handleSkillSelect(skill)} />
            {skill}
          </label>
        ))}
        <button type="submit">Find matching title</button>
      </form>
    </div>
  );
}

export default Recommendedroute;
