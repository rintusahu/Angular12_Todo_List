import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgConfirmService } from 'ng-confirm-box';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  constructor(private confirmservice: NgConfirmService){

  }

  taskArray = [{taskName: 'TodoList' , isBook: false }]
  
  addTask(form: NgForm){
    console.log(form);
    this.taskArray.push({
      taskName: form.controls['task'].value,
      isBook : false
  });
   form.reset();
  }

  onDelete(index:number){
    this.confirmservice.showConfirm("Are you sure want to delete",
     ()=>{
      console.log(index);
      this.taskArray.splice(index,1);
     },
     ()=>{
       
     }
    )
  }

  onCheck(index:number){
    console.log(this.taskArray);
    this.taskArray[index].isBook = !this.taskArray[index].isBook;
  }
}
