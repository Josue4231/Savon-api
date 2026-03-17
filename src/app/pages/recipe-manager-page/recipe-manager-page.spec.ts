import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeManagerPage } from './recipe-manager-page';

describe('RecipeManagerPage', () => {
  let component: RecipeManagerPage;
  let fixture: ComponentFixture<RecipeManagerPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipeManagerPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeManagerPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
