import { DragDropModule } from '@angular/cdk/drag-drop';
import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CeCoreModule, CeFormsService } from '@codeffekt/ce-core';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsModule } from '@ngxs/store';
import { MockCeFormsService } from '../mock/mock-ce-forms-service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

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
