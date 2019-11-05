import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FileInputComponent } from './file-input/file-input.component';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FileDownloadHomeComponent } from './file-download-home/file-download-home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { UploadErrorMsgComponent } from './upload-error-msg/upload-error-msg.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FileInputComponent,
    FileDownloadHomeComponent,
    UploadErrorMsgComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxQRCodeModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


/*
TODO:
- Warning modal
- file input with large filename ellipse measurelength
- change font family
- add text above file upload
- env file

Future
- bit.ly
- encrypt file

*/