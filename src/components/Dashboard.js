import React, { Component } from 'react'
import './styles/dash.css'
import TaskContainer from '../containers/TaskContainer'
import BlockerContainer from '../containers/BlockerContainer'
import Stats from './Stats'
import ProjectContainer from '../containers/ProjectContainer'
import Nav from './Nav'
// import PropTypes from 'prop-types'
// import { withRouter} from 'react-router-dom'

const Dashboard = () => {
    return(
        <div className='dashboard'>
            <Nav/>
            <ProjectContainer/>
            <Stats />
            <TaskContainer />
            <BlockerContainer />
        </div>
      )
}


Dashboard.propTypes = {

}

// export default withRouter(Dashboard)
export default Dashboard

// const refreshPage = () => {
//   window.location.reload(false);
// }

// onClick={refreshPage}