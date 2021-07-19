import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAboutComponent } from './get-about.component';

describe('GetAboutComponent', () => {
  let component: GetAboutComponent;
  let fixture: ComponentFixture<GetAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
