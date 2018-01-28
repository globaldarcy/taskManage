import { NgModule } from '@angular/core';
import { SharedModule } from "../shared/shared.module";
import { TaskHomeComponent } from './task-home/task-home.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { TaskHeaderComponent } from './task-header/task-header.component';
import { TaskHomeRoutingModule } from "./task-routing.module";
import { NewTaskComponent } from './new-task/new-task.component';
import { CopyTaskComponent } from './copy-task/copy-task.component';
import { NewTaskListComponent } from './new-task-list/new-task-list.component';
import { QuickTaskComponent } from './quick-task/quick-task.component';

@NgModule({
  imports: [
    SharedModule,
    TaskHomeRoutingModule
  ],
  declarations: [
    TaskHomeComponent,
    TaskListComponent,
    TaskItemComponent,
    TaskHeaderComponent,
    NewTaskComponent,
    CopyTaskComponent,
    NewTaskListComponent,
    QuickTaskComponent
  ],
  entryComponents: [ // 刚进入模块, 就要立刻加载的, 而不是等调用它的时候在去加载
    NewTaskComponent,
    CopyTaskComponent,
    NewTaskListComponent
  ]
})
export class TaskModule { }
