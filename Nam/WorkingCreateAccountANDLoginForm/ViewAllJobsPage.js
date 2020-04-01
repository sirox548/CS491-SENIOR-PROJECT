import React, { Component } from 'react';

class App extends Component {

    constructor(props){
        super(props);
        this.state={
            items: [],
            isLoaded: false,
        }
    }

componentDidMount(){

    fetch('https://be0nkygd1e.execute-api.us-east-1.amazonaws.com/viewAllJobs')

//     fetch('https://be0nkygd1e.execute-api.us-east-1.amazonaws.com/viewAllJobs', 
//     {
//         method: 'post',
//         headers: 
//         {
//         "Content-Type": "application/json",
//         'Accept': 'application/json'
//         },
//         body: JSON.stringify(this.state)
//   })
    .then(res => res.json())
    .then(json => {
        this.setState({
            isLoaded: true,
            items: json,
        })

    });

}
render(){

var { isLoaded, items } = this.state;

if (!isLoaded) {
    return <div>Loading...</div>
}
else{

    return(
        <div className="App">
                {/* Data has been loaded */}

                <ul>
                    {items.map(item => (
                        <li key={item.id}>
                           
                      <h3><b>{item.title}</b></h3> 
                      <b>Salary:</b> 
                      <b></b> {item.salary} 
                      <br></br>
                      <br></br>
                      <b>Description:</b> 
                      <b></b> {item.description} 
                      <br></br>
                      <br></br>
                      <b>Location:</b> 
                      <b></b> {item.location}
                      <br></br>           
                      <b>Years of Experience:</b> 
                      <b></b> {item.yearsexp} 
                      <br></br>
                      <b>Skills Required:</b> 
                      <b></b> {item.skills}
                      <br></br>
                      <br></br>
                        </li>
                    ))}
                </ul>
        </div>
        
    );
}
}

}

export default App;
