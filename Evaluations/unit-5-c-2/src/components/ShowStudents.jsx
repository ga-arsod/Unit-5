import { useEffect, useState } from "react";

export const ShowStudents = () => {

    const [list, setList] = useState([]);
    const [sortBy, sortByset] = useState();
    const [sortOrder, sortOrderSet] = useState();

useEffect(() => {
    getData();
    // console.log(list);

    return function cleanup() {

    }

}, []);

const getData = async () => {
    
    const data = await fetch("http://localhost:8080/students")
    .then((d) => d.json());

    setList(data);
}

const handleChange = (elem) => {
    const {value} = elem.target;

    if(value == "asc" || value == "desc") {
      sortOrderSet(value);
    }
    else {
      sortByset(value);
    }
}  

const sortFun = () => {
      if(sortOrder == "asc") {
        list.sort((a,b) => {
          console.log(a[sortBy])
          return a[sortBy] - b[sortBy]
        })
        // console.log("Hello")
      }

      if(sortOrder == "desc") {
        list.sort((a,b) => {
          return b[sortBy] - a[sortBy];
        })
      }
    }

  return (
    <div>
      <div className="controls">
        <div>
          Sort By:{" "}
          <select onChange={handleChange}
            // select dropdown needs both value and onChange
            className="sortby"
          >
            <option value="first_name">First Name</option>
            <option value="gender">Gender</option>
            <option value="age">Age</option>
            <option value="tenth_score">10th Score</option>
            <option value="twelth_score">12th Score</option>
          </select>
        </div>
        <div>
          Order:
          <select onChange={handleChange}
            // select dropdown needs both value and onChange
            className="sortorder"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
        <button onClick={sortFun} className="sort">sort</button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Age</th>
            <th>10th Score</th>
            <th>12th Score</th>
            <th>Branch</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {/* populate all rows like below: */}
          {list.map((elem, key) => {

            return (
            <tr className="row" key={key}>
                <td className="first_name">{elem.first_name}</td>
                <td className="last_name">{elem.last_name}</td>
                <td className="email">{elem.email}</td>
                <td className="gender">{elem.gender}</td>
                <td className="age">{elem.age}</td>
                <td className="tenth_score">{elem.tenth_score}</td>
                <td className="twelth_score">{elem.twelth_score}</td>
                <td className="preferred_branch">{elem.preferred_branch}</td>
          </tr> 
          )
          })}
        </tbody>
      </table>
    </div>
  );
};