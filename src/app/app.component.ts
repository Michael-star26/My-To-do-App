import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TodoItem } from './todoItem';
import { TodoList } from './todoList';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,MatSlideToggleModule,MatInputModule,MatFormFieldModule,MatCheckboxModule,MatTableModule,MatBadgeModule,MatIconModule,MatToolbarModule,MatButtonModule,FormsModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private list=new TodoList("Mike",[new TodoItem("Go for a run",true),new TodoItem("Get Some flowers"),new TodoItem("Play Some Reggae Music")]);
  get username():string{
    return this.list.user
  }
  get itemCount():number{
    return this.list.items.filter(item=>!item.complete).length;
  }
  get items():readonly TodoItem[]{
    return this.list.items.filter(items=>this.showComplete||!items.complete)
  }
  addItem(newItem:string){
    if(newItem!=""){
      this.list.addItem(newItem)
    }
  }
  showComplete:boolean=false;
}
