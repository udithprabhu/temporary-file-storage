import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  redirectToGithubPage() {
    window.location.href = "https://github.com/udithprabhu/temporary-file-storage";
  }

}
