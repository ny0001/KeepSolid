

import axios from 'axios';

const HTTP_Requests = {
    state: {

    },
    getters: {

    },
    mutations: {

    },
    actions: {
        requestGetAllTasks(context, mail) {
            const url = 'https://raysael.herokuapp.com/todo?author='; 
            axios
                .get(`${url}${mail}`)
                .then(response =>  {
                    const tasksArr = response.data;
                    tasksArr.forEach(taskObj => {
                        context.commit('mutationAddNewTask', taskObj);
                    });
                })
                .catch((err) => {
                    console.error(err);
                    alert('Something wrong...');
                });
        },
        requestAddNewTask(context, taskObj) {
            const url = 'https://raysael.herokuapp.com/todo'; 
            axios
                .post(`${url}`, taskObj, {
                    headers: {    
                        'Content-Type': 'application/json;charset=UTF-8',
                        "Access-Control-Allow-Origin": "*",
                    }
                })
                .then(response =>  {
                    context.commit('mutationAddNewTask',  response.data);
                })
                .catch((err) => {
                    console.error(err);
                    alert('Something wrong...');
                });
        },
        requestEditTask(context, taskObj) {
            const taskID = this.getters.getTaskID; 
            const url = 'https://raysael.herokuapp.com/todo/';
            axios
                .patch(`${url}${taskID}`, taskObj)
                .then(response =>  {
                    console.log(response)
                })
                .catch((err) => {
                    console.error(err);
                    alert('Something wrong...');
                });
        },
        requestDeleteTask(context, taskID) {
            const url = 'https://raysael.herokuapp.com/todo/';
            axios
                .delete(`${url}${taskID}`)
                .then(response =>  {
                    if(response.statusText == 'OK') {
                        context.commit('deleteTaskFromTOSOs', taskID);
                    }
                })
                .catch((err) => {
                    console.error(err);
                    alert('Something wrong...');
                });
        },

    },
}

export default HTTP_Requests; 