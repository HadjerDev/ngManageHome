import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsOflistComponent } from './lists-oflist.component';

describe('ListsOflistComponent', () => {
  let component: ListsOflistComponent;
  let fixture: ComponentFixture<ListsOflistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListsOflistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListsOflistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
