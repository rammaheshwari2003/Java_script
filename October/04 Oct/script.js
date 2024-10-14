document.getElementById("btn1").addEventListener("click",dataDisplay); 

async function dataDisplay(){
    let Table=`<table border="1" width="90%" bgcolor="yellow">
                            <tr bgcolor=orange>
                            <th> Slug </th>
                            <th> Url </th>
                            <th> Title </th>
                            <th> Status </th>
                            <th> image </th>
                            </tr>`
            
        let api="https://jsonplaceholder.org/posts";
        const Obj=await fetch(api);
        const Data=await Obj.json();
        Data.map((item)=>{
            Table+=`<tr>
                    <td> ${item.slug} </td>
                    <td> ${item.url} </td>
                    <td> ${item.title} </td>
                    <td> ${item.status} </td>
                    <td> <img src"${item.image}" width="100"height="100"> </td>
                    </tr>`
        })
        Table+="</table>";
        document.getElementById("demo").innerHTML=Table;
                            
}