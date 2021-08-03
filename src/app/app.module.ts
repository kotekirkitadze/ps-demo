import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserSettingsFormComponent } from './user-settings-form/user-settings-form.component';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, UserSettingsFormComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ButtonsModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
