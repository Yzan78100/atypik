import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProprioComponent } from './proprio.component';

describe('ProprioComponent', () => {
  let component: ProprioComponent;
  let fixture: ComponentFixture<ProprioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProprioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProprioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
