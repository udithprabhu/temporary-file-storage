import { Component, OnInit, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import $ from 'jquery';

@Component({
  selector: 'app-file-download-home',
  templateUrl: './file-download-home.component.html',
  styleUrls: ['./file-download-home.component.css']
})
export class FileDownloadHomeComponent implements OnInit {
  @Input() fileDownloadLink: string;
  constructor(
    private toastr: ToastrService,
  ) {

    $(document).ready(() => this.onLinkElementChange(null));

  }
  ngOnInit() {
  }

  onLinkElementChange(event) {
    console.log("calling shrinktofill")
    this.shrinkToFill("#link-input", 25, "", "serif");
  }

  clickClipboardIcon() {
    this.copyToClipboard(this.fileDownloadLink);
  }


  copyToClipboard(item: string) {
    document.addEventListener('copy', (e: ClipboardEvent) => {
      e.clipboardData.setData('text/plain', (item));
      e.preventDefault();
      document.removeEventListener('copy', null);
    });
    document.execCommand('copy');
    // this.toastr.toastrConfig. options = {
    //   "debug": false,
    //   "positionClass": "toast-bottom-full-width",
    //   "onclick": null,
    //   "fadeIn": 300,
    //   "fadeOut": 1000,
    //   "timeOut": 5000,
    //   "extendedTimeOut": 1000
    // }
    if($(".clipboard-icon-container").css("margin-top") == "20px") {
      this.toastr.success('Successfully copied to clipboard', "", {positionClass: "toast-bottom-full-width"});
    } else {
      this.toastr.success('Successfully copied to clipboard', "", {positionClass: "toast-bottom-right"});
    }
  }

  measureText(txt:string, font:string) {
    var id = 'text-width-tester',
        $tag = $('#' + id);
    if (!$tag.length) {
        $tag = $('<span id="' + id + '" style="display:none;font:' + font + ';">' + txt + '</span>');
        $('body').append($tag);
    } else {
        $tag.css({font:font}).html(txt);
    }
    return {
        width: $tag.width(),
        height: $tag.height()
    }
  }

  shrinkToFill(input, fontSize, fontWeight, fontFamily) {
    var $input = $(input);
    var txt = $input.val();
    var maxWidth = $input.width() + 5;
    var font = fontWeight + " " + fontSize + "px " + fontFamily;
    var textWidth = this.measureText(txt, font).width;
    console.log(textWidth , maxWidth)
    if (textWidth > maxWidth) {
        fontSize = fontSize * maxWidth / textWidth * .9;
        font = fontWeight + " " + fontSize + "px " + fontFamily;
        $input.css({font:font});
    } else {
        $input.css({font:font});
    }
  }

}