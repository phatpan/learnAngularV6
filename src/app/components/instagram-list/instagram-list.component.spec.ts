import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstagramListComponent } from './instagram-list.component';

describe('InstagramListComponent', () => {
  let component: InstagramListComponent;
  let fixture: ComponentFixture<InstagramListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstagramListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstagramListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
