import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnviversitySectionComponent } from './unviversity-section.component';

describe('UnviversitySectionComponent', () => {
  let component: UnviversitySectionComponent;
  let fixture: ComponentFixture<UnviversitySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnviversitySectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnviversitySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
