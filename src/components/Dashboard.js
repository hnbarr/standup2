import React, { Component, useEffect } from 'react'
import './styles/dash.css'
import TaskContainer from '../containers/TaskContainer'
import BlockerContainer from '../containers/BlockerContainer'
import Stats from './Stats'
import ProjectContainer from '../containers/ProjectContainer'
import Nav from './Nav'
import store from '../redux/store'
import state from '../redux/state'

// import PropTypes from 'prop-types'
// import { withRouter} from 'react-router-dom'

const Dashboard = (props) => {
  
  setTimeout(() => {
    console.log('dashboard store: ', store.getState().logs)
  }, 50)

  // needing to refresh the logs in state. Redux is hanging onto previously clicked logs and saving those until refresh

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