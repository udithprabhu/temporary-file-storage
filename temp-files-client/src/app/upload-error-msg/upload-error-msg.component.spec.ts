import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadErrorMsgComponent } from './upload-error-msg.component';

describe('UploadErrorMsgComponent', () => {
  let component: UploadErrorMsgComponent;
  let fixture: ComponentFixture<UploadErrorMsgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadErrorMsgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadErrorMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
