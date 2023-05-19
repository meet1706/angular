import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {
  allowNewServer =false;
  colour = "red";
  // server = "no server was created";
  serverName = "Test Server";
  serverCreationStatus = "No server was created!"
  constructor(){
    setTimeout(() => {
      this.allowNewServer= true;
    },2000);
  }
  changeColour(){
    this.colour = "red";
  }
  onServerCreated(){
    this.serverCreationStatus= "server was created!! The name of the server is : " + this.serverName
    console.log(this.serverCreationStatus);
    
  }
  onUpdateServerName(event:any){
    this.serverName = event.target.value
    console.log(event);
  }
}
