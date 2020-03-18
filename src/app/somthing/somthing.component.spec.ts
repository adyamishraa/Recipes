import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomthingComponent } from './somthing.component';

describe('SomthingComponent', () => {
  let component: SomthingComponent;
  let fixture: ComponentFixture<SomthingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomthingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomthingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
