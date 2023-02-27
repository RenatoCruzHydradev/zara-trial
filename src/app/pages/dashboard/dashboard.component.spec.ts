import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';
import { By } from '@angular/platform-browser';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  class ActivatedRouteMock {}

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      imports: [ComponentsModule, RouterModule],
      providers: [{ provide: ActivatedRoute, useClass: ActivatedRouteMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have top-bar`, () => {
    const fixture = TestBed.createComponent(DashboardComponent);
    const appTopBar = fixture.debugElement.query(By.css('app-top-bar'));
    expect(appTopBar).toBeTruthy();
  });
});
