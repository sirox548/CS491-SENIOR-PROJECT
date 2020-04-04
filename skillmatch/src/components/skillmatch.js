import React, { Component } from "react";
import { Table, Button } from "reactstrap";
import "../components/skillmatch.css";

const JobList = [];
const ResumeList = [];

class Skillmatch extends Component {
  state = {
    isLoaded: true,
    JobList,
    ResumeList
  };

  async componentDidMount() {
    const url =
      "https://j8dl6rd32f.execute-api.us-east-1.amazonaws.com/skillMatch";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ JobList: data.jobData, isLoaded: false });
    this.setState({ ResumeList: data.skillsData, isLoaded: false });
    console.log(data.jobData);
    console.log(data.skillsData);
  }

  // SKILLMATCHING COMPONENT
  render() {
    ///RESUME SKILL FOR PERCENTAGE MATCHING
    this.state.ResumeList.map((items, i) => {
      const Array1 = [];
      Array1.push(items.type);

      Array1.forEach(element => console.log(Array1));
      console.log(Array1.length);

      return <div key={i}>{items.username}</div>;
    });

    return (
      <div className="container">
        <div>
          <Table striped bordered hover id="table">
            <thead className="t-header">
              <tr>
                <th className="column1">Job Title</th>
                <th className="column2">Description</th>
                <th className="column3">Required Skill</th>
                <th className="column4">Location</th>
                <th className="column5">salary</th>
                <th className="column6">Mininum Experience</th>
                <th className="column7"> Apply Now</th>
                <th className="column8">Percentage Matching</th>
              </tr>
            </thead>

            <tbody>
              {this.state.JobList.map((items, index) => (
                <tr className="txt" key={index}>
                  <td className="row1">{items.description}</td>
                  <td className="row1">{items.title}</td>
                  <td className="row1">{items.skills}</td>
                  <td className="row1">{items.location}</td>
                  <td className="row1">{items.salary}</td>
                  <td className="row1">{items.yearsexp}</td>
                  <td className="row8">
                    <Button variant="danger" size="sm">
                      Apply
                    </Button>
                  </td>
                  <td></td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}
export default Skillmatch;
