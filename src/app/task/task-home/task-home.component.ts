import { Component, HostBinding, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewTaskComponent } from '../new-task/new-task.component';
import { CopyTaskComponent } from "../copy-task/copy-task.component";
import { ComfirmDialogComponent } from "../../shared/comfirm-dialog/comfirm-dialog.component";
import { NewTaskListComponent } from "../new-task-list/new-task-list.component";
import { slideToRight } from "../../animations/router.anim";

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss'],
  animations: [
    slideToRight
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskHomeComponent implements OnInit {

  @HostBinding('@routeAni') state;

  lists = [
    {
      id: 1,
      name: "待办",
      tasks: [
        {
          id: 1,
          desc: "任务一: 赶快出发去万达",
          completed: true,
          priority: 3,
          owner: {
            id: 1,
            name: '张三',
            avatar: 'avatars:svg-10'
          },
          dueDate: new Date(),
          reminder: new Date(),
        },
        {
          id: 2,
          desc: "任务二: 赶快出发去万达",
          completed: false,
          priority: 2,
          owner: {
            id: 2,
            name: '李四',
            avatar: 'avatars:svg-9'
          },
          dueDate: new Date(),
        },
        {
          id: 3,
          desc: "任务三: 赶快出发去万达",
          completed: true,
          priority: 1,
          owner: {
            id: 3,
            name: '王五',
            avatar: 'avatars:svg-8'
          },
          dueDate: new Date(),
        },
        {
          id: 4,
          desc: "任务四: 赶快出发去万达",
          completed: false,
          priority: 3,
          owner: {
            id: 4,
            name: '刘烨',
            avatar: 'avatars:svg-7'
          },
          dueDate: new Date(),
        },
      ]
    },
    {
      id: 2,
      name: "进行中",
      tasks: [
        {
          id: 1,
          desc: "任务一: 什么情况啊什么情况啊什么情况啊",
          completed: false,
          priority: 3,
          owner: {
            id: 1,
            name: '张三',
            avatar: 'avatars:svg-1'
          },
          dueDate: new Date(),
        },
        {
          id: 2,
          desc: "任务二: 什么情况啊",
          completed: false,
          priority: 1,
          owner: {
            id: 2,
            name: '李四',
            avatar: 'avatars:svg-2'
          },
          dueDate: new Date(),
        },
        {
          id: 3,
          desc: "任务三: 什么情况啊什么情况啊什么情况啊",
          completed: false,
          priority: 2,
          owner: {
            id: 3,
            name: '王五',
            avatar: 'avatars:svg-3'
          },
          dueDate: new Date(),
        },
        {
          id: 4,
          desc: "任务四: 什么情况啊",
          completed: false,
          priority: 3,
          owner: {
            id: 4,
            name: '刘烨',
            avatar: 'avatars:svg-4'
          },
          dueDate: new Date(),
        },
      ]
    }
  ];

  constructor(private dialog: MatDialog, private cd: ChangeDetectorRef) {
  }

  ngOnInit() {
  }

  launchNewTaskDialog() {
    const dialogRef = this.dialog.open(NewTaskComponent, {data: {title: '新建任务: '}});
  }

  launchCopyTaskDialog() {
    const dialogRef = this.dialog.open(CopyTaskComponent, {width: '250px', data: {lists: this.lists}});
  }

  launchUpdateTaskDialog(task) {
    const dialogRef = this.dialog.open(NewTaskComponent, {data: {title: '修改任务: ', task: task}});
  }

  launchConfirmDialog() {
    const dialogRef = this.dialog.open(ComfirmDialogComponent, {data: {title: '删除任务列表', content: '您确认删除该任务列表吗?'}});
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }

  launchEditListDialog() {
    const dialogRef = this.dialog.open(NewTaskListComponent, {data: {title: '更改列表名称'}});
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }

  launchNewListDialog() {
    const dialogRef = this.dialog.open(NewTaskListComponent, {data: {title: '新建列表'}});
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }

  handleMove(srcData, list) {
    switch (srcData.tag) {
      case 'task-item':
        console.log('handling item');
        break;
      case 'task-list':
        console.log('handling list');
        break;
      default:
        break;
    }
  }
}
