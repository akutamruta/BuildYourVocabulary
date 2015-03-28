# About the application
This web application helps individuals appearing for GRE exam in preparing their vocabulary. 

This application has 2 sections
1. Learn
	In this section the application presents a list of high frequency words displayed in a tabular format. The wordlist is contains a set of high frequency words and it is stored in firebase
2. Flash Cards
	In this section, users can test their vocabulary skills by using the flash cards presented to them. The words for the flash cards are selected randomly which enables users to truly test their vocabulary skills

In addition to this, the app is designed to be mobile-first and can also work offline. It is responsive, uses the latest service workers based on ES6 promises and caches the wordlist in IndexedDb to deliver a truly offline experience. 

To test it, visit https://buildyourvocabulary.appspot.com/ . 

#Technologies Used
- HTML, JavaScript, CSS
- Web Components and Polymer
- Service worker
- Bootstrap CSS
- Firebase
- Gulp for build process and miscellaneous tasks

#To-Do
- Add test section
- Incorporate routing
- Incorporate testing (using chai, mocha, karma etc.)
- Include the service worker polyfill

#Known Issues
- Learn page not working on IE
- Not working at all on Chrome for iOS

#Stretch Goals
- Incorporate push notifications
- Display Google Now cards if possible
