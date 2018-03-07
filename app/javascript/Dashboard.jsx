import React from 'react';
import PropTypes from 'prop-types';
import { GlobalHeader, PageHeader } from 'react-wood-duck';

// const SERVICES = [
//   {
//     name: 'Snapshot',
//     href: '',
//   },
//   {
//     name: 'Hotline',
//     href: '',
//   },
//   {
//     name: 'CALS (Facilities)',
//     href: '',
//   },
//   {
//     name: 'CALS (RFA)',
//     href: '',
//   },
//   {
//     name: 'Case Management',
//     href: '',
//   },
// ];

// const RESOURCES = [
//   {
//     name: 'CWS-CARES Training On-Demand',
//   },
//   {
//     name: 'Release Notes',
//   },
// ];

const Dashboard = ({ services, resources }) => (
  <div>
    <GlobalHeader />
    <PageHeader pageTitle="Services & Resources" button={null} />
    <div className="container">
      <h2>Services</h2>
      <div className="row">
        {services.map(({ name }) => (
          <div className="col-md-4 col-sm-6" key={name}>
            {name}
          </div>
        ))}
      </div>
      <h2>Resources</h2>
      <div className="row">
        {resources.map(({ name }) => (
          <div className="col-md-4 col-sm-6" key={name}>
            {name}
          </div>
        ))}
      </div>
    </div>
  </div>
);

Dashboard.defaultProps = {
  name: 'David',
};

Dashboard.propTypes = {
  name: PropTypes.string,
};

export default Dashboard;
