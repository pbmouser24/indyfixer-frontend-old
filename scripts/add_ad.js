addEventListener("DOMContentLoaded", function(){
    document.querySelector("#addBtn").addEventListener("click", addAd)
})

//add the ad to the database.. it has to be async function because we are calling data outside our server

async function addAd(){
    //create a ad object based on the form that the user fills out.  this will make life easier when we send the data to the backend
    const ad = {
        ServiceRequest: document.querySelector("#ServiceRequest").value,
        Desc: document.querySelector("#Desc").value,
        DatePosted: document.querySelector("#DatePosted").value,
        JobCategory: document.querySelector("#JobCategory").value,
        DateNeeded: document.querySelector("#DateNeeded").value,
        TimeSlot: document.querySelector("#TimeSlot").value,
        email: document.querySelector("#email").value,
        City: document.querySelector("#City").value,
        ServiceRequest: document.querySelector("#ServiceRequest").value,
        ZipCode: document.querySelector("#ZipCode").value        
    }

    const response = await fetch("http://localhost:3000/api/ads",{
        method: "POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(ad)
    })

    if(response.ok){
        const results = await response.json()
        alert("Added ad with ID of" + results._id)

        //reset the form after ad is succesfully added
        document.querySelector("form").reset()
    }

    else{
        document.querySelector("#error").innerHTML = "Cannot add ad"
    }


}