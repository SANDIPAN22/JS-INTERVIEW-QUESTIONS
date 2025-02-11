const WorkEx = ({data, handleDataChange}) => {
    return (<>
   <div id="work-container">
        <p>Please select the correct choice from below options :</p>

        <div className="inp-field"><input type="radio" name="work-exp" value="atleast_5" checked={data['work-exp'] === "atleast_5"} onChange={handleDataChange} /> Atleast 5 years of Experience </div>
        <div className="inp-field"><input type="radio" name="work-exp" value="atleast_10" checked={data['work-exp'] === "atleast_10"} onChange={handleDataChange}/> Atleast 10 years of Experience </div>
        <div className="inp-field"><input type="radio" name="work-exp" value="atleast_15" checked={data['work-exp'] === "atleast_15"} onChange={handleDataChange}/> Atleast 15 years of Experience </div>
        <div className="inp-field"><input type="radio" name="work-exp" value="atleast_20" checked={data['work-exp'] === "atleast_20"} onChange={handleDataChange}/> Atleast 20 years of Experience </div>
    </div>
    
    </>)
}

export default WorkEx