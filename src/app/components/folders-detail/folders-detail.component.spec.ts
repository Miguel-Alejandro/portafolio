import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoldersDetailComponent } from './folders-detail.component';

describe('FoldersDetailComponent', () => {
  let component: FoldersDetailComponent;
  let fixture: ComponentFixture<FoldersDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoldersDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoldersDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
