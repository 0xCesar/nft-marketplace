import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardNftComponent } from './card-nft.component';

describe('CardNftComponent', () => {
  let component: CardNftComponent;
  let fixture: ComponentFixture<CardNftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardNftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardNftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
