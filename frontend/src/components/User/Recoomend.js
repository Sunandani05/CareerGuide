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
  },
  {
    name: 'Diploma in Education',
    skills: ['Pedagogical Skills', 'Classroom Management', 'Lesson Planning', 'Assessment and Evaluation', 'Communication Skills', 'Problem-Solving Skills']
  },
  {
    name: "Fashion Design",
    skills: ['Creativity and Innovation', 'Drawing and Sketching Skills', 'Sewing and Patternmaking Skills', 'Fabric Knowledge and Selection', 'Attention to Detail', 'Attention to Detail','Communication and Presentation Skills']
  },
  {
    name: "Foreign Languages Diploma",
    skills: ['Fluency in Foreign Language(s)', 'Translation and Interpretation Skills', 'Cultural Awareness and Sensitivity', 'Effective Communication Skills', 'Critical Thinking and Problem Solving', 'Continuous Learning and Self-Development']
  },
  {
    name: "Interior Design",
    skills: ['Creativity and Innovation', 'Spatial Awareness and Planning', 'Attention to Detail', 'Knowledge of Materials and Textiles', 'Communication and Presentation Skills', 'Project Management Skills']
  },
  {
    name: "Journalism",
    skills: ['Strong Writing and Editing Skills', 'Research and Investigation Skills', 'Interviewing and Interpersonal Skills', 'Critical Thinking and Analysis', 'Attention to Detail and Accuracy', 'Multimedia Skills (e.g., Photography, Video Editing)']
  },
  {
    name: "Law",
    skills: ['Analytical and Critical Thinking', 'Research and Investigation Skills', 'Communication and Interpersonal Skills', 'Attention to Detail and Accuracy', 'Problem-Solving and Decision-Making Skills', 'Time Management and Organization Skills']
  },
  {
    name: "Bachelor of Commerce (BCom)",
    skills: ['Financial Analysis and Management Skills', 'Data Analysis and Interpretation Skills', 'Communication and Presentation Skills', 'Problem-Solving and Decision-Making Skills', 'Attention to Detail and Accuracy', 'Time Management and Organization Skills']
  },
  {
    name: "Bachelor of Education",
    skills: ['Effective Communication and Interpersonal Skills', 'Pedagogical Knowledge and Understanding', 
      'Classroom Management and Behavioral Strategies', 'Adaptability and Flexibility', 'Collaboration and Teamwork Skills', 'Assessment and Evaluation Strategies']
  },
  {
    name: "Banking and Insurance",
    skills: ['Financial Analysis and Management Skills', 'Risk Assessment and Management Skills', 
      'Customer Service and Interpersonal Skills', 'Attention to Detail and Accuracy', 'Problem-Solving and Decision-Making Skills', 'Communication and Presentation Skills']
  },
  {
    name: "Chartered Accountant (CA)",
    skills: ['Financial Analysis and Management Skills', 'Attention to Detail and Accuracy', 
      'Problem-Solving and Decision-Making Skills', 'Ethical and Professional Standards', 'Excellent Communication and Interpersonal Skills', 'Strong Analytical and Numerical Abilities']
  },
  {
    name: "UPSC",
    skills: ['Critical Reading and Comprehension Skills', 'Analytical and Logical Reasoning Skills', 
      'Excellent Communication and Writing Skills', 'In-depth Knowledge of the Syllabus and Current Affairs', 'Time Management and Organization Skills', 'Problem-Solving and Decision-Making Skills']
  },
  {
    name: "Anthropology",
    skills: ['Critical Thinking and Analytical Skills', 'Research and Investigation Skills', 
      'Excellent Communication and Interpersonal Skills', 'Cultural Awareness and Sensitivity', 'Attention to Detail and Accuracy', 'Ability to Work Independently and in a Team Environment']
  },
  {
    name: "Communication",
    skills: ['Excellent Written and Verbal Communication Skills', 'Active Listening and Observational Skills', 
      'Critical Thinking and Analytical Skills', 'Interpersonal and Intercultural Communication Skills', 'Social Media and Digital Communication Skills', 'Negotiation and Conflict Resolution Skills']
  },
  {
    name: "Cultural Studies",
    skills: ['Critical Thinking and Analytical Skills', 'Cross-Cultural Awareness and Sensitivity', 
      'Strong Research and Writing Skills', 'Communication and Presentation Skills', 'Ability to Work Independently and in a Team Environment', 'Flexibility and Adaptability to New and Diverse Situations']
  },
  {
    name: "History",
    skills: ['Strong Research and Writing Skills', 'Critical Thinking and Analytical Skills', 
      'Attention to Detail and Accuracy', 'Effective Communication and Presentation Skills', 'Ability to Synthesize and Interpret Complex Information', 'Openness to Different Perspectives and Interpretations']
  },
  {
    name: "Languages",
    skills: ['Fluency in One or More Foreign Languages', 'Strong Written and Verbal Communication Skills', 
      'Cultural Awareness and Sensitivity', 'Attention to Detail and Accuracy', 'Strong Research and Analytical Skills', 'Flexibility and Adaptability to Different Contexts and Settings']
  },
  {
    name: "Literature",
    skills: ['Strong Reading and Analytical Skills', 'Effective Writing and Communication Skills', 
      'Research and Information Retrieval Skills', 'Critical Thinking and Interpretation Skills', 'Attention to Detail and Accuracy', 'Understanding and Appreciation of Different Literary Genres and Traditions']
  },
  {
    name: "Philosophy",
    skills: ['Critical Thinking and Reasoning', 'Analytical and Problem-Solving Skills', 
      'Effective Writing and Communication Skills', 'Research and Information Retrieval Skills', 'Ability to Evaluate and Construct Arguments', 'Openness to Different Perspectives and Ideas']
  },
  {
    name: "Religious Studies",
    skills: ['Analytical and Critical Thinking', 'Research and Information Retrieval Skills', 
      'Effective Writing and Communication Skills', 'Interdisciplinary Knowledge and Application', 'Cultural and Contextual Understanding', 'Respectful and Ethical Engagement with Religious Diversity']
  },
  {
    name: "Visual and Performing Arts",
    skills: ['Creativity and Imagination', 'Artistic and Technical Skills', 
      'Critical and Analytical Thinking', 'Effective Communication and Presentation', 'Collaboration and Teamwork', 'Adaptability and Flexibility']
  },
  {
    name: "Agriculture",
    skills: ['Scientific Knowledge and Methodology', 'Critical and Analytical Thinking', 
      'Problem-Solving and Decision-Making', 'Communication and Interpersonal Skills', 'Organizational and Management Skills', 'Adaptability and Flexibility']
  },
  {
    name: "Bachelor of Science",
    skills: ['Scientific Knowledge and Methodology', 'Critical and Analytical Thinking', 
      'Problem-Solving and Decision-Making', 'Communication and Interpersonal Skills', 'Organizational and Management Skills', 'Attention to Detail and Accuracy']
  },
  {
    name: "Home Science",
    skills: ['Nutrition and Health Knowledge', 'Home Management and Resourcefulness', 
      'Effective Communication Skills', 'Analytical and Critical Thinking', 'Problem-Solving and Decision-Making', 'Interpersonal and Counseling Skills']
  },
  {
    name: "Hotel Management",
    skills: ['Customer Service and Hospitality Skills', 'Organizational and Time Management Skills', 
      'Financial and Business Management Skills', 'Communication and Interpersonal Skills', 'Leadership and Team Management Skills', 'Problem-Solving and Decision-Making']
  },
  {
    name: "Medicine (MBBS)",
    skills: ['Analytical and Critical Thinking', 'Attention to Detail', 
      'Communication and Interpersonal Skills', 'Leadership and Team Management Skills', 'Problem-Solving and Decision-Making', 'Empathy and Compassion']
  },
  {
    name: "National Defence Academy (NDA)",
    skills: ['Physical Fitness and Endurance', 'Leadership and Team Management Skills', 
      'Discipline and Time Management', 'Problem-Solving and Decision-Making', 'Communication and Interpersonal Skills', 'Strategic Thinking and Planning']
  },
  {
    name: "Nursing",
    skills: ['Empathy and Compassion', 'Critical Thinking and Problem Solving', 
      'Communication and Interpersonal Skills', 'Attention to Detail and Accuracy', 'Organizational and Time Management Skills', 'Physical Stamina and Endurance']
  },
  {
    name: "Pharmacy",
    skills: ['Attention to Detail and Accuracy', 'Critical Thinking and Problem Solving', 
      'Strong Science and Math Skills', 'Excellent Communication and Interpersonal Skills', 'Organizational and Time Management Skills', 'Ethical and Legal Awareness']
  },
  {
    name: "Technology",
    skills: ['Programming and Coding Skills', 'Problem Solving and Analytical Skills', 
      'Creativity and Innovation', 'Teamwork and Collaboration', 'Strong Communication Skills', 'Continuous Learning and Adaptability']
  },      
    ]

const Recommendedroute=()=> {
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
        if(titleWithMaxMatchedSkills === "History" || 
           titleWithMaxMatchedSkills === "Philosophy" || 
           titleWithMaxMatchedSkills === "Literature"|| 
           titleWithMaxMatchedSkills === "Religious Studies" || 
           titleWithMaxMatchedSkills === "Languages" || 
           titleWithMaxMatchedSkills === "Visual and Performing Arts" || 
           titleWithMaxMatchedSkills === "Cultural Studies" || 
           titleWithMaxMatchedSkills === "Communication" || 
           titleWithMaxMatchedSkills === "Anthropology" ){
      alert(`Based on your selected skills, we recommend you to explore  ${titleWithMaxMatchedSkills} field. Go to HOME ->HUMANITIES -> ${titleWithMaxMatchedSkills}`);
    }
    if(titleWithMaxMatchedSkills === "UPSC" || 
           titleWithMaxMatchedSkills === "Chartered Accountant (CA)" || 
           titleWithMaxMatchedSkills === "Banking and Insurance"|| 
           titleWithMaxMatchedSkills === "Bachelor of Commerce (BCom)" || 
           titleWithMaxMatchedSkills === "Bachelor of Education" || 
           titleWithMaxMatchedSkills === "Business Management"  ){
      alert(`Based on your selected skills, we recommend you to explore  ${titleWithMaxMatchedSkills} field. Go to HOME -> COMMERCE -> ${titleWithMaxMatchedSkills}`);
    }
    if(titleWithMaxMatchedSkills === "Technology" || 
           titleWithMaxMatchedSkills === "Medicine (MBBS)" || 
           titleWithMaxMatchedSkills === "Bachelor of Science"|| 
           titleWithMaxMatchedSkills === "Agriculture" || 
           titleWithMaxMatchedSkills === "Pharmacy" || 
           titleWithMaxMatchedSkills === "Nursing" || 
           titleWithMaxMatchedSkills === "Home Science"|| 
           titleWithMaxMatchedSkills === "Hotel Management" || 
           titleWithMaxMatchedSkills === "National Defence Academy (NDA)"  ){
      alert(`Based on your selected skills, we recommend you to explore  ${titleWithMaxMatchedSkills} field. Go to HOME -> COMMERCE -> ${titleWithMaxMatchedSkills}`);
    }
    else{
    alert(`Based on your selected skills, we recommend you to explore  ${titleWithMaxMatchedSkills} field. Go to HOME -> ARTS -> ${titleWithMaxMatchedSkills}`);
    }
  }
    setSelectedSkills({});
   
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
      <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexWrap: 'wrap' }}>
        {Object.keys(skillCheckboxes).map(skill => (
          <label key={skill} style={{ width: '33.33%', boxSizing: 'border-box', padding: '5px', margin: '10px 0' }}>
            <input type="checkbox" checked={selectedSkills[skill]} onChange={() => handleSkillSelect(skill)} />
            {skill}
          </label>
        ))}
        <br />
        <button className="text-xl rounded-lg text-white font-semibold bg-teal-500 p-3 m-3" type="submit">Find your recommended path</button>
      </form>
    </div>
  );
}

export default Recommendedroute;
