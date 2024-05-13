import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from '../../Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {

  text: string = '';
  day: string = '';
  reminder: boolean = false;

  @Output() onAddTask = new EventEmitter<Task>();

  onSubmit() {
    // console.log(this.text, this.day, this.reminder)

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    // emit event for adding a task

    this.text = '';
    this.day = '';
    this.reminder = false;

    this.onAddTask.emit(newTask);
  }
}
