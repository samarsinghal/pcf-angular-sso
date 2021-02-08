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
  myHtml  : string = "Token: "+this.oauthService.getAccessToken() ;
  myState : string = "State: "+this.oauthService.hasValidAccessToken();

  constructor(private oauthService: OAuthService) {
    this.configureSingleSignOn();
  }

  configureSingleSignOn() {
    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler(); 
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  home() {
    window.location.href="https://angular-app.apps.dev.add2cloud.com/home";
    this.myHtml = "Token: "+this.oauthService.getAccessToken();
  }

  login() {
    if(!this.oauthService.getAccessToken())
    {
      this.oauthService.initImplicitFlow();

    }
    window.location.href="https://angular-app.apps.dev.add2cloud.com/login";
  }
  
  logout(){
    console.log("logging out");
    window.location.href="https://login.sys.dev.add2cloud.com/logout.do";
    window.location.href="https://angular-app.apps.dev.add2cloud.com/home";
    this.oauthService.resetImplicitFlow();
    this.oauthService.revokeTokenAndLogout();
    this.oauthService.logOut();
  }

}
