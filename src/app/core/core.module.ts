import { NgModule, SkipSelf, Optional } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { loadSvgResources } from '../utils/svg.util';
import { LoginModule } from "../login/login.module";
import { AppRoutingModule } from "../app-routing-module";
import 'hammerjs';
import 'rxjs/add/operator/take';
import '../utils/debug.util';
import { ServicesModule } from "../services/services.module";

@NgModule({
  imports: [
    HttpClientModule,
    HttpModule,
    SharedModule,
    LoginModule,
    AppRoutingModule,
    ServicesModule.forRoot(),
    BrowserAnimationsModule,
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AppRoutingModule,
  ],
  providers: [
    {
      provide: 'BASE_CONFIG',
      useValue: {
        uri: 'http://localhost:3000'
      }
    }
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parent: CoreModule,
              ir: MatIconRegistry,
              ds: DomSanitizer) {
    if (parent) {
      throw new Error('模块以及存在, 不能再次加载!');
    }
    loadSvgResources(ir, ds);
  }
}
