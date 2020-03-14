import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkersPropertiesComponent } from './workers-properties.component';

describe('WorkersPropertiesComponent', () => {
  let component: WorkersPropertiesComponent;
  let fixture: ComponentFixture<WorkersPropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkersPropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkersPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
