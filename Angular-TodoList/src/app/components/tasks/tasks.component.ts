import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})

export class TasksComponent {
  tasks: Task[] = [];

  constructor(
    private taskService: TaskService
  ) {

  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe((task) => {
      this.tasks = this.tasks.filter(t => t.id !== task.id);
    })
  }

  onToggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }

  addNewTask(task: Task) {
    this.taskService.addTask(task).subscribe((task) => {
      this.tasks.push(task);
    })
  }

  ngOnInit() {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

}
