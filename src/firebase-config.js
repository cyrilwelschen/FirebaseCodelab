/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */

const firebaseConfig = {
    apiKey: "AIzaSyBOackWy7SOFj4QThCtO9IyEohfCEXhhz4",
    authDomain: "friendlychat-88b91.firebaseapp.com",
    projectId: "friendlychat-88b91",
    storageBucket: "friendlychat-88b91.appspot.com",
    messagingSenderId: "277668596135",
    appId: "1:277668596135:web:a082da8bd7ba885593ce82"
};


export function getFirebaseConfig() {
    if (!config || !config.apiKey) {
        throw new Error('No Firebase configuration object provided.' + '\n' +
            'Add your web app\'s configuration object to firebase-config.js');
    } else {
        return config;
    }
}