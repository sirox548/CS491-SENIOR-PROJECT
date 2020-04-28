import React, { Component } from 'react';
import styles from './ViewJobsList.css';
import {Helmet} from 'react-helmet';
import logo from './profilepic.jpeg'; // with import


class App extends Component {

    constructor(props){
        super(props);
        this.state={
            items: [],
            isLoaded: false,
        }
    }

componentDidMount(){

    fetch('https://wsvvhksamc.execute-api.us-east-1.amazonaws.com/viewProfile')

//     fetch('https://jsonplaceholder.typicode.com/users', 
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

var { isLoaded, items} = this.state;

if (!isLoaded) {
    return <div>Loading...</div>
}
else{

    return(
        <div className="Dude">
                {/* Data has been loaded */}

                <h2 className="h2"> Welcome to your Profile.</h2>
                <img src={logo} className="logo"/>
                <Helmet>
                <style>{
                'body { background-color: #eeeeee ; }'
                                // 'container { background-color: rgb(255, 50, 50) ; }'
                }</style>
            </Helmet>
                <ul className={styles}>

                    {items.map(item => (
                       <li key={item.id}>
                    
                      <h3><b>{item.firstName}  </b>  {item.lastName}</h3> 
                      <b>Username:</b> 
                      <b></b> {item.username} 
                      {/* <br></br> */}
                      <br></br>
                      <b>Email:</b> 
                      <b></b> {item.email} 
                      <br></br>
                      {/* <br></br>            */}
                      <b>Education:</b> 
                      <b></b> {item.school} 
                      <br></br>
                      <br></br>
                      <b>Skills:</b> 
                      <b></b> {item.type}
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
