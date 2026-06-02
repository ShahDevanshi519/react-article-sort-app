import React,{useState,useEffect} from 'react';
function Display(){
    const [data,setData] = useState([]);
    const [sortUpvotes,setSortUpvotes] = useState("");
    const [sortDate,setSortDate] = useState("");
    // const [sortData,setSortData] = useState([]);
    useEffect(() => {
        const fetchData = JSON.parse(localStorage.getItem("ArticalSort")) || [];
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setData(fetchData);
    },[])

    const handleDelete = (key) => {
        const confirmation = window.confirm("Are You Sure You Want To Delete This Artical?");

        if(!confirmation){
            return;
        }

        const filterData = data.filter((_,index) => index !== key);
        setData(filterData);
    }

    let sortData = [...data]
    if(sortUpvotes === "hightolow"){
        sortData.sort((a,b) => Number(b.upvotes) - Number(a.upvotes))
    }

    if(sortUpvotes === "lowtohigh"){
        sortData.sort((a,b) => Number(a.upvotes) - Number(b.upvotes));
    }

    if(sortDate === "recent"){
        sortData.sort((a,b) => new Date(b.date) - new Date(a.date));
    }

    if(sortDate === "old"){
        sortData.sort((a,b) => new Date(a.date) - new Date(b.Date));
    }

    return(<>
        <h1>Display!</h1>
        <select onChange={(e) => setSortUpvotes(e.target.value)}>
            <option value="">Sort By Upvotes</option>
            <option value="hightolow">High To Low</option>
            <option value="lowtohigh">Low To High</option>
        </select>
        <select onChange={(e) => setSortDate(e.target.value)}>
            <option value="">Sort By Date</option>
            <option value="recent">Recent Date</option>
            <option value="old">Old Date</option>
        </select>

        <table border={1}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Upvotes</th>
                    <th>Date</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {sortData.map((val,key) => {
                    return(<tr key={key}>
                        <td>{key + 1}</td>
                        <td>{val.name}</td>
                        <td>{val.upvotes}</td>
                        <td>{val.date}</td>
                        <td><button onClick={() => handleDelete(key)}>Delete</button></td>
                    </tr>)
                })}
            </tbody>
        </table>
    </>)
}

export default Display