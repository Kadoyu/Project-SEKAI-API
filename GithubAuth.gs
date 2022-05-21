function openAuthDialog() {
  var gitHubService = getGitHubService();
  if (gitHubService.hasAccess()) {
    Browser.msgBox('Already autherized');
  } else {
    var authorizationUrl = gitHubService.getAuthorizationUrl();
    var template = HtmlService.createTemplate(
      '<a href="<?= authorizationUrl ?>" target="_blank">Authorize</a>');
    template.authorizationUrl = authorizationUrl;
    var page = template.evaluate();

    SpreadsheetApp.getUi()
      .showModalDialog(page, 'Authorize');
  }
}

function getGitHubService() {
  const CLIENT_ID = PropertiesService.getScriptProperties().getProperty('github_client_id')
  const CLIENT_SECRET = PropertiesService.getScriptProperties().getProperty('github_client_secret')
  // Create a new service with the given name. The name will be used when
  // persisting the authorized token, so ensure it is unique within the
  // scope of the property store.
  return OAuth2.createService('GitHub')
    // Set the endpoint URLs, which are the same for all GitHub services.
    .setAuthorizationBaseUrl('https://github.com/login/oauth/authorize')
    .setTokenUrl('https://github.com/login/oauth/access_token')

    // Set the client ID and secret, from
    //   GitHub Settings > Applications > Developer applications
    .setClientId(CLIENT_ID)
    .setClientSecret(CLIENT_SECRET)

    // Set the name of the callback function in the script referenced
    // above that should be invoked to complete the OAuth flow.
    .setCallbackFunction('authCallback')

    // Set the property store where authorized tokens should be persisted.
    .setPropertyStore(PropertiesService.getUserProperties())
}

function authCallback(request) {
  var gitHubService = getGitHubService();
  var isAuthorized = gitHubService.handleCallback(request);
  if (isAuthorized) {
    return HtmlService.createHtmlOutput('Success! You can close this tab.');
  } else {
    return HtmlService.createHtmlOutput('Denied. You can close this tab');
  }
}

function clearService() {
  OAuth2.createService('GitHub')
    .setPropertyStore(PropertiesService.getUserProperties())
    .reset();
}

// Reusable function to generate a callback URL, assuming the script has been published as a
// web app (necessary to obtain the URL programmatically). If the script has not been published
// as a web app, set `var url` in the first line to the URL of your script project (which
// cannot be obtained programmatically).
function getCallbackURL(callbackFunction) {
  var url = ScriptApp.getService().getUrl();      // Ends in /exec (for a web app)
  url = url.slice(0, -4) + 'usercallback?state='; // Change /exec to /usercallback
  var stateToken = ScriptApp.newStateToken()
    .withMethod(callbackFunction)
    .withTimeout(120)
    .createToken();
  Logger.log(url + stateToken);
}
