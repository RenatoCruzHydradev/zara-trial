import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PodcastListComponent } from './podcast-list.component';
import { FormsModule } from '@angular/forms';

describe('PodcastListComponent', () => {
  let component: PodcastListComponent;
  let fixture: ComponentFixture<PodcastListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PodcastListComponent],
      imports: [HttpClientTestingModule, RouterTestingModule, FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PodcastListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
