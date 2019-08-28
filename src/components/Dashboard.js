import React, { useEffect } from 'react'
import './styles/dash.css'
import TaskContainer from '../containers/TaskContainer'
import BlockerContainer from '../containers/BlockerContainer'
import Stats from './Stats'
import ProjectContainer from '../containers/ProjectContainer'
import Nav from './Nav'
// import store from '../redux/store'
// import state from '../redux/state'

// import PropTypes from 'prop-types'

const Dashboard = (props) => {
  // console.log('dash store: ', store, store.getState())
  // useEffect(()=> {

  // })

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


// Dashboard.propTypes = {

// }

// export default withRouter(Dashboard)
export default Dashboard