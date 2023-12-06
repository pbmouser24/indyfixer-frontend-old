addEventListener("DOMContentLoaded", async function(){
    document.querySelector("#deleteBtn").addEventListener("click", deleteAd)
    getAllAds()
})

async function getAllAds(){
    const response = await fetch("http://localhost:3000/api/ads")
    if(response.ok){
        const ads = await response.json()
        let html = ""
        for(let ad of ads){
            html += `<option value="${ad._id}">${ad.Desc}</option>`
        } 
        document.querySelector("#adDropDown").innerHTML = html      
    }
    
}

async function deleteAd(){
    //get the ad id
    const adId = document.querySelector("#adDropDown option:checked").value
    const response = await fetch("http://localhost:3000/api/ads/" + adId,{
        method: "DELETE"        
    })
    if(response.ok){
        alert("Ad Deleted")
        getAllAds()
    }
    else{
        document.querySelector("#error").innerHTML = "Cannot delete ad";
    }
}
