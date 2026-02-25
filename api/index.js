let BASE_URL=`http://localhost:7000/contacts`

// let dataResponse=fetch(BASE_URL).then((res)=>{
//     console.log(res);
    
//     return res.json()
// }).then((data)=>{
//     data.map((contact)=>console.log(`${contact.id} : ${contact.name}`)
//     )
// })


// async function getData(){
//     try{
//         let response=await fetch(BASE_URL);
//         let data=response.json()
//         console.log(data);
        
//     }catch(error){
//         console.log(error);
        

//     }
// }

// getData()

async function getResponse(name){
    console.log(await "hello");

    let data="BYE";
    console.log(await data);
    console.log(await name);
    
    console.log("good bye");

    let name2=await "vijay";
    console.log(name2);
    
    
    
    
}

getResponse("ajay")


async function getRepo(){
    let response=await fetch(BASE_URL);
    let data=await response.json();
    return data
}

getRepo().then(data=>console.log(data)
);







