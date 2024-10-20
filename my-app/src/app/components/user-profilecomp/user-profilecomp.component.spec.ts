import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilecompComponent } from './user-profilecomp.component';

describe('UserProfilecompComponent', () => {
  let component: UserProfilecompComponent;
  let fixture: ComponentFixture<UserProfilecompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserProfilecompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserProfilecompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
