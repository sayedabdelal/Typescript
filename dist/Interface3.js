"use strict";
const tasks = [];
function addTask(task) {
    tasks.push(task);
}
function completeTask(taskId) {
    const task = tasks.find(t => t.id === taskId);
    if (task) {
        task.completed = true;
        console.log(`Task "${task.title}" is completed.`);
    }
    else {
        console.log('Task not found.');
    }
}
function listTasks() {
    tasks.forEach(task => {
        console.log(`${task.id}. ${task.title} - ${task.completed ? 'Done' : 'Pending'}`);
    });
}
addTask({ id: 1, title: 'Buy groceries', description: 'Milk, Bread, Eggs', completed: false });
addTask({ id: 2, title: 'Write TypeScript code', description: 'Practice interfaces', completed: false });
console.log('All tasks:');
listTasks();
completeTask(1);
console.log('\nUpdated tasks:');
listTasks();
//# sourceMappingURL=Interface3.js.map