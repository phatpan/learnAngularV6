import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstagramItemComponent } from './instagram-item.component';

describe('InstagramItemComponent', () => {
  let component: InstagramItemComponent;
  let fixture: ComponentFixture<InstagramItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstagramItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstagramItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
