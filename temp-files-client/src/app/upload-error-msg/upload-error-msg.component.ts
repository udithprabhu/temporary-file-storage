import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-upload-error-msg',
  templateUrl: './upload-error-msg.component.html',
  styleUrls: ['./upload-error-msg.component.css']
})
export class UploadErrorMsgComponent implements OnInit {

  @Input() message: string;

  constructor() { }

  ngOnInit() {
  }

}
