const arrow= document.querySelector('.arrow');
const speed=document.querySelector('.speed-value');
//get some geo data
navigator.geolocation.watchPosition((data)=>{
    console.log(data);

    //get speed data
    speed.textContent=data.coords.speed;
    //rotate arrows
    arrow.style.transform=`rotate(${data.coords.heading}deg)`;

},(err)=>{
console.err(err)
alert('allow geo service');
});