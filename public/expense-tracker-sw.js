const cacheData='appV1';

this.addEventListener('install',(event)=>{
    event.waitUntil(
        caches.open(cacheData)
            .then((cache)=>{
                cache.addAll([
                    '/static/js/main.chunk.js',
                    '/static/js/1.chunk.js',
                    '/static/js/bundle.js',
                    '/static/js/0.bundle.js',
                    '/index.html',
                    '/'

                ]);
            })
    )
});

this.addEventListener('fetch',(event)=>{
    if(!navigator.onLine){
    event.respondWith(
        caches.match(event.request)
        .then((resp)=>{
            if(resp){
                return resp;
            }
        })
    )
    }
})


 /* eslint-disable no-undef */

importScripts('https://www.gstatic.com/firebasejs/7.19.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.19.1/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyDZMAteg9tJqcjqt6yLdCxlKeenn7967Hs",
    authDomain: "fir-messaging-app-demo.firebaseapp.com",
    projectId: "fir-messaging-app-demo",
    messagingSenderId: "1008015040203",
    appId: "1:1008015040203:web:7158705b6460896625454e"
});

firebase.messaging();