//logic to fill the table


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