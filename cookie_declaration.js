
////////////////////////////////////////////////////
// INITIALISE BEFORE GTM (BEGIN)                  //
////////////////////////////////////////////////////

// get current consent status
function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}

var COOKIE_CONSENT_GIVEN = (getCookie('cookieconsent_status') === 'dismiss');

// set popup cookie declaration path
var COOKIE_DECLARATION_PATH = '<%= cookie_declaration_url %>';

// event triggers
window.consentPopupInitialised = new Event('consentPopupInitialised');
window.consentStatusChanged = new Event('consentStatusChanged');

////////////////////////////////////////////////////
// INITIALISE BEFORE GTM (END)                  //
////////////////////////////////////////////////////

// event listeners
var consentStatus = document.getElementsByClassName('cookie-consent-status')[0];
var consentCTA = document.getElementsByClassName('cookie-consent-cta')[0];

document.addEventListener('consentPopupInitialised', function (e) {
  consentStatus.innerHTML = consentPopup.hasConsented() ? 'Allow all cookies.' : 'Use necessary cookies only.';
  consentCTA.addEventListener('click', function(){
    consentPopup.open();
  });
}, false);

document.addEventListener('consentStatusChanged', function (e) {
  consentStatus.innerHTML = consentPopup.hasConsented() ? 'Allow all cookies.' : 'Use necessary cookies only.';
}, false);