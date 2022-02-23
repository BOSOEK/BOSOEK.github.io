export interface WebsiteConfig {
  title: string;
  description: string;
  coverImage?: string;
  logo: string;
  /**
   * Specifying a valid BCP 47 language helps screen readers announce text properly.
   * See: https://dequeuniversity.com/rules/axe/2.2/valid-lang
   */
  lang: string;
  /**
   * blog full path, no ending slash!
   */
  siteUrl: string;
  /**
   * full url, no username
   */
  facebook?: string;
  /**
   * full url, no username
   */
  github?: string;/**
  * full url, no username
  */
  linkedin?: string;
  /**
   * full url, no username
   */
  kaggle?: string;
  /**
  * full url, no username
  */
  twitter?: string;
  /**
   * hide or show all email subscribe boxes
   */
  showSubscribe: boolean;
  /**
   * create a list on mailchimp and then create an embeddable signup form. this is the form action
   */
  mailchimpAction?: string;
  /**
   * this is the hidden input field name
   */
  mailchimpName?: string;
  /**
   * name and id of the mailchimp email field
   */
  mailchimpEmailFieldName?: string;
  /**
  /**
   * Meta tag for Google Webmaster Tools
   */
  googleSiteVerification?: string;
  /**
  /**
   * Appears alongside the footer, after the credits
   */
  footer?: string;
  /**
   * Shows all post tags in main index view and post view if true
   * Otherwise only shows first (primary) tag
   */
  showAllTags: boolean;
}

const config: WebsiteConfig = {
  title: 'BEKSI',
  description: 'Bosoek\'s Tech & knowledge Storage.',
  coverImage: 'img/blog-cover.png',
  logo: 'img/img.png',
  lang: 'en',
  siteUrl: 'https://bosoek.github.io',
  facebook: 'https://www.facebook.com/profile.php?id=100011713266028',
  github: 'https://github.com/BOSOEK',
  linkedin: 'https://www.linkedin.com/in/%EB%B3%B4%EC%84%9D-%EA%B9%80-206984217/',
  kaggle: 'https://www.kaggle.com/kimbosoek',
  showSubscribe: false,
  mailchimpAction: 'https://twitter.us19.list-manage.com/subscribe/post?u=a89b6987ac248c81b0b7f3a0f&amp;id=7d777b7d75',
  mailchimpName: 'b_a89b6987ac248c81b0b7f3a0f_7d777b7d75',
  mailchimpEmailFieldName: 'MERGE0',
  googleSiteVerification: 'GoogleCode',
  footer: 'All Rights Reserved.',
  showAllTags: true,
};

export default config;
