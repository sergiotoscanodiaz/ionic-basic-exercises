import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Exercise03Page } from './exercise03.page';

describe('Exercise03Page', () => {
  let component: Exercise03Page;
  let fixture: ComponentFixture<Exercise03Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exercise03Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Exercise03Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
