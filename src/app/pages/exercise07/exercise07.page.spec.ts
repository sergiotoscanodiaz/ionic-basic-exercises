import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Exercise07Page } from './exercise07.page';

describe('Exercise07Page', () => {
  let component: Exercise07Page;
  let fixture: ComponentFixture<Exercise07Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exercise07Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Exercise07Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
