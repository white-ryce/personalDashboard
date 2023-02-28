import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteccardComponent } from './noteccard.component';

describe('NoteccardComponent', () => {
  let component: NoteccardComponent;
  let fixture: ComponentFixture<NoteccardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteccardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoteccardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
