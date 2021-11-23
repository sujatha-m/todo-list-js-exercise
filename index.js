// eslint-disable-next-line func-style
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function() {
      console.log(`${this.title} has${this.complete ? " ": " not "}been completed`);
    },

    markCompleted: function() {
      this.complete = true;
    }
  }
  return task
}

const task1 = newTask ('clean Cat Litter','Take all the shit out of the litter box');

const task2 = newTask('Do Laundry', '😨');
const tasks = [task1, task2];
console.log(tasks);

task1.logState();
task1.markCompleted();
task1.logState();
