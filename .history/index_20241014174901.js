//logic to fill the table
const deletePassword=(website)=>{
    let data=localStorage.getItem("passwords")
    let arr=JSON.parse(data);
    arr=arr.filter((e)=>{
        return e.website !=website
    })
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

<td>${element.website}</td>
<td>${element.username}</td>
<td>${element.password}</td>
<td>${"Delete"}</td>
</tr>`
}
tb.innerHTML=tb.innerHTML +str
}
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