import Axios from "axios";


export function createLog (log){
    return {
        type: 'CREATE_LOG',
        value: log
    }
}

export function listLogs (id){
    console.log('made it to list logs')
    return dispatch => {
        fetch(`/api/projects/${id}/logs`)
        .then(res => res.json())
        .then(logs => {
            dispatch(setLog(logs))
            return logs;
        })
    }
}

export function setLog(logs){
    return {
      type: "LIST_LOGS",
      value: logs
    }
}

export function showLog (log){
    return {
        type: 'SHOW_LOG',
        value: log
    }
}

export function updateLog (log){
    return {
        type: 'UPDATE_LOG',
        value: log
    }
}

// export function deleteLog (log){
//     return {
//         type: 'DELETE_LOG',
//         value: log
//     }
// }


export const deleteLog = _id => async (dispatch, getState) => {
    const { logs } = getState()
    try {
        await Axios.delete(`/api/projects/:id/logs/${_id}`)
        dispatch({
            type: `DELETE_LOG`,
            payload: {
                blockers : logs,
                delete: _id
            }
        })
    } catch (err) {
       console.error(err.message)
    }
}