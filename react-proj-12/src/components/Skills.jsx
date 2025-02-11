
const Skills = ({data, setData}) => {

    const handleSkills = (e) => {
        const {checked, name} = e.target
       
        if(checked){
            
            setData(prev => {
                if(prev.skills) return {...prev, skills:[...prev.skills , name]}
                else return {...prev, skills:[name]}
            })
        }
        else{
            
            setData(prev => {
                if(prev.skills) return ({...prev, skills:prev.skills.filter(s => s!= name)})
                
            })
        }
        
    }

    
    return (<>
    <div id="skills-container">
        <p>Please select your skills: </p>
        <div className="inp-field">
            <input type="checkbox" name="Javascript" checked={data['skills'] && data['skills'].includes("Javascript")} onChange={handleSkills}/> Javascript
        </div>
        <div className="inp-field">
            <input type="checkbox" name="Typescript" checked={data['skills'] && data['skills'].includes("Typescript")} onChange={handleSkills} /> Typescript
        </div>
        <div className="inp-field">
            <input type="checkbox" name="Python" checked={data['skills'] && data['skills'].includes("Python")} onChange={handleSkills} /> Python
        </div>
        <div className="inp-field">
            <input type="checkbox" name="AWS" checked={data['skills'] && data['skills'].includes("AWS")} onChange={handleSkills} /> AWS
        </div>
        <div className="inp-field">
            <input type="checkbox" name="Firebase" checked={data['skills'] && data['skills'].includes("Firebase")} onChange={handleSkills} /> Firebase
        </div>
    </div>
    </>)
}

export default Skills