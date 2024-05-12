import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickingScreenComponent } from './picking-screen.component';

describe('PickingScreenComponent', () => {
  let component: PickingScreenComponent;
  let fixture: ComponentFixture<PickingScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PickingScreenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PickingScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
