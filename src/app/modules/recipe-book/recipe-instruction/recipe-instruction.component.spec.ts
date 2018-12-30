import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeInstructionComponent } from './recipe-instruction.component';

describe('RecipeInstructionComponent', () => {
  let component: RecipeInstructionComponent;
  let fixture: ComponentFixture<RecipeInstructionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeInstructionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeInstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
