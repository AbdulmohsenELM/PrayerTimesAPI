import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrieveapiComponent } from './retrieveapi.component';

describe('RetrieveapiComponent', () => {
  let component: RetrieveapiComponent;
  let fixture: ComponentFixture<RetrieveapiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetrieveapiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetrieveapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
