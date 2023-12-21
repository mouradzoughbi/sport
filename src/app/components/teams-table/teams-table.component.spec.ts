import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsTableComponent } from './teams-table.component';

describe('TeamsTableComponent', () => {
  let component: TeamsTableComponent;
  let fixture: ComponentFixture<TeamsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamsTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
