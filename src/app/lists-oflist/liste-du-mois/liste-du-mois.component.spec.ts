import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDuMoisComponent } from './liste-du-mois.component';

describe('ListeDuMoisComponent', () => {
  let component: ListeDuMoisComponent;
  let fixture: ComponentFixture<ListeDuMoisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeDuMoisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeDuMoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
