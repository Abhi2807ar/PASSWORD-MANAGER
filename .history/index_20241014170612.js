//logic to fill the table
let tb=document.querySelector("tablle")
let data=localStorage.getItem("passwords")
if(data==null){
    tb.innerHTML="n"
}

else {
    let arr=JSON.parse(data);
    for(let index=0; index<arr.length;index++){
        const element=arr[index];
    

str=`<tr>

<td>${element.website}</td>
<td>${element.username}</td>
<td>${element.password}</td>
<td>${"Delete"}</td>
</tr>`
}
tb.innerHTML=tb.innerHTML +str
}