import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCreatorsV1Component } from './card-creators-v1.component';

describe('CardCreatorsV1Component', () => {
  let component: CardCreatorsV1Component;
  let fixture: ComponentFixture<CardCreatorsV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCreatorsV1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCreatorsV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
