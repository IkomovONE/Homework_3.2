import "./styles.css"



async function GetData() {
    
    const url= "https://statfin.stat.fi/PxWeb/sq/4e244893-7761-4c4f-8e55-7a8d41d86eff"
    
    const url2= "https://statfin.stat.fi/PxWeb/sq/5e288b40-f8c8-4f1e-b3b0-61b86ce5c065"
    
    
    
    const Fetched= await fetch(url)
    
    const Fetched2= await fetch(url2)
    
    const CountryData= await Fetched.json()
    
    const EmploymentData= await Fetched2.json()
    
    
    console.log(EmploymentData)
    
    
    
    
    var label= CountryData.dataset.dimension.Alue.category.label
    
    var values=  CountryData.dataset.value
    
    var Employment= EmploymentData.dataset.value
    
    
    
    
    
   
       for (let i = 0; i < Object.values(label).length; i++) {
        
         var TableRow = document.createElement("tr")
         
         
         var td1= document.createElement("td")
         
         var td2= document.createElement("td")
         
         var td3= document.createElement("td")
         
         var td4= document.createElement("td")
         
         
         
         
         
         td1.innerText= Object.values(label)[i]
         
         
         td2.innerText= Object.values(values)[i]
         
         td3.innerText= Object.values(Employment)[i]
         
         
         
         
         var EmploymentRate= (Object.values(Employment)[i]/Object.values(values)[i]*100).toFixed(2)
         
         
         if (EmploymentRate>45) {
             
             TableRow.setAttribute("id", "green")
             
             
             
         }
         
         
         if (EmploymentRate<25) {
             
             TableRow.setAttribute("id", "red")
             
         }
         
         
         
         
         td4.innerText= EmploymentRate+ "%"
         
         TableRow.appendChild(td1)
         TableRow.appendChild(td2)
         
         TableRow.appendChild(td3)
         
         TableRow.appendChild(td4)
         
         document.getElementById("table1").appendChild(TableRow)
         
         
         
         
         
       }        
         
         
         
        
         
         
         
     
    
    
    
}


GetData()


