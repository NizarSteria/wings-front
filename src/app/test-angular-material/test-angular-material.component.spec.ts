import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestAngularMaterialComponent } from './test-angular-material.component';

describe('TestAngularMaterialComponent', () => {
  let component: TestAngularMaterialComponent;
  let fixture: ComponentFixture<TestAngularMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestAngularMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestAngularMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
