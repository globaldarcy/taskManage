import { Component, HostBinding, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from "@angular/material";
import { NewProjectComponent } from "../new-project/new-project.component";
import { InviteComponent } from "../invite/invite.component";
import { ComfirmDialogComponent } from "../../shared/comfirm-dialog/comfirm-dialog.component";
import { slideToRight } from "../../animations/router.anim";
import { listAnim } from "../../animations/list.anim";

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  animations: [
    slideToRight,
    listAnim
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectListComponent implements OnInit {

  @HostBinding('@routeAni') state;

  public projects = [
    {
      id: 1,
      name: "某某公司 ERP 系统1",
      desc: "为某某公司开发的定制化 ERP 系统1",
      coverImg: "/assets/img/covers/20.jpg"
    },
    {
      id: 2,
      name: "某某公司 ERP 系统2",
      desc: "为某某公司开发的定制化 ERP 系统2",
      coverImg: "/assets/img/covers/1.jpg"
    }
  ];
  constructor(private dialog: MatDialog, private cd: ChangeDetectorRef) { }

  ngOnInit() {
  }

  openNewProjectDialog() {
    const dialogRef = this.dialog.open(NewProjectComponent, {data: {title: '新增项目'}});
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.projects = [...this.projects,
        {id: 3, name: '一个新项目', desc: '这是一个新项目', coverImg: '/assets/img/covers/2.jpg'},
        {id: 4, name: '2个新项目', desc: '这是2个新项目', coverImg: '/assets/img/covers/3.jpg'},
        ];
      this.cd.markForCheck();
    });
  }

  launchInviteDialog() {
    this.dialog.open(InviteComponent);
  }

  launchUpdateDialog() {
    const dialogRef = this.dialog.open(NewProjectComponent, {data: {title: '编辑项目'}});
  }

  launchConfirmDialog(project) {
    const dialogRef = this.dialog.open(ComfirmDialogComponent, {data: {title: '删除项目', content: '您确认删除该项目吗?'}});
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.projects = this.projects.filter(p => p.id !== project.id);
      this.cd.markForCheck();
    });
  }
}
