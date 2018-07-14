import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BnkGirlListComponent } from './bnk-girl-list.component';

describe('BnkGirlListComponent', () => {
  let component: BnkGirlListComponent;
  let fixture: ComponentFixture<BnkGirlListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BnkGirlListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BnkGirlListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
