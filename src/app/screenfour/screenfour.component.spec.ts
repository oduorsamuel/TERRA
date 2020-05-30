import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenfourComponent } from './screenfour.component';

describe('ScreenfourComponent', () => {
  let component: ScreenfourComponent;
  let fixture: ComponentFixture<ScreenfourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenfourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenfourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
