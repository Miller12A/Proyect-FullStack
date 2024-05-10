import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideoverComponent } from './sideover.component';

describe('SideoverComponent', () => {
  let component: SideoverComponent;
  let fixture: ComponentFixture<SideoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideoverComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SideoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
