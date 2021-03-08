import React, { Component } from "react";
import JobDetails from "./JobDetails";
import { Link, Route } from "react-router-dom";

class Careers extends Component {
  state = {
    jobs: [
      {
        id: 101,
        description: "Java Full Stack Developer",
        isActive: true,
        experience: "5-7 yrs"
      },
      {
        id: 102,
        description: ".NET Full Stack Developer",
        isActive: true,
        experience: "5-7 yrs"
      },
      {
        id: 103,
        description: "DevOps Engineer",
        isActive: true,
        experience: "3-5 yrs"
      },
      {
        id: 104,
        description: "Solution Architect",
        isActive: true,
        experience: "9-11 yrs"
      }
    ]
  };

  render() {
    return (
      <>
        <h5>Current Job vacancies:</h5>
        <ul>
          {this.state.jobs.map(job => {
            return (
              <Link to={`/careers/jobs/${job.id}`} key={job.id}>
                <li>{job.description}</li>
              </Link>
            );
          })}
        </ul>
        <br></br>
        <Route path="/careers/jobs/:jobId" component={JobDetails} />
      </>
    );
  }
}

export default Careers;
