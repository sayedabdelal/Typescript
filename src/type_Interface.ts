// Compare Interface and type


// . Extending in Interface
interface BaseTask {
    id: number;
    title: string;
}
  
interface DetailedTask extends BaseTask {
    description: string;
    completed: boolean;
}
// Extand in Tyepe
type BaseeTask = {
    id: number;
    title: string;
  };
  
  type DetaileedTask = BaseTask & {
    description: string;
    completed: boolean;
  };
// . Marge in Interface

interface Task {
    id: number;
  }
  
  interface Task {
    title: string;
  }

  // Merged interface
// Task is now { id: number; title: string; }

type Taskk = {
    id: number;
  };
  
  // Error: Duplicate identifier 'Task'.
//   type Taskk = {
//     title: string;
//   };
  