import { AccountSite } from '../types';

export const POPULAR_SITES: Omit<AccountSite, 'hasAccount' | 'confidence' | 'breached' | 'breachDetails' | 'breachDate' | 'breachExposedData'>[] = [
  {
    id: 'google',
    name: 'Google',
    domain: 'google.com',
    category: 'Tech',
    deletionMethod: 'link',
    deletionUrl: 'https://myaccount.google.com/delete-services-or-account',
    privacyEmail: 'data-protection-office@google.com',
    instructions: 'Go to your Google Account Settings -> Data & Privacy -> More Options -> Delete your Google Account.'
  },
  {
    id: 'facebook',
    name: 'Facebook',
    domain: 'facebook.com',
    category: 'Social',
    deletionMethod: 'link',
    deletionUrl: 'https://www.facebook.com/help/delete_account',
    privacyEmail: 'dpodb@fb.com',
    instructions: 'Log in to Facebook -> Settings & Privacy -> Settings -> Your Facebook Information -> Deactivation and Deletion.'
  },
  {
    id: 'canva',
    name: 'Canva',
    domain: 'canva.com',
    category: 'Tech',
    deletionMethod: 'link',
    deletionUrl: 'https://www.canva.com/help/delete-account/',
    privacyEmail: 'privacy@canva.com',
    instructions: 'Go to Account Settings -> Login & Security -> Scroll to bottom and click "Close account".'
  },
  {
    id: 'adobe',
    name: 'Adobe',
    domain: 'adobe.com',
    category: 'Tech',
    deletionMethod: 'link',
    deletionUrl: 'https://account.adobe.com/privacy',
    privacyEmail: 'privacy@adobe.com',
    instructions: 'Log in to Adobe Account -> Privacy & Personal Data -> Scroll down to "Delete Adobe Account" and click Continue.'
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    domain: 'linkedin.com',
    category: 'Social',
    deletionMethod: 'link',
    deletionUrl: 'https://www.linkedin.com/help/linkedin/answer/a1339333',
    privacyEmail: 'privacy@linkedin.com',
    instructions: 'Go to Settings & Privacy -> Account Preferences -> Account Management -> Close Account.'
  },
  {
    id: 'amazon',
    name: 'Amazon',
    domain: 'amazon.com',
    category: 'Shopping',
    deletionMethod: 'link',
    deletionUrl: 'https://www.amazon.com/gp/help/customer/display.html?nodeId=GDSLE69Z999Y6L7Q',
    privacyEmail: 'privacyshield@amazon.com',
    instructions: 'Visit Amazon\'s Close Your Account page, select a reason, tick the confirmation box, and click "Close My Account".'
  },
  {
    id: 'netflix',
    name: 'Netflix',
    domain: 'netflix.com',
    category: 'Entertainment',
    deletionMethod: 'email',
    deletionUrl: 'https://www.netflix.com/CancelPlan',
    privacyEmail: 'privacy@netflix.com',
    instructions: 'First, cancel your subscription. Then, send an email to privacy@netflix.com from your registered email address requesting permanent deletion.'
  },
  {
    id: 'spotify',
    name: 'Spotify',
    domain: 'spotify.com',
    category: 'Entertainment',
    deletionMethod: 'link',
    deletionUrl: 'https://support.spotify.com/us/article/close-account/',
    privacyEmail: 'privacy@spotify.com',
    instructions: 'Log in to the Spotify website -> Help Section -> Contact Us -> Close Account and Delete Data.'
  },
  {
    id: 'github',
    name: 'GitHub',
    domain: 'github.com',
    category: 'Dev',
    deletionMethod: 'link',
    deletionUrl: 'https://github.com/settings/security',
    privacyEmail: 'privacy@github.com',
    instructions: 'Go to Settings -> Account -> Scroll to the bottom -> Click "Delete your account".'
  },
  {
    id: 'twitter',
    name: 'Twitter / X',
    domain: 'twitter.com',
    category: 'Social',
    deletionMethod: 'link',
    deletionUrl: 'https://twitter.com/settings/deactivate',
    privacyEmail: 'privacy@twitter.com',
    instructions: 'Go to Settings and privacy -> Your Account -> Deactivate your account. Accounts not logged in for 30 days are deleted.'
  },
  {
    id: 'reddit',
    name: 'Reddit',
    domain: 'reddit.com',
    category: 'Social',
    deletionMethod: 'link',
    deletionUrl: 'https://www.reddit.com/settings/',
    privacyEmail: 'privacy@reddit.com',
    instructions: 'Go to User Settings -> Click "Delete Account" at the bottom of the page.'
  },
  {
    id: 'discord',
    name: 'Discord',
    domain: 'discord.com',
    category: 'Social',
    deletionMethod: 'link',
    deletionUrl: 'https://support.discord.com/hc/en-us/articles/212500618',
    privacyEmail: 'privacy@discord.com',
    instructions: 'Go to User Settings -> My Account -> Scroll down and click "Delete Account". Note: You must transfer server ownership first.'
  },
  {
    id: 'dropbox',
    name: 'Dropbox',
    domain: 'dropbox.com',
    category: 'Tech',
    deletionMethod: 'link',
    deletionUrl: 'https://www.dropbox.com/account#personal',
    privacyEmail: 'privacy@dropbox.com',
    instructions: 'Go to Account Settings -> General -> Scroll down to find "Delete account" and click it.'
  },
  {
    id: 'pinterest',
    name: 'Pinterest',
    domain: 'pinterest.com',
    category: 'Social',
    deletionMethod: 'link',
    deletionUrl: 'https://help.pinterest.com/en/article/deactivate-or-close-your-account',
    privacyEmail: 'privacy@pinterest.com',
    instructions: 'Go to Settings -> Account management -> Scroll down and click "Delete account".'
  },
  {
    id: 'zoom',
    name: 'Zoom',
    domain: 'zoom.us',
    category: 'Tech',
    deletionMethod: 'link',
    deletionUrl: 'https://support.zoom.us/hc/en-us/articles/201363233-Deleting-your-Zoom-account',
    privacyEmail: 'privacy@zoom.us',
    instructions: 'Log in to Zoom Portal -> Account Management -> Account Profile -> Click "Terminate my account".'
  },
  {
    id: 'slack',
    name: 'Slack',
    domain: 'slack.com',
    category: 'Tech',
    deletionMethod: 'link',
    deletionUrl: 'https://slack.com/help/articles/201314024-Deactivate-your-Slack-account',
    privacyEmail: 'privacy@slack.com',
    instructions: 'Go to Account Settings -> Deactivate Account. For workspace deletion, contact workspace owner or use workspace admin panel.'
  },
  {
    id: 'notion',
    name: 'Notion',
    domain: 'notion.so',
    category: 'Tech',
    deletionMethod: 'link',
    deletionUrl: 'https://www.notion.so/my-settings',
    privacyEmail: 'privacy@makenotion.com',
    instructions: 'Go to Settings & Members -> My Account -> Scroll to the bottom and click "Delete My Account".'
  },
  {
    id: 'figma',
    name: 'Figma',
    domain: 'figma.com',
    category: 'Tech',
    deletionMethod: 'link',
    deletionUrl: 'https://help.figma.com/hc/en-us/articles/360040523454-Delete-your-Figma-account',
    privacyEmail: 'privacy@figma.com',
    instructions: 'Go to Account Settings -> Scroll to the bottom -> Click "Delete Account" and enter your password.'
  },
  {
    id: 'paypal',
    name: 'PayPal',
    domain: 'paypal.com',
    category: 'Finance',
    deletionMethod: 'link',
    deletionUrl: 'https://www.paypal.com/myaccount/settings/',
    privacyEmail: 'privacy@paypal.com',
    instructions: 'Go to Settings (Gear icon) -> Under Account Options, click "Close your account".'
  },
  {
    id: 'stripe',
    name: 'Stripe',
    domain: 'stripe.com',
    category: 'Finance',
    deletionMethod: 'link',
    deletionUrl: 'https://support.stripe.com/questions/close-stripe-account',
    privacyEmail: 'privacy@stripe.com',
    instructions: 'Go to Dashboard -> Settings -> Account -> Scroll down and click "Close account".'
  },
  {
    id: 'ebay',
    name: 'eBay',
    domain: 'ebay.com',
    category: 'Shopping',
    deletionMethod: 'link',
    deletionUrl: 'https://www.ebay.com/help/account/protecting-your-account/closing-your-account?id=4172',
    privacyEmail: 'privacy@ebay.com',
    instructions: 'Go to Account settings -> Account Preferences -> Close account and delete data.'
  },
  {
    id: 'etsy',
    name: 'Etsy',
    domain: 'etsy.com',
    category: 'Shopping',
    deletionMethod: 'link',
    deletionUrl: 'https://help.etsy.com/hc/en-us/articles/115015777088-How-to-Close-Your-Etsy-Account',
    privacyEmail: 'privacy@etsy.com',
    instructions: 'Go to Account Settings -> Under "Close Your Account", click "Close Account".'
  },
  {
    id: 'snapchat',
    name: 'Snapchat',
    domain: 'snapchat.com',
    category: 'Social',
    deletionMethod: 'link',
    deletionUrl: 'https://accounts.snapchat.com/accounts/delete_account',
    privacyEmail: 'privacy@snapchat.com',
    instructions: 'Go to the Snapchat Accounts Portal, enter your username and password, then click "Delete my account".'
  },
  {
    id: 'tumblr',
    name: 'Tumblr',
    domain: 'tumblr.com',
    category: 'Social',
    deletionMethod: 'link',
    deletionUrl: 'https://www.tumblr.com/settings/account',
    privacyEmail: 'privacy@tumblr.com',
    instructions: 'Go to Account Settings -> Scroll to the bottom and click "Delete Account".'
  },
  {
    id: 'myfitnesspal',
    name: 'MyFitnessPal',
    domain: 'myfitnesspal.com',
    category: 'Other',
    deletionMethod: 'link',
    deletionUrl: 'https://www.myfitnesspal.com/account/delete-account',
    privacyEmail: 'privacy@myfitnesspal.com',
    instructions: 'Log in on the web -> My Home -> Settings -> Delete Account.'
  },
  {
    id: 'evernote',
    name: 'Evernote',
    domain: 'evernote.com',
    category: 'Tech',
    deletionMethod: 'link',
    deletionUrl: 'https://www.evernote.com/Deactivate.action',
    privacyEmail: 'privacy@evernote.com',
    instructions: 'Go to Account Settings -> Account Status -> Click "Deactivate Evernote Account".'
  },
  {
    id: 'quora',
    name: 'Quora',
    domain: 'quora.com',
    category: 'Social',
    deletionMethod: 'link',
    deletionUrl: 'https://www.quora.com/settings/privacy',
    privacyEmail: 'privacy@quora.com',
    instructions: 'Go to Settings -> Privacy -> Scroll to the bottom -> Click "Delete Account".'
  },
  {
    id: 'duolingo',
    name: 'Duolingo',
    domain: 'duolingo.com',
    category: 'Entertainment',
    deletionMethod: 'link',
    deletionUrl: 'https://drive-thru.duolingo.com/',
    privacyEmail: 'privacy@duolingo.com',
    instructions: 'Visit the Duolingo Drive-Thru portal, select "Erase Personal Data" to permanently delete your profile.'
  },
  {
    id: 'trello',
    name: 'Trello',
    domain: 'trello.com',
    category: 'Tech',
    deletionMethod: 'link',
    deletionUrl: 'https://id.atlassian.com/manage-profile/security',
    privacyEmail: 'privacy@atlassian.com',
    instructions: 'Atlassian manages Trello accounts. Log in to Atlassian ID -> Account Preferences -> Click "Delete account".'
  },
  {
    id: 'medium',
    name: 'Medium',
    domain: 'medium.com',
    category: 'Entertainment',
    deletionMethod: 'link',
    deletionUrl: 'https://medium.com/me/settings/security',
    privacyEmail: 'privacy@medium.com',
    instructions: 'Go to Settings -> Security and account -> Scroll down and click "Delete account".'
  },
  {
    id: 'steam',
    name: 'Steam (Valve)',
    domain: 'steampowered.com',
    category: 'Entertainment',
    deletionMethod: 'link',
    deletionUrl: 'https://help.steampowered.com/en/wizard/HelpWithAccountDelete',
    privacyEmail: 'privacy@valvesoftware.com',
    instructions: 'Log in to Steam Support, navigate to Account Deletion, confirm your ownership credentials, and submit the request.'
  },
  {
    id: 'epicgames',
    name: 'Epic Games',
    domain: 'epicgames.com',
    category: 'Entertainment',
    deletionMethod: 'link',
    deletionUrl: 'https://www.epicgames.com/help/en-US/c-Category_EpicAccounts/c-AccountSecurity/how-to-delete-your-epic-games-account-a000084711',
    privacyEmail: 'privacy@epicgames.com',
    instructions: 'Go to Account settings -> General section -> Scroll down to "Delete Account" -> Click Request Account Delete.'
  },
  {
    id: 'airbnb',
    name: 'Airbnb',
    domain: 'airbnb.com',
    category: 'Other',
    deletionMethod: 'link',
    deletionUrl: 'https://www.airbnb.com/help/article/3081',
    privacyEmail: 'dpo@airbnb.com',
    instructions: 'Go to Profile -> Account -> Privacy & sharing -> Click "Deactivate or delete your account" -> Follow instructions.'
  },
  {
    id: 'tripadvisor',
    name: 'TripAdvisor',
    domain: 'tripadvisor.com',
    category: 'Other',
    deletionMethod: 'link',
    deletionUrl: 'https://www.tripadvisor.com/MemberProfile-c',
    privacyEmail: 'privacy@tripadvisor.com',
    instructions: 'Log in -> Account Info -> Scroll to the absolute bottom of the page -> Click "Close Your Account".'
  },
  {
    id: 'stackoverflow',
    name: 'Stack Overflow',
    domain: 'stackoverflow.com',
    category: 'Dev',
    deletionMethod: 'link',
    deletionUrl: 'https://stackoverflow.com/help/deleting-account',
    privacyEmail: 'privacy@stackoverflow.com',
    instructions: 'Go to Edit Profile & Settings -> Click "Delete Account" on the left-side navigation panel.'
  },
  {
    id: 'grammarly',
    name: 'Grammarly',
    domain: 'grammarly.com',
    category: 'Tech',
    deletionMethod: 'link',
    deletionUrl: 'https://support.grammarly.com/hc/en-us/articles/115000090252-Delete-your-Grammarly-account',
    privacyEmail: 'privacy@grammarly.com',
    instructions: 'Log in on the web -> Account -> Account Settings -> Click "Delete Account" at the bottom of the form.'
  },
  {
    id: 'coursera',
    name: 'Coursera',
    domain: 'coursera.org',
    category: 'Entertainment',
    deletionMethod: 'link',
    deletionUrl: 'https://learner.coursera.help/hc/en-us/articles/208279926-Delete-your-Coursera-account',
    privacyEmail: 'privacy@coursera.org',
    instructions: 'Go to your Account Settings page -> Scroll to the bottom -> Click "Deactivate Account".'
  },
  {
    id: 'udemy',
    name: 'Udemy',
    domain: 'udemy.com',
    category: 'Entertainment',
    deletionMethod: 'link',
    deletionUrl: 'https://support.udemy.com/hc/en-us/articles/229604168-How-to-Close-Your-Udemy-Account',
    privacyEmail: 'privacy@udemy.com',
    instructions: 'Go to Profile -> Account Settings -> Click "Close Account" on the right side and confirm password.'
  },
  {
    id: 'hubspot',
    name: 'HubSpot',
    domain: 'hubspot.com',
    category: 'Dev',
    deletionMethod: 'link',
    deletionUrl: 'https://knowledge.hubspot.com/account/delete-your-hubspot-account',
    privacyEmail: 'privacy@hubspot.com',
    instructions: 'Go to Account -> Settings -> Users & Teams -> Actions -> Delete User, or purge your portal.'
  },
  {
    id: 'mailchimp',
    name: 'Mailchimp',
    domain: 'mailchimp.com',
    category: 'Dev',
    deletionMethod: 'link',
    deletionUrl: 'https://mailchimp.com/help/delete-an-account/',
    privacyEmail: 'privacy@mailchimp.com',
    instructions: 'Go to Account & Billing -> Settings -> Click "Close My Account" and select a reason.'
  },
  {
    id: 'vimeo',
    name: 'Vimeo',
    domain: 'vimeo.com',
    category: 'Entertainment',
    deletionMethod: 'link',
    deletionUrl: 'https://vimeo.com/settings/account',
    privacyEmail: 'privacy@vimeo.com',
    instructions: 'Log in -> Settings -> Account -> Click "Delete your account" in the safe zone link.'
  },
  {
    id: 'uber',
    name: 'Uber',
    domain: 'uber.com',
    category: 'Other',
    deletionMethod: 'link',
    deletionUrl: 'https://help.uber.com/riders/article/deleting-my-uber-account',
    privacyEmail: 'privacy@uber.com',
    instructions: 'Open Uber App -> Settings -> Privacy -> Delete Your Account. Or visit Uber help portal online.'
  },
  {
    id: 'lyft',
    name: 'Lyft',
    domain: 'lyft.com',
    category: 'Other',
    deletionMethod: 'link',
    deletionUrl: 'https://www.lyft.com/privacy/delete-account',
    privacyEmail: 'privacy@lyft.com',
    instructions: 'Go to Lyft Privacy Center -> Enter verification SMS -> Click "Delete Account" and confirm.'
  },
  {
    id: 'patreon',
    name: 'Patreon',
    domain: 'patreon.com',
    category: 'Entertainment',
    deletionMethod: 'link',
    deletionUrl: 'https://privacy.patreon.com/',
    privacyEmail: 'privacy@patreon.com',
    instructions: 'Visit the Patreon Privacy Center -> Select "Take Action" -> Choose "Erase" and submit request.'
  },
  {
    id: 'kickstarter',
    name: 'Kickstarter',
    domain: 'kickstarter.com',
    category: 'Other',
    deletionMethod: 'link',
    deletionUrl: 'https://www.kickstarter.com/settings/account',
    privacyEmail: 'privacy@kickstarter.com',
    instructions: 'Go to Account Settings -> Click "Delete Account" -> Enter your password and click Confirm.'
  },
  {
    id: 'box',
    name: 'Box',
    domain: 'box.com',
    category: 'Tech',
    deletionMethod: 'link',
    deletionUrl: 'https://support.box.com/hc/en-us/articles/360044195153-Closing-Your-Box-Account',
    privacyEmail: 'privacy@box.com',
    instructions: 'Go to Account Settings -> Account tab -> Scroll down to "Account Information" -> Click "Cancel Account".'
  },
  {
    id: 'typeform',
    name: 'Typeform',
    domain: 'typeform.com',
    category: 'Tech',
    deletionMethod: 'link',
    deletionUrl: 'https://help.typeform.com/hc/en-us/articles/360029583191-Delete-your-Typeform-account',
    privacyEmail: 'privacy@typeform.com',
    instructions: 'Go to Account settings -> Section Plan -> Click "Cancel my account" and select Delete Account.'
  },
  {
    id: 'wix',
    name: 'Wix',
    domain: 'wix.com',
    category: 'Dev',
    deletionMethod: 'link',
    deletionUrl: 'https://support.wix.com/en/article/closing-your-wix-account',
    privacyEmail: 'privacy@wix.com',
    instructions: 'Go to Account Settings -> Under "Close Your Account", click "Close Account" after deleting premium assets.'
  },
  {
    id: 'squarespace',
    name: 'Squarespace',
    domain: 'squarespace.com',
    category: 'Dev',
    deletionMethod: 'link',
    deletionUrl: 'https://support.squarespace.com/hc/en-us/articles/205812328-Deleting-your-Squarespace-account',
    privacyEmail: 'privacy@squarespace.com',
    instructions: 'Go to Squarespace Settings -> Security -> Click "Delete Account" and verify ownership.'
  },
  {
    id: 'webflow',
    name: 'Webflow',
    domain: 'webflow.com',
    category: 'Dev',
    deletionMethod: 'link',
    deletionUrl: 'https://university.webflow.com/lesson/close-account',
    privacyEmail: 'privacy@webflow.com',
    instructions: 'Go to Webflow Dashboard -> Workspace Settings -> Deactivate/Close Account at the bottom.'
  },
  {
    id: 'microsoft',
    name: 'Microsoft',
    domain: 'microsoft.com',
    category: 'Tech',
    deletionMethod: 'link',
    deletionUrl: 'https://support.microsoft.com/en-us/account-billing/how-to-close-your-microsoft-account-c1b2d139-4de1-697b-6861-d0b4a019dd90',
    privacyEmail: 'privacy@microsoft.com',
    instructions: 'Go to Account Settings -> Close your account -> Follow verify ownership steps.'
  },
  {
    id: 'yahoo',
    name: 'Yahoo',
    domain: 'yahoo.com',
    category: 'Tech',
    deletionMethod: 'link',
    deletionUrl: 'https://edit.yahoo.com/config/delete_user',
    privacyEmail: 'privacy@yahoo.com',
    instructions: 'Log in to Yahoo Account Termination page, read the terms, and confirm deletion.'
  },
  {
    id: 'apple',
    name: 'Apple ID',
    domain: 'apple.com',
    category: 'Tech',
    deletionMethod: 'link',
    deletionUrl: 'https://privacy.apple.com/',
    privacyEmail: 'privacy@apple.com',
    instructions: 'Log in to Apple Data & Privacy portal -> Select \'Delete your account\' -> Choose a reason and request deletion.'
  },
  {
    id: 'skyscanner',
    name: 'Skyscanner',
    domain: 'skyscanner.com',
    category: 'Other',
    deletionMethod: 'link',
    deletionUrl: 'https://help.skyscanner.net/hc/en-gb/articles/201655761-How-do-I-delete-my-Skyscanner-account-',
    privacyEmail: 'privacy@skyscanner.net',
    instructions: 'Log in -> Profile Settings -> Account Management -> Click "Delete Account".'
  },
  {
    id: 'booking',
    name: 'Booking.com',
    domain: 'booking.com',
    category: 'Other',
    deletionMethod: 'link',
    deletionUrl: 'https://www.booking.com/content/privacy.html',
    privacyEmail: 'customer.service@booking.com',
    instructions: 'Go to Account Settings -> Security -> Click \'Delete Account\' at the bottom.'
  },
  {
    id: 'expedia',
    name: 'Expedia',
    domain: 'expedia.com',
    category: 'Other',
    deletionMethod: 'link',
    deletionUrl: 'https://www.expedia.com/service/',
    privacyEmail: 'privacy@expedia.com',
    instructions: 'Log in -> Profile -> Account Settings -> Scroll down and choose \'Delete Account\'.'
  },
  {
    id: 'ticketmaster',
    name: 'Ticketmaster',
    domain: 'ticketmaster.com',
    category: 'Other',
    deletionMethod: 'link',
    deletionUrl: 'https://help.ticketmaster.com/hc/en-us/articles/9786196238353-How-do-I-delete-my-account-',
    privacyEmail: 'privacy@ticketmaster.com',
    instructions: 'Log in -> My Account -> Settings -> Click "Delete Account" to queue erasure.'
  },
  {
    id: 'eventbrite',
    name: 'Eventbrite',
    domain: 'eventbrite.com',
    category: 'Other',
    deletionMethod: 'link',
    deletionUrl: 'https://www.eventbrite.com/support/articles/en_US/How_To/how-to-close-your-eventbrite-account',
    privacyEmail: 'privacy@eventbrite.com',
    instructions: 'Go to Account Settings -> Account Scheme -> Click \'Close Account\'.'
  },
  {
    id: 'twitch',
    name: 'Twitch',
    domain: 'twitch.tv',
    category: 'Entertainment',
    deletionMethod: 'link',
    deletionUrl: 'https://www.twitch.tv/user/delete-account',
    privacyEmail: 'privacy@twitch.tv',
    instructions: 'Go to the main Twitch account deletion portal page, write down reason, and submit.'
  },
  {
    id: 'youtube',
    name: 'YouTube',
    domain: 'youtube.com',
    category: 'Entertainment',
    deletionMethod: 'link',
    deletionUrl: 'https://myaccount.google.com/delete-services-or-account',
    privacyEmail: 'privacy@youtube.com',
    instructions: 'Access via Google Account settings -> Delete a Google Service -> Enter password -> Select YouTube deletion icon.'
  },
  {
    id: 'disneyplus',
    name: 'Disney+',
    domain: 'disneyplus.com',
    category: 'Entertainment',
    deletionMethod: 'link',
    deletionUrl: 'https://privacy.thewaltdisneycompany.com/en/custom-privacy-guest-controls/',
    privacyEmail: 'privacy@disneyplus.com',
    instructions: 'Log in -> Profile -> Account Settings -> Scroll down to "Delete Account" and verify subscription cancellation.'
  },
  {
    id: 'hulu',
    name: 'Hulu',
    domain: 'hulu.com',
    category: 'Entertainment',
    deletionMethod: 'link',
    deletionUrl: 'https://help.hulu.com/s/article/cancel-hulu-subscription',
    privacyEmail: 'privacy@hulu.com',
    instructions: 'Go to Account overview -> Privacy and Data -> Under \'Delete Account\', click start deletion.'
  },
  {
    id: 'hbomax',
    name: 'HBO Max / Max',
    domain: 'max.com',
    category: 'Entertainment',
    deletionMethod: 'link',
    deletionUrl: 'https://help.max.com/US/Answer/Detail/000002345',
    privacyEmail: 'privacy@max.com',
    instructions: 'Log in -> Settings -> Account -> Scroll down and select \'Delete Account\' option.'
  },
  {
    id: 'soundcloud',
    name: 'SoundCloud',
    domain: 'soundcloud.com',
    category: 'Entertainment',
    deletionMethod: 'link',
    deletionUrl: 'https://help.soundcloud.com/hc/en-us/articles/115003566168-Deleting-your-account',
    privacyEmail: 'privacy@soundcloud.com',
    instructions: 'Open SoundCloud web browser client -> Settings -> Click \'Delete Account\' button in red.'
  },
  {
    id: 'bandcamp',
    name: 'Bandcamp',
    domain: 'bandcamp.com',
    category: 'Entertainment',
    deletionMethod: 'link',
    deletionUrl: 'https://bandcamp.com/settings',
    privacyEmail: 'privacy@bandcamp.com',
    instructions: 'Scroll down to the bottom of the Settings page -> Click \'Delete Account\' and enter your password.'
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    domain: 'tiktok.com',
    category: 'Social',
    deletionMethod: 'link',
    deletionUrl: 'https://support.tiktok.com/en/account-and-privacy/account-information/deactivating-or-deleting-your-account',
    privacyEmail: 'privacy@tiktok.com',
    instructions: 'Profile -> Settings & Privacy -> Manage Account -> Click "Delete Account" at the bottom.'
  },
  {
    id: 'instagram',
    name: 'Instagram',
    domain: 'instagram.com',
    category: 'Social',
    deletionMethod: 'link',
    deletionUrl: 'https://www.instagram.com/accounts/remove/request/permanent/',
    privacyEmail: 'privacy@instagram.com',
    instructions: 'Open Instagram Account Deletion portal page, choose deletion reason, and confirm password.'
  },
  {
    id: 'threads',
    name: 'Threads',
    domain: 'threads.net',
    category: 'Social',
    deletionMethod: 'link',
    deletionUrl: 'https://www.threads.net/settings/account',
    privacyEmail: 'privacy@threads.net',
    instructions: 'Log in -> Settings -> Account -> Deactivate or delete profile -> Click Delete profile.'
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    domain: 'whatsapp.com',
    category: 'Social',
    deletionMethod: 'link',
    deletionUrl: 'https://faq.whatsapp.com/1054325492211603/',
    privacyEmail: 'privacy@whatsapp.com',
    instructions: 'Open mobile application -> Settings -> Account -> Click "Delete My Account" to remove cloud archives.'
  },
  {
    id: 'mastodon',
    name: 'Mastodon',
    domain: 'mastodon.social',
    category: 'Social',
    deletionMethod: 'link',
    deletionUrl: 'https://mastodon.social/settings/delete',
    privacyEmail: 'privacy@mastodon.social',
    instructions: 'Go to Preferences -> Account -> Scroll down to "Delete Account" and verify password.'
  },
  {
    id: 'substack',
    name: 'Substack',
    domain: 'substack.com',
    category: 'Social',
    deletionMethod: 'link',
    deletionUrl: 'https://support.substack.com/hc/en-us/articles/360037839352-How-do-I-delete-my-Substack-account-',
    privacyEmail: 'privacy@substack.com',
    instructions: 'Go to Account Settings -> Scroll to bottom and select "Delete Account".'
  },
  {
    id: 'devto',
    name: 'Dev.to',
    domain: 'dev.to',
    category: 'Dev',
    deletionMethod: 'link',
    deletionUrl: 'https://dev.to/settings',
    privacyEmail: 'privacy@dev.to',
    instructions: 'Go to Settings -> Scroll to the danger zone -> Click "Delete Account" and type verification text.'
  },
  {
    id: 'gitlab',
    name: 'GitLab',
    domain: 'gitlab.com',
    category: 'Dev',
    deletionMethod: 'link',
    deletionUrl: 'https://docs.gitlab.com/ee/user/profile/account/delete_account.html',
    privacyEmail: 'privacy@gitlab.com',
    instructions: 'Go to User Settings -> Account -> Click "Delete Account" in red button.'
  },
  {
    id: 'bitbucket',
    name: 'Bitbucket',
    domain: 'bitbucket.org',
    category: 'Dev',
    deletionMethod: 'link',
    deletionUrl: 'https://id.atlassian.com/manage-profile/security',
    privacyEmail: 'privacy@atlassian.com',
    instructions: 'Bitbucket is managed by Atlassian. Log in to Atlassian ID -> Click Deactivate/Delete Account.'
  },
  {
    id: 'docker',
    name: 'Docker Hub',
    domain: 'docker.com',
    category: 'Dev',
    deletionMethod: 'link',
    deletionUrl: 'https://hub.docker.com/settings/deactivate',
    privacyEmail: 'privacy@docker.com',
    instructions: 'Log in to Docker Hub -> Settings -> Deactivate Account -> Confirm password.'
  },
  {
    id: 'npmjs',
    name: 'NPM',
    domain: 'npmjs.com',
    category: 'Dev',
    deletionMethod: 'link',
    deletionUrl: 'https://www.npmjs.com/settings/billing',
    privacyEmail: 'privacy@npmjs.com',
    instructions: 'Go to Profile Settings -> Access Token and Account -> Scroll down and click "Delete Account".'
  },
  {
    id: 'heroku',
    name: 'Heroku',
    domain: 'heroku.com',
    category: 'Dev',
    deletionMethod: 'link',
    deletionUrl: 'https://dashboard.heroku.com/account',
    privacyEmail: 'privacy@heroku.com',
    instructions: 'Go to Account Settings -> Scroll down to the bottom -> Click "Close Account" and verify credentials.'
  },
  {
    id: 'vercel',
    name: 'Vercel',
    domain: 'vercel.com',
    category: 'Dev',
    deletionMethod: 'link',
    deletionUrl: 'https://vercel.com/dashboard/settings',
    privacyEmail: 'privacy@vercel.com',
    instructions: 'Go to Account Settings -> General -> Scroll down to Danger Zone -> Click "Delete My Account".'
  },
  {
    id: 'netlify',
    name: 'Netlify',
    domain: 'netlify.com',
    category: 'Dev',
    deletionMethod: 'link',
    deletionUrl: 'https://app.netlify.com/user/settings',
    privacyEmail: 'privacy@netlify.com',
    instructions: 'Go to User Settings -> Profile -> Click \'Delete Account\' at the bottom of the form.'
  },
  {
    id: 'digitalocean',
    name: 'DigitalOcean',
    domain: 'digitalocean.com',
    category: 'Dev',
    deletionMethod: 'link',
    deletionUrl: 'https://cloud.digitalocean.com/settings/profile',
    privacyEmail: 'privacy@digitalocean.com',
    instructions: 'Go to Account settings -> Profile -> Scroll to bottom and click "Deactivate Account".'
  },
  {
    id: 'coinbase',
    name: 'Coinbase',
    domain: 'coinbase.com',
    category: 'Finance',
    deletionMethod: 'link',
    deletionUrl: 'https://www.coinbase.com/settings/privacy',
    privacyEmail: 'privacy@coinbase.com',
    instructions: 'Go to Settings -> Profile -> Scroll down and click \'Close Account\' after withdrawing balances.'
  },
  {
    id: 'binance',
    name: 'Binance',
    domain: 'binance.com',
    category: 'Finance',
    deletionMethod: 'link',
    deletionUrl: 'https://www.binance.com/en/support/faq/how-to-delete-my-binance-account-360000000000',
    privacyEmail: 'privacy@binance.com',
    instructions: 'Go to Security -> Account Activity -> Click "Disable or Delete Account".'
  },
  {
    id: 'wise',
    name: 'Wise',
    domain: 'wise.com',
    category: 'Finance',
    deletionMethod: 'link',
    deletionUrl: 'https://wise.com/help/articles/2977995/how-do-i-close-my-wise-account',
    privacyEmail: 'privacy@wise.com',
    instructions: 'Go to Settings -> Close Account -> Answer confirmation questions -> Complete closure.'
  },
  {
    id: 'revolut',
    name: 'Revolut',
    domain: 'revolut.com',
    category: 'Finance',
    deletionMethod: 'link',
    deletionUrl: 'https://help.revolut.com/help/profile-and-plan/profile-settings/how-do-i-close-my-revolut-account/',
    privacyEmail: 'dpo@revolut.com',
    instructions: 'Open mobile application -> Profile -> Account -> Scroll down and tap "Close Account".'
  },
  {
    id: 'robinhood',
    name: 'Robinhood',
    domain: 'robinhood.com',
    category: 'Finance',
    deletionMethod: 'link',
    deletionUrl: 'https://robinhood.com/contact',
    privacyEmail: 'privacy@robinhood.com',
    instructions: 'Go to Account -> Settings -> Account Information -> Tap "Close Account" or request help ticket.'
  },
  {
    id: 'shopify',
    name: 'Shopify',
    domain: 'shopify.com',
    category: 'Shopping',
    deletionMethod: 'link',
    deletionUrl: 'https://help.shopify.com/en/manual/your-account/pause-deactivate-store',
    privacyEmail: 'privacy@shopify.com',
    instructions: 'Go to Admin Dashboard -> Settings -> Plan -> Click Deactivate Store.'
  },
  {
    id: 'aliexpress',
    name: 'AliExpress',
    domain: 'aliexpress.com',
    category: 'Shopping',
    deletionMethod: 'link',
    deletionUrl: 'https://service.aliexpress.com/page/home?pageId=17&language=en',
    privacyEmail: 'privacy@aliexpress.com',
    instructions: 'Go to Account Settings -> Edit Member Profile -> Click \'Deactivate Account\'.'
  },
  {
    id: 'walmart',
    name: 'Walmart',
    domain: 'walmart.com',
    category: 'Shopping',
    deletionMethod: 'link',
    deletionUrl: 'https://www.walmart.com/help',
    privacyEmail: 'privacy@walmart.com',
    instructions: 'Go to Account settings -> Profile -> Contact Walmart Help center to request deletion.'
  },
  {
    id: 'target',
    name: 'Target',
    domain: 'target.com',
    category: 'Shopping',
    deletionMethod: 'link',
    deletionUrl: 'https://www.target.com/contact-us',
    privacyEmail: 'privacy@target.com',
    instructions: 'Log in -> Contact Target guest support to issue standard right-to-delete request.'
  },
  {
    id: 'bestbuy',
    name: 'Best Buy',
    domain: 'bestbuy.com',
    category: 'Shopping',
    deletionMethod: 'link',
    deletionUrl: 'https://www.bestbuy.com/site/privacy-policy/privacy-portal/',
    privacyEmail: 'privacy@bestbuy.com',
    instructions: 'Visit the Best Buy Privacy Portal -> Submit "Delete My Personal Information" request form.'
  },
  {
    id: 'ikea',
    name: 'IKEA',
    domain: 'ikea.com',
    category: 'Shopping',
    deletionMethod: 'link',
    deletionUrl: 'https://www.ikea.com/us/en/customer-service/privacy-policy/',
    privacyEmail: 'privacy@ikea.com',
    instructions: 'Log in -> Profile Settings -> Data & Privacy -> Submit "Delete Account" request.'
  },
  {
    id: 'pluralsight',
    name: 'Pluralsight',
    domain: 'pluralsight.com',
    category: 'Entertainment',
    deletionMethod: 'link',
    deletionUrl: 'https://help.pluralsight.com/help/delete-account',
    privacyEmail: 'privacy@pluralsight.com',
    instructions: 'Go to Account settings -> Click "Delete Account" -> Verify via validation email link.'
  },
  {
    id: 'masterclass',
    name: 'MasterClass',
    domain: 'masterclass.com',
    category: 'Entertainment',
    deletionMethod: 'link',
    deletionUrl: 'https://www.masterclass.com/privacy',
    privacyEmail: 'privacy@masterclass.com',
    instructions: 'Go to Account Settings -> Scroll to bottom -> Click "Delete Account" or contact privacy officer.'
  },
  {
    id: 'skillshare',
    name: 'Skillshare',
    domain: 'skillshare.com',
    category: 'Entertainment',
    deletionMethod: 'link',
    deletionUrl: 'https://help.skillshare.com/hc/en-us/articles/210080368-How-do-I-delete-my-account-',
    privacyEmail: 'privacy@skillshare.com',
    instructions: 'Go to Account Settings -> Membership -> Click \'Deactivate Account\' at the bottom.'
  },
  {
    id: 'scribd',
    name: 'Scribd',
    domain: 'scribd.com',
    category: 'Entertainment',
    deletionMethod: 'link',
    deletionUrl: 'https://support.scribd.com/hc/en-us/articles/210135186-Deleting-your-account',
    privacyEmail: 'privacy@scribd.com',
    instructions: 'Go to Account Settings -> Click \'Delete Account\' at the bottom of the page.'
  },
  {
    id: 'goodreads',
    name: 'Goodreads',
    domain: 'goodreads.com',
    category: 'Entertainment',
    deletionMethod: 'link',
    deletionUrl: 'https://www.goodreads.com/user/edit',
    privacyEmail: 'privacy@goodreads.com',
    instructions: 'Go to Account Settings -> Settings tab -> Scroll to the bottom and click "Delete my account".'
  },
  {
    id: 'imdb',
    name: 'IMDb',
    domain: 'imdb.com',
    category: 'Entertainment',
    deletionMethod: 'link',
    deletionUrl: 'https://help.imdb.com/article/imdb/general-information/how-do-i-delete-my-imdb-account/GAJQ6KUNH8F6YQ3E',
    privacyEmail: 'privacy@imdb.com',
    instructions: 'Go to Account Settings -> Scroll down and click "Delete my account" and confirm.'
  },
  {
    id: 'letterboxd',
    name: 'Letterboxd',
    domain: 'letterboxd.com',
    category: 'Entertainment',
    deletionMethod: 'link',
    deletionUrl: 'https://letterboxd.com/settings/deactivate/',
    privacyEmail: 'privacy@letterboxd.com',
    instructions: 'Go to Settings -> Deactivate account -> Select option and verify password.'
  },
  {
    id: 'lastfm',
    name: 'Last.fm',
    domain: 'last.fm',
    category: 'Entertainment',
    deletionMethod: 'link',
    deletionUrl: 'https://www.last.fm/settings/delete',
    privacyEmail: 'privacy@last.fm',
    instructions: 'Go to Account settings -> Click "Delete account" and enter password to confirm.'
  },
  {
    id: 'myheritage',
    name: 'MyHeritage',
    domain: 'myheritage.com',
    category: 'Other',
    deletionMethod: 'link',
    deletionUrl: 'https://www.myheritage.com/help-center#/article/en_US/How-do-I-delete-my-MyHeritage-account',
    privacyEmail: 'privacy@myheritage.com',
    instructions: 'Go to Account Settings -> Click "Delete my account" -> Complete MFA verification.'
  },
  {
    id: 'ancestry',
    name: 'Ancestry.com',
    domain: 'ancestry.com',
    category: 'Other',
    deletionMethod: 'link',
    deletionUrl: 'https://support.ancestry.com/s/article/Deleting-an-Ancestry-Account',
    privacyEmail: 'privacy@ancestry.com',
    instructions: 'Go to Account Settings -> Scroll down to Danger Zone -> Click "Delete Account".'
  },
  {
    id: 'zillow',
    name: 'Zillow',
    domain: 'zillow.com',
    category: 'Other',
    deletionMethod: 'link',
    deletionUrl: 'https://www.zillow.com/profile/Settings/',
    privacyEmail: 'privacy@zillow.com',
    instructions: 'Go to Profile Settings -> Click "Deactivate Account" at the bottom.'
  },
  {
    id: 'redfin',
    name: 'Redfin',
    domain: 'redfin.com',
    category: 'Other',
    deletionMethod: 'link',
    deletionUrl: 'https://www.redfin.com/myredfin/settings',
    privacyEmail: 'privacy@redfin.com',
    instructions: 'Log in -> Profile Settings -> Account Status -> Click Deactivate/Delete Account.'
  },
  {
    id: 'yelp',
    name: 'Yelp',
    domain: 'yelp.com',
    category: 'Other',
    deletionMethod: 'link',
    deletionUrl: 'https://www.yelp.com/support/article/How-do-I-close-my-account?l=en_US',
    privacyEmail: 'privacy@yelp.com',
    instructions: 'Visit the Account Closure request page -> Fill in verification form -> Click submit.'
  },
  {
    id: 'opentable',
    name: 'OpenTable',
    domain: 'opentable.com',
    category: 'Other',
    deletionMethod: 'link',
    deletionUrl: 'https://www.opentable.com/privacy-policy',
    privacyEmail: 'privacy@opentable.com',
    instructions: 'Go to Account Settings -> Scroll down to Security -> Click \'Delete My Account\'.'
  },
  {
    id: 'glassdoor',
    name: 'Glassdoor',
    domain: 'glassdoor.com',
    category: 'Other',
    deletionMethod: 'link',
    deletionUrl: 'https://help.glassdoor.com/s/article/Close-my-Glassdoor-account?language=en_US',
    privacyEmail: 'privacy@glassdoor.com',
    instructions: 'Go to Account settings -> Account Preferences -> Click \'Close Account\'.'
  },
  {
    id: 'indeed',
    name: 'Indeed',
    domain: 'indeed.com',
    category: 'Other',
    deletionMethod: 'link',
    deletionUrl: 'https://support.indeed.com/hc/en-us/articles/217997863-How-Do-I-Close-My-Indeed-Account-',
    privacyEmail: 'privacy@indeed.com',
    instructions: 'Go to Account Settings -> Click "Close My Account" and confirm deletion.'
  },
  {
    id: 'ziprecruiter',
    name: 'ZipRecruiter',
    domain: 'ziprecruiter.com',
    category: 'Other',
    deletionMethod: 'link',
    deletionUrl: 'https://www.ziprecruiter.com/privacy',
    privacyEmail: 'privacy@ziprecruiter.com',
    instructions: 'Go to Account Settings -> Scroll to Personal Data -> Click "Delete My Information".'
  },
  {
    id: 'monster',
    name: 'Monster',
    domain: 'monster.com',
    category: 'Other',
    deletionMethod: 'link',
    deletionUrl: 'https://www.monster.com/privacy/cancel-account',
    privacyEmail: 'privacy@monster.com',
    instructions: 'Log in -> Account settings -> Click "Cancel Account" in Profile management.'
  },
  {
    id: 'meetup',
    name: 'Meetup',
    domain: 'meetup.com',
    category: 'Other',
    deletionMethod: 'link',
    deletionUrl: 'https://www.meetup.com/account/deactivate/',
    privacyEmail: 'privacy@meetup.com',
    instructions: 'Go to Account settings -> Click "Deactivate account" -> Enter your password to complete deletion.'
  },
  {
    id: 'strava',
    name: 'Strava',
    domain: 'strava.com',
    category: 'Other',
    deletionMethod: 'link',
    deletionUrl: 'https://www.strava.com/settings/profile',
    privacyEmail: 'privacy@strava.com',
    instructions: 'Go to Settings -> My Account -> Scroll down and select "Get Started" under Delete Account.'
  },
  {
    id: 'fitbit',
    name: 'Fitbit',
    domain: 'fitbit.com',
    category: 'Other',
    deletionMethod: 'link',
    deletionUrl: 'https://help.fitbit.com/articles/en_US/Help_article/1285.htm',
    privacyEmail: 'privacy@fitbit.com',
    instructions: 'Go to Settings -> Personal Info -> Scroll down -> Click "Delete Account".'
  },
  {
    id: 'babbel',
    name: 'Babbel',
    domain: 'babbel.com',
    category: 'Entertainment',
    deletionMethod: 'link',
    deletionUrl: 'https://support.babbel.com/hc/en-us/articles/205603748-How-do-I-delete-my-Babbel-account-',
    privacyEmail: 'privacy@babbel.com',
    instructions: 'Go to Profile Settings -> Account Info -> Click "Delete Babbel Account" at the bottom.'
  },
  {
    id: 'memrise',
    name: 'Memrise',
    domain: 'memrise.com',
    category: 'Entertainment',
    deletionMethod: 'link',
    deletionUrl: 'https://support.memrise.com/hc/en-us/articles/360015889317-How-do-I-delete-my-account-',
    privacyEmail: 'privacy@memrise.com',
    instructions: 'Go to Settings -> Profile -> Scroll to bottom -> Click "Delete account" and enter password.'
  }
];
