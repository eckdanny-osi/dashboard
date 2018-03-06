import React from 'react'
import PropTypes from 'prop-types';
import { GlobalHeader, PageHeader } from 'react-wood-duck';

const Dashboard = ({name}) => (
    <div>
        <GlobalHeader />
        <PageHeader
            pageTitle="Services & Resources"
            button={null}
        />
        <div className="container">

            <h2>Services</h2>

            <div className="row">
                <div className="col-md-4 col-sm-2">
                asdfasdf
                </div>
                <div className="col-md-4 col-sm-2">
                asdfasdf
                </div>
                <div className="col-md-4 col-sm-2">
                asdfasdf
                </div>
                <div className="col-md-4 col-sm-2">
                asdfasdf
                </div>
            </div>

            <h2>Resources</h2>

        <div className="row">
                <div className="col-md-4 col-sm-2">
                asdfasdf
                </div>
                <div className="col-md-4 col-sm-2">
                asdfasdf
                </div>
                <div className="col-md-4 col-sm-2">
                asdfasdf
                </div>
                <div className="col-md-4 col-sm-2">
                asdfasdf
                </div>
            </div>
        </div>
      </div>
)

Dashboard.defaultProps = {
  name: 'David'
}

Dashboard.propTypes = {
  name: PropTypes.string
}

export default Dashboard;
