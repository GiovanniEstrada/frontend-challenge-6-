import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

   tasks: any = [];
  
  result: any[] = this.tasks
  
  // Drag and Drop Event
  
  
  drop(event: CdkDragDrop<any []>){
  moveItemInArray(this.tasks, event.previousIndex, event.currentIndex)
  this.reorder()
  }


   textInput: string = "";
   items:number = this.tasks.length


    addTask():void{
      
      this.tasks.push({id:this.tasks.length, task: this.textInput, state: false})
      this.textInput = ""
      this.items = this.tasks.length

      console.log(this.tasks)
    }

    completed (id: number):void {
      const btnA = document.querySelectorAll(".successful");
      const btnB = document.querySelectorAll(".check")
      const text = document.querySelectorAll(".desc")
      console.log(id)

      btnA[id]?.classList.toggle("active")
      btnB[id]?.classList.toggle("active")
      text[id]?.classList.toggle("active")

      this.tasks[id].state = !this.tasks[id].state 
    }

    refresh() {
      
    }

    delete (id: number): void {
      this.result = []
      this.tasks.splice(id, 1)
      this.reorder()
    }

    reorder() {
      for(let i = 0; i < this.tasks.length; i++){
        this.tasks[i].id = i
      }
      this.result = this.tasks
    }


    filterAll () {
      const all = document.querySelector(".all")
      const active = document.querySelector(".active-btn")
      const completed = document.querySelector(".completed")

      all?.classList.add("focus")
      active?.classList.remove("focus")
      completed?.classList.remove("focus")

      this.result = []
      this.result = this.tasks
    }

    filterActive () {
      const all = document.querySelector(".all")
      const active = document.querySelector(".active-btn")
      const completed = document.querySelector(".completed")

      all?.classList.remove("focus")
      active?.classList.add("focus")
      completed?.classList.remove("focus")

      this.result = []
      this.tasks.forEach((data:any)=>{
        if(!data.state){
          this.result.push(data)
        }
      })
    }

    filterCompleted () {
      const all = document.querySelector(".all")
      const active = document.querySelector(".active-btn")
      const completed = document.querySelector(".completed")

      all?.classList.remove("focus")
      active?.classList.remove("focus")
      completed?.classList.add("focus")

      this.result = []
      this.tasks.forEach((data:any)=>{
        if(data.state){
          this.result.push(data)
        }
      })
    }

    clear() {
      this.result= []
      this.tasks.forEach((data:any)=>{
        if(!data.state){
          this.result.push(data)
        }
      })
      this.tasks = this.result
      this.filterAll()
    }

    darkMode():void {
      const header = document.getElementById("header")
      const data = document.querySelector(".data")
      const background = document.querySelector(".background")
      const logo = document.querySelector(".switch")
      const taskContainer = document.querySelector(".container-main")
      const filter = document.querySelector(".filter")

      const elements: any [] = []

      elements.push(header, data, background, logo, taskContainer, filter)
      console.log(elements)

      elements.forEach((data) =>{
        data?.classList.toggle("active")
      })
    }


    

  constructor() { 
    
  }

  ngOnInit(): void {

    
  }
  

}
