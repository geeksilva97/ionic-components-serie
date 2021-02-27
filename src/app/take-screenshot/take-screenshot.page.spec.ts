import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TakeScreenshotPage } from './take-screenshot.page';

describe('TakeScreenshotPage', () => {
  let component: TakeScreenshotPage;
  let fixture: ComponentFixture<TakeScreenshotPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakeScreenshotPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TakeScreenshotPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
