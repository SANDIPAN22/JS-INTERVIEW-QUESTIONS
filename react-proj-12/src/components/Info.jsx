const Info = ({data, handleDataChange}) => {
    return (<>
    <div id="info-container">
        <div className="inp-field">
        <label >Name: </label>
        <input type="text" name="name" onChange={handleDataChange} value={data.name}/>
        </div>
        <div className="inp-field">
        <label >Email: </label>
        <input type="email" name="email" onChange={handleDataChange} value={data.email}/>
        </div>
        <div className="inp-field">
        <label >Age: </label>
        <input type="number" name="age" onChange={handleDataChange} value={data.age}/>
        </div>
    </div>
    </>)
}

export default Info