import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
let tasks = [
  {
    name: 'Task 1',
    done: false
  },
  {
    name: 'Task 2',
    done: false
  },
  {
    name: 'Task 3',
    done: false
  },
  {
    name: 'Task 4',
    done: false
  },
  {
    name: 'Task 5',
    done: false
  }
];

class TaskApi {
  static getAllTasks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], tasks));
      }, delay);
    });
  }

  static saveTask(task) {
    task = Object.assign({}, task);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        tasks.push({
          name: task.task.name,
          done: task.task.done
        });
        resolve(task);
      }, delay);
    });
  }

  static deleteTask(index) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        tasks.splice(index, 1);
        console.log(tasks);
        resolve(tasks);
      }, delay);
    });
  }

  static updateTask(index) {
      return new Promise((resolve,reject) => {
        setTimeout(() => {
            tasks = tasks.map((task,i) => {
                if(i === index) {
                    return Object.assign({}, task, {
                        done:true
                    });
                }
                return task;
            });
            resolve(tasks);
        }, delay);
      });
  }
}

export default TaskApi;