import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { timeout } from 'q';

@Component({
  selector: 'app-file-input',
  templateUrl: './file-input.component.html',
  styleUrls: ['./file-input.component.css']
})
export class FileInputComponent implements OnInit {

  @Input() state: string = "init";
  fileDownloadLink: string = "";
  defaultErrorMsg: string = "Something went wrong! Please try again after some time.";
  @Input() errorMsg: string = this.defaultErrorMsg;
  
  fileSizeLimit:number = 5000000;
  
  constructor(
    private location: Location
  ) { }

  ngOnInit() {
    if(document.getElementById("serverInput").innerHTML == "true") {
      this.state = "error";
      this.errorMsg = "File not Found";
      this.location.replaceState('')
    }
  }

  uploadFile(){
    this.state = "loading";
    // setTimeout(() => {
    //   console.log("got");
    //   this.state = "loaded";
    //   this.fileDownloadLink = "localhost:5000/download/19664838e89d4302a67146ebfb2ac824";
    //   console.log(this.state);
    // }, 3000 * 1);
    // return
    var file = (<HTMLInputElement>document.getElementById('myfile')).files[0];
    if(!file){
      this.errorMsg = 'Please select a file for upload';
      this.state = "error";
      return
    }
    var formData = new FormData();
    if (file.size >= this.fileSizeLimit ) {
        this.errorMsg = 'You cannot upload this file because its size exceeds the maximum limit of 5 MB.';
        this.state = "error";
        return
    }
    formData.append('myfile', file, file.name);
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/file-upload', true);
    xhr.onload = () => {
      if (xhr.status === 200) {
        // statusDiv.innerHTML = 'Your upload is successful..' + xhr.responseText;
        var responseText = xhr.responseText;
        if(responseText == "error") {
          this.state = "error";
          this.fileDownloadLink = "error";
          this.errorMsg = this.defaultErrorMsg;
        } else {
          this.state = "loaded";
          this.fileDownloadLink = responseText;
          this.errorMsg = this.defaultErrorMsg;
        }
      } else {
        this.state = "error"
        this.fileDownloadLink = "error"
        // statusDiv.innerHTML = 'An error occurred during the upload. Try again.';
      }
    };
    xhr.send(formData);
  }

  uploadFileChange() {
    var file = (<HTMLInputElement>document.getElementById('myfile')).files[0];
    if(!file){
      document.getElementById("upload-file-label").textContent = "Choose file";
    } else {
      document.getElementById("upload-file-label").textContent = file.name;
    }
  }

}
