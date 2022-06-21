import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListChistesComponent } from './list-chistes.component';

describe('ListChistesComponent', () => {
  let component: ListChistesComponent;
  let fixture: ComponentFixture<ListChistesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListChistesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListChistesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
