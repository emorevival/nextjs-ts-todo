export interface ITask {
  taskName: string;
  deadline: {
    taskDate: Date;
    taskTime: Date;
  };
}
