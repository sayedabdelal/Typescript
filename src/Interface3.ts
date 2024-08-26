// Define an interface for a Task
interface Task {
    id: number;
    title: string;
    description: string;
    completed: boolean;
}

  // Sample tasks array
const tasks: Task[] = [];
  
  // Function to add a task
function addTask(task: Task): void {
    tasks.push(task);
}
  
  // Function to mark a task as completed
  function completeTask(taskId: number): void {
    const task = tasks.find(t => t.id === taskId);
    if (task) {
      task.completed = true;
      console.log(`Task "${task.title}" is completed.`);
    } else {
      console.log('Task not found.');
    }
  }
  
  // Function to list all tasks
  function listTasks(): void {
    tasks.forEach(task => {
      console.log(`${task.id}. ${task.title} - ${task.completed ? 'Done' : 'Pending'}`);
    });
  }
  
  // Adding some tasks
  addTask({ id: 1, title: 'Buy groceries', description: 'Milk, Bread, Eggs', completed: false });
  addTask({ id: 2, title: 'Write TypeScript code', description: 'Practice interfaces', completed: false });
  
  // Listing tasks
  console.log('All tasks:');
  listTasks();
  
  // Marking a task as completed
  completeTask(1);
  
  // Listing tasks again to see the updated status
  console.log('\nUpdated tasks:');
  listTasks();
  