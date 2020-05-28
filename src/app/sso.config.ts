import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {

    skipIssuerCheck : true,

  // Url of the Identity Provider
    issuer: 'https://login.system.stonington.stream',
  //   issuer: 'https://angular.login.system.stonington.stream',
//   issuer: 'https://angular.login.system.stonington.stream/oauth/authorize',
//   issuer: 'https://steyer-identity-server.azurewebsites.net/identity',

  // URL of the SPA to redirect the user to after login
    redirectUri: window.location.origin + '/login',

  // The SPA's id. The SPA is registerd with this id at the auth-server
//   clientId: 'f066b6a4-44d4-492a-9d59-dd112a3e2a6f',
    clientId: 'ba183241-267a-4d85-aa66-1c3b133398d4',

  // set the scope for the permissions the client should request
  // The first three are defined by OIDC. The 4th is a usecase-specific one
//   scope: 'openid profile email',
    scope: 'openid profile',

    disableAtHashCheck: true
}