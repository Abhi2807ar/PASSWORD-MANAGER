//logic to fill the table
const deletePassword=(website)=>{
    let data=localStorage.getItem("passwords")
    let arr=JSON.parse(data);
    arrUpdated=arr.filter((e)=>{
        return e.website !=website
    })
    localStorage.setItem("passwords",JSON.stringify( arrUpdated))
}
const showPasswords=()=>{
let tb=document.querySelector("table")
let data=localStorage.getItem("passwords")
if(data==null){
    tb.innerHTML="No Data To Show"
}

else {
  tb.innerHTML=`<tr>
              <th>website</th>
              <th>username</th>
              <th>Password</th>
              <th>Delete</th>
            </tr>`

    let arr=JSON.parse(data);
    let str=""
    for(let index=0; index<arr.length;index++){
        const element=arr[index];
    

         str+=`<tr>

<td>${element.website} <img  onClick ="copyText(${}) src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'><path fill='none' d='M0 0h24v24H0z'/><path fill='currentColor' d='M16 1H8c-1.1 0-2 .9-2 2v1H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-1h1c1.1 0 2-.9 2-2v-9l-6-6zm2 16h-1v1H5V6h1v1h8V2h4v9h-3c-1.1 0-2 .9-2 2v3c0 1.1.9 2 2 2zm0-5v-4.5l4.5 4.5H18zM8 4h8v2H8V4z'/></svg>" alt="Copy Button" />
</td>
<td>${element.username}<img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'><path fill='none' d='M0 0h24v24H0z'/><path fill='currentColor' d='M16 1H8c-1.1 0-2 .9-2 2v1H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-1h1c1.1 0 2-.9 2-2v-9l-6-6zm2 16h-1v1H5V6h1v1h8V2h4v9h-3c-1.1 0-2 .9-2 2v3c0 1.1.9 2 2 2zm0-5v-4.5l4.5 4.5H18zM8 4h8v2H8V4z'/></svg>" alt="Copy Button" /></td>
<td>${element.password}<img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'><path fill='none' d='M0 0h24v24H0z'/><path fill='currentColor' d='M16 1H8c-1.1 0-2 .9-2 2v1H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-1h1c1.1 0 2-.9 2-2v-9l-6-6zm2 16h-1v1H5V6h1v1h8V2h4v9h-3c-1.1 0-2 .9-2 2v3c0 1.1.9 2 2 2zm0-5v-4.5l4.5 4.5H18zM8 4h8v2H8V4z'/></svg>" alt="Copy Button" /></td>
<td><button class="btnsm" onClick="deletePassword(${element.website})">Delete</button></td>
</tr>`
}
tb.innerHTML=tb.innerHTML +str
}
website.value=""
username.value=""
password.value=""
}
console.log("Working");
showPassswords()
Document.querySelector("btn").addEventListener("click",(e)=>{
    e.preventDefault()
    console.log("Clicked....")
    console.log(username.value,password.value)
    let passwords=localStorage.getItem("passwords")
    console.log(passwords)
    if(passwords==null){
        let json=[]
    json.push({website:website.value,username:username.value,password:password.value})
    alert("Password Saved");
    localStorage.setItem("passwords",JSON.stringify(json))
}
else{
    let json=JSON.parse(localStorage.getItem("passwords"))
    json.push({website:website.value,username:username.value,password:password.value})
    alert("Password Saved");
    localStorage.setItem("passwords",JSON.stringify(json))
}
showPasswords()
})