import { Component } from '@angular/core';
import { SecurityService } from './core/security/security.service';
import { PortfolioService } from './core/portfolio/portfolio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private securityService: SecurityService,
              private portfolioService: PortfolioService) {}
}
