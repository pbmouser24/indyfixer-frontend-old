//we are going to make an event listener.. it will trigger with the DOM is loaded (aka upon visiting webpage)
addEventListener("DOMContentLoaded", async function(){
    const response = await fetch("http://localhost:3000/api/ads")
    const ads = await response.json()

    let html = ""
    for (let ad of ads){
        html+=`<li>${ad.ServiceRequest} - ${ad.Desc}</li>`
    }
    
    document.querySelector("#list_of_ads").innerHTML = html

})