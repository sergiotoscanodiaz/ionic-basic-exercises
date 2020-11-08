import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Exercise02Page } from './exercise02.page';

describe('Exercise02Page', () => {
  let component: Exercise02Page;
  let fixture: ComponentFixture<Exercise02Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exercise02Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Exercise02Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
