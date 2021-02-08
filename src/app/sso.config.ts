import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  
  skipIssuerCheck : true,

  // Url of the Identity Provider
  issuer: 'https://uaa.sys.dev.add2cloud.com/oauth/token',
  // To discover the issuer URI, you can vist the well-known endpoint of the UAA application and parse the issuer value. 
  // To parse the issuer using jq library run:

  // curl https://<PLAN_AUTH_DOMAIN>.uaa.<YOUR_DOMAIN>/.well-known/openid-configuration | jq '.issuer'



  // URL of the SPA to redirect the user to after login
    redirectUri: window.location.origin + '/login',

  // The SPA's id. The SPA is registerd with this id at the auth-server
//   clientId: 'f066b6a4-44d4-492a-9d59-dd112a3e2a6f',
    clientId: '7ad0e15c-036e-4a82-89b2-f5ed27d43ed3',
  // set the scope for the permissions the client should request
  // The first three are defined by OIDC. The 4th is a usecase-specific one
  // scope: 'openid profile email',
    scope: 'openid profile',

    strictDiscoveryDocumentValidation: false,
    
    disableAtHashCheck: true
}