import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumingHttpComponent } from './consuming-http.component';

describe('ConsumingHttpComponent', () => {
  let component: ConsumingHttpComponent;
  let fixture: ComponentFixture<ConsumingHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumingHttpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumingHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
