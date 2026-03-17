import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientsManagerPage } from './ingredients-manager-page';

describe('IngredientsManagerPage', () => {
  let component: IngredientsManagerPage;
  let fixture: ComponentFixture<IngredientsManagerPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IngredientsManagerPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngredientsManagerPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
