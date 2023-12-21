import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StadiumTableComponent } from './stadium-table.component';

describe('StadiumTableComponent', () => {
  let component: StadiumTableComponent;
  let fixture: ComponentFixture<StadiumTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StadiumTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StadiumTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
