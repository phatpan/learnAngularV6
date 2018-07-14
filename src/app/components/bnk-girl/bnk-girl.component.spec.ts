import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BnkGirlComponent } from './bnk-girl.component';

describe('BnkGirlComponent', () => {
  let component: BnkGirlComponent;
  let fixture: ComponentFixture<BnkGirlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BnkGirlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BnkGirlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
