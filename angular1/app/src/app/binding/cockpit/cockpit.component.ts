import { Component } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  newServerName = '';
  newServerContent = '';

  onAddServer(){
    // this.serverElements.push({
    //   type: 'server',
    //   name:this.newServerName,
    //   content:this.newServerContent
      
    // }
    
    // )
    // console.log(this.serverElements);
    
  }

  onAddBlueprint(){
    // this.serverElements.push({
    //   type:'blueprint',
    //   name:this.newServerName,
    //   content:this.newServerContent
    // });
  }
}
