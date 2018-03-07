import React from 'react';
import PropTypes from 'prop-types';
import { GlobalHeader, PageHeader } from 'react-wood-duck';
import { DashboardEnumerableShape } from './shapes';

const propTypes = {
  resources: PropTypes.arrayOf(DashboardEnumerableShape),
  services: PropTypes.arrayOf(DashboardEnumerableShape),
};

const defaultProps = {
  resources: [],
  services: [],
};

const TileBank = ({ items, render, renderWrapper }) => {
  const nodes = [];
  [...items].forEach((d, i) => {
    nodes.push(renderWrapper(render(d), d.id));
    if (i && 0 === (i + 1) % 2) {
      nodes.push(<div key={`sm-${i}`} className="clearfix visible-sm-block" />);
    }
    if (i && 0 === (i + 1) % 3) {
      nodes.push(
        <div
          key={`md-${i}`}
          className="clearfix visible-md-block visible-lg-block visible-xl-block"
        />
      );
    }
  });
  return <div className="row">{nodes}</div>;
};

TileBank.propTypes = {
  render: PropTypes.func.isRequired,
};

TileBank.defaultProps = {
  render: ({ id, name, roles, summary, link: { text, href } }) => (
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title">{name}</h3>
      </div>
      <div className="panel-body">
        <div>{summary}</div>
        <div className="text-right">
          <a className="btn btn-default" href={href} role="button">
            Go
          </a>
        </div>
      </div>
    </div>
  ),
  renderWrapper: (children, id) => (
    <div className="col-md-4 col-sm-6" key={id}>
      {children}
    </div>
  ),
};

const Dashboard = ({ services, resources }) => (
  <div>
    <GlobalHeader />
    <PageHeader pageTitle="Services & Resources" button={null} />
    <div className="container">
      <h3>Services</h3>
      <TileBank items={services} />
      <h3>Resources</h3>
      <TileBank items={resources} />
    </div>
  </div>
);

Dashboard.propTypes = propTypes;
Dashboard.defaultProps = defaultProps;

export default Dashboard;
