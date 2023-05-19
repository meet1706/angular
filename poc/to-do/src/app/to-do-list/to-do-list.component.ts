import { Component } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent {
  title = 'To-Do List';
  list:any[]=[];

  addTask(item:string){
    this.list.push({id:this.list.length,name:item})
  }
  
  removeTask(id:number){
    this.list = this.list.filter(item=> item.id !== id)
  }
}
