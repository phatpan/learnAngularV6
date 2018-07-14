import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BnkGirlListComponent } from './bnk-girl-list.component';
import { BnkService } from 'src/app/services/bnk.service';
import { HttpClientModule } from '../../../../node_modules/@angular/common/http';
import {
  HttpTestingController,
  HttpClientTestingModule
} from '@angular/common/http/testing';

describe('BnkGirlListComponent', () => {
  let component: BnkGirlListComponent;
  let fixture: ComponentFixture<BnkGirlListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BnkGirlListComponent ],
      providers: [BnkService],
      imports: [HttpClientModule, HttpClientTestingModule],
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
