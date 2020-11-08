import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Exercise01Page } from './exercise01.page';

describe('Exercise01Page', () => {
  let component: Exercise01Page;
  let fixture: ComponentFixture<Exercise01Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exercise01Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Exercise01Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
