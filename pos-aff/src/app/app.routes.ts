import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LegalNoticeComponent } from './pages/legal-notice/legal-notice.component';
import { TermsAndConditionsComponent } from './pages/terms-and-conditions/terms-and-conditions.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Default homepage
  { path: 'legal', component: LegalNoticeComponent },
  { path: 'terms-and-conditions', component: TermsAndConditionsComponent },
  { path: '**', redirectTo: '' }, // Redirect unknown routes to homepage
];
