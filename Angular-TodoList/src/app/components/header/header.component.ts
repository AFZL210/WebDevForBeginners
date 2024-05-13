import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title: string = 'Task Tracker';
  // @ts-ignore
  showAddTask: boolean = true;
  // @ts-ignore
  subscription: Subscription;


  constructor(
    private uiService: UiService
  ) {

    this.subscription = this.uiService.onToggle().subscribe(value => {
      this.showAddTask = value;
    })
  }

  ngOnInit() {
    
  }

  toggleAddTask() {
    console.log("toggle add task");
    this.uiService.toggleAddTask();
  }
}
