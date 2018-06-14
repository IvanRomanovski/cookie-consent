With GDPR the user has to proactively opt-in into using third-party cookies, therefore you should always trigger various events (Page Views, Link Clicks, etc.), only after the user has allowed tracking. In order to accomplish this I have created a custom tag (Cookie Consent), which checks user consent and triggers Cookie Consent Given if the consent has been given.

Other tags should hook on to this event. In case you create Custom Event triggers, you should add a condition on those events that "Event equals cookieconsent_given".

Finally, if your trigger is of a different type than "Custom Event", eg. "Click - Just Links", than make sure that condition is added that event fires only on "Cookie consent given equals true".

For more clarifications, please see: https://www.cookiebot.com/en/google-tag-manager-gdpr/