var arr = [
    { name: "Led Bulbs", Image: "https://www.assets.lighting.philips.com/is/image/PhilipsLighting/f51741a6a1f74eb697f6a95300150245?$jpglarge$&wid=1250" },
    { name: "Emergency Bulbs", Image: "https://www.assets.lighting.philips.com/is/image/PhilipsLighting/f51741a6a1f74eb697f6a95300150245?$jpglarge$&wid=1250" },
    { name: "Cables", Image: "https://www.dfliq.net/wp-content/uploads/2016/08/Underground-Cables.jpg" },
    { name: "Extensions", Image: "https://th.bing.com/th/id/R.795660d47b052f000659f7a5697a9d41?rik=ViVBkBsYH9gYlg&riu=http%3a%2f%2fimages.linnlive.com%2f23982779ac9fbfb3d9848f9e6c4a3338%2ffedd151c-a756-4321-bbdc-4d3c2fbd7e4c.jpg&ehk=aOD3teYSUOIBNc%2fdXIba56A9CAtf6fpXVux4S2RSfyU%3d&risl=&pid=ImgRaw&r=0" },
    { name: "Iron Press", Image: "https://5.imimg.com/data5/FN/NP/MY-3749516/steam-iron-press-500x500.jpg" },
    { name: "Ceilling Fan", Image: "https://rukminim1.flixcart.com/image/832/832/jdnevm80/fan/w/b/g/900-mm-fan-ss-390-met-sparkle-brown-ceiling-fan-havells-original-imaet2bazefzrbb7.jpeg?q=70" },
    { name: "Exhaust Fan", Image: "https://cpimg.tistatic.com/04483437/b/4/extra-04483437.jpg" },
    { name: "Heaters", Image: "https://th.bing.com/th/id/R.a7b430462d784a66b2db89d991476d98?rik=5JwMf%2bXWA%2bCrvg&riu=http%3a%2f%2fimage.sportsmansguide.com%2fadimgs%2fl%2f6%2f651032i_ts.jpg&ehk=0F5qNcUQZgeWci6btc45vH6FtUeo45ogUQHrg9vAEps%3d&risl=&pid=ImgRaw&r=0" },
    { name: "Immersion Rod", Image: "https://images-na.ssl-images-amazon.com/images/I/51zIq%2BthKYL._SX569_.jpg" },
    { name: "Led Bulbs", Image: "https://www.assets.lighting.philips.com/is/image/PhilipsLighting/f51741a6a1f74eb697f6a95300150245?$jpglarge$&wid=1250" },
]


function showCards(){
    var count='';
    arr.forEach(function(obj){
        count +=`<div class="main-container">
        <img src="${obj.Image}"  alt="">
         <h3>${obj.name}</h2>
         <h2>50% OFF</h2>
         <h3>Shop Now</h2>
                                  
    </div>`
    })
     document.querySelector('#container').innerHTML=count;
}

// function handleSearchFunctionality(){
//     var searchInput=document.querySelector('#searchInput')
//     searchInput.addEventListener("input", function(){
//         const filteredArray=arr.filter(obj => obj.name.toLowerCase().startsWith(searchInput.value))
//         console.log(filteredArray)

//     })
// }
showCards();
// handleSearchFunctionality()


