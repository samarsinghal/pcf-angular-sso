import { Component } from '@angular/core';
import { OAuthService} from 'angular-oauth2-oidc';
import { authConfig } from './sso.config';
import { JwksValidationHandler } from 'angular-oauth2-oidc-jwks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  myHtml  : string = this.oauthService.getAccessToken() ;


  constructor(private oauthService: OAuthService) {
    this.configureSingleSignOn();
  }

  configureSingleSignOn() {
    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  login() {
    console.log("token:",this.oauthService.getIdToken());
    this.oauthService.initImplicitFlow();
    this.myHtml = this.oauthService.getAccessToken();
  }

  logout() {
    console.log("logging out");
    console.log(this.oauthService.getIdToken());
    console.log("\n\n\n",this.oauthService.getAccessToken());

    this.oauthService.revokeTokenAndLogout();
    // this.oauthService.logOut();
    window.location.href="https://login.system.stonington.stream/logout.do";
    window.location.href="http://localhost:4200/home";
  }
}
