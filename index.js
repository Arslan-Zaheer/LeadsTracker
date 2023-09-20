

let myLeads = []

let oldLeads = []

let inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")

let input_btn = document.getElementById("input-btn")
let delete_btn = document.getElementById("delete-btn")
let tab_btn = document.getElementById("tab-btn")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads")) 



if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}else{
    console.log("No Leads Yet!")
}


function render(leads){
    let listItems = ""
for(let i=0;i<leads.length;i++){

                                             //ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"

                                            // const li_el = document.createElement("li")
                                            // li_el.textContent = myLeads[i]
                                            // ulEl.append(li_el)

    listItems += `
            <li> 
                <a target='_blank' href='${leads[i]}'>${leads[i]}</a> 
            </li>
    `

}

ulEl.innerHTML = listItems
}

delete_btn.addEventListener("dblclick",function(){

        localStorage.clear()
        myLeads = []
        render(myLeads)
})


input_btn.addEventListener("click",function(){

    myLeads.push(inputEl.value)
    document.getElementById('input-el').value=''

   localStorage.setItem("myLeads",JSON.stringify(myLeads)) //This line of code is use to convert javascript object or array into string to save in the localStorage

   render(myLeads)
    
})


tab_btn.addEventListener("click",function(){
    chrome.tabs.query({active: true, currentWindow: true },function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads",JSON.stringify(myLeads))
         render(myLeads)
    })
})


