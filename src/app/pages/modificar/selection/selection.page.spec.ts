import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectionPage } from './selection.page';

describe('SelectionPage', () => {
  let component: SelectionPage;
  let fixture: ComponentFixture<SelectionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SelectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
