import React, { Component } from "react";

class JobDetails extends Component {
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
    // console.log(this.props);
    // console.log(this.props.match);
    const jobId = +this.props.match.params.jobId;
    console.log(jobId);
    const job = this.state.jobs.filter(job => job.id === jobId)[0];
    console.log(job);

    return (
      <table className="table table-bordered">
        <thead className="thead thead-light">
          <tr>
            <th>Job Id</th>
            <th>Job Description</th>
            <th>Experience</th>
            <th>Active?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{job.id}</td>
            <td>{job.description}</td>
            <td>{job.experience}</td>
            <td>{job.isActive ? "Yes" : "No"}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default JobDetails;
