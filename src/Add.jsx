import React,{useState} from 'react';
function Add(){
    const [data,setData] = useState({});
    const [error,setError] = useState({});

    const handleValidation = () => {
        let err = {};
        let isValid = true;

        if(!data.name){
            err.name = "Enter Artical!";
            isValid = false;
        }

        if(!data.upvotes){
            err.upvotes = "Enter Upvotes!";
            isValid = false;
        }

        if(!data.date){
            err.date = "Select Date!";
            isValid = false;
        }

        setError(err);
        return isValid;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const validation = handleValidation();

        if(!validation){
            return;
        }

        const fetchData = JSON.parse(localStorage.getItem("ArticalSort")) || [];
        const updateData = [...fetchData,data];
        console.log(updateData);
        localStorage.setItem("ArticalSort",JSON.stringify(updateData));
        alert("Artical Saved Successfully!");
        setData({});
    }

    const handleLocalStorage = () => {
        localStorage.clear();
    }

    return(<>
        <h1>Add Artical!</h1>
        <form onSubmit={handleSubmit}>
            Enter Title Of Artical:<input type="text" name="name" value={data.name || ""} onChange={(e) => {setData({...data,name:e.target.value})}}/>
            <p style={{color:'red'}}>{error.name}</p>
            Upvotes:<input type="number" name="upvotes" value={data.upvotes || ""} onChange={(e) => {setData({...data,upvotes:e.target.value})}}/>
            <p style={{color:'red'}}>{error.upvotes}</p>
            Date:<input type="date" name="date" value={data.date || ""} onChange={(e) => {setData({...data,date:e.target.value})}}/>
            <p style={{color:'red'}}>{error.date}</p>
            <button type="submit">Submit Artical</button>
        </form>
        <button type="button" onClick={handleLocalStorage}>Clear Local Storage</button>
    </>)
}

export default Add