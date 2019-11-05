import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileDownloadHomeComponent } from './file-download-home.component';

describe('FileDownloadHomeComponent', () => {
  let component: FileDownloadHomeComponent;
  let fixture: ComponentFixture<FileDownloadHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileDownloadHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileDownloadHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
