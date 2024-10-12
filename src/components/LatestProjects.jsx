import React from 'react';

const LatestProjects = () => {
  const projects = [
    { name: 'Project Apollo', start: '01/01/2023', end: '31/06/2023', status: 'Done', assignee: 'Vanessa Tucker' },
    { name: 'Project Fireball', start: '01/01/2023', end: '31/06/2023', status: 'Cancelled', assignee: 'William Harris' },
    { name: 'Project Hades', start: '01/01/2023', end: '31/06/2023', status: 'Done', assignee: 'Sharon Lessman' },
    { name: 'Project Nitro', start: '01/01/2023', end: '31/06/2023', status: 'In progress', assignee: 'Vanessa Tucker' },
  ];

  return (
    <div className="card">
      <div className="card-header">
        <h5 className="card-title">Latest Projects</h5>
      </div>
      <table className="table table-hover my-0">
        <thead>
          <tr>
            <th>Name</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Status</th>
            <th>Assignee</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <tr key={index}>
              <td>{project.name}</td>
              <td>{project.start}</td>
              <td>{project.end}</td>
              <td><span className={`badge bg-${project.status === 'Done' ? 'success' : 'warning'}`}>{project.status}</span></td>
              <td>{project.assignee}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LatestProjects;
