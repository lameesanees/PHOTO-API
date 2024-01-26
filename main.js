htmlData=""
res=fetch("https://jsonplaceholder.typicode.com/photos")
console.log(res)
res.then(res=>res.json()).
then(res=>{
    data=res.slice(0,50)
    console.log(data)
    data.forEach(item=>{
        htmlData+=`
        <div class="card" style="width:18rem;">
        <img src="${item.url}"class="card-img-top">
        <div class="card-body">
        <h5 class ="card-title">${item.title}<?h5>
        </div>
        </div>`
    })
    result.innerHTML=htmlData
}).
catch(rej=>console.log(rej))