# About the application
This web application helps individuals appearing for GRE exam in preparing their vocabulary. 

This application has 2 sections
1. Learn
	In this section the application presents a list of high frequency words displayed in a tabular format
2. Test
	In this section, users can test their vocabulary skills by using the flash cards presented to them. The words for the flash cards are selected randomly which enables users to truly test their vocabulary skills
3.	Wordlist 
	The wordlist is contains a set of high frequency words and it is stored in firebase

In addition to this, the app can also work offline. It is responsive, uses the latest service workers based on ES6 promises and caches the wordlist in IndexedDb to deliver a truly offline experience. 

To test it, visit https://buildyourvocabulary.appspot.com/ . 
P.S: Currently you need to mention /index.html explicitly after going offline because of a bug in the service worker code.

#Technologies Used
- HTML, JavaScript, CSS
- Web Components and Polymer
- Service worker
- Bootstrap CSS
- Firebase
- Gulp for build process and miscellaneous tasks

#To-Do
- Include the service worker polyfill
- Include basic instructions in the Test page
- Make the app mobile-compatible
- Incorporate routing
- Improve UX
- Incorporate testing (using chai, mocha, karma etc.)

#Stretch Goals
- Incorporate push notifications
- Display Google Now cards if possible
