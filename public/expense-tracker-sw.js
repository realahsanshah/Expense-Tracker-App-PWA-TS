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
    event.respondWith(
        caches.match(event.request)
        .then((resp)=>{
            if(resp){
                return resp;
            }
        })
    )
})