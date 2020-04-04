import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerPropertiesComponent } from './worker-properties.component';

describe('WorkersPropertiesComponent', () => {
  let component: WorkerPropertiesComponent;
  let fixture: ComponentFixture<WorkerPropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkerPropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkerPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
