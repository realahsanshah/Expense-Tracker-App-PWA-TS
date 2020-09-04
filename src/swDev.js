export default function swDev(){
    const swUrl=`${process.env.PUBLIC_URL}/expense-tracker-sw.js`;
    navigator.serviceWorker.register(swUrl)
    .then((resp)=>{
        console.warn(resp);
    });

}