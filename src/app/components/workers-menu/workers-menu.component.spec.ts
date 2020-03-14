import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkersMenuComponent } from './workers-menu.component';

describe('WorkersMenuComponent', () => {
  let component: WorkersMenuComponent;
  let fixture: ComponentFixture<WorkersMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkersMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkersMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
