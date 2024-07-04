import { DragDropModule } from '@angular/cdk/drag-drop';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { HammerModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CeCoreModule, CeFormsService } from '@codeffekt/ce-core';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsModule } from '@ngxs/store';
import { MockCeFormsService } from '../mock/mock-ce-forms-service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    DragDropModule,
    CeCoreModule,
    HttpClientModule,
    HammerModule,
    NgxsModule.forRoot([], {
      selectorOptions: {
        suppressErrors: false,
        injectContainerState: false
      }
    }),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    // NgxsLoggerPluginModule.forRoot(),
  ],
  providers: [
    {
      provide: CeFormsService,
      useClass: MockCeFormsService
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
