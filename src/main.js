const minhaPromise = () => new Promise((resolve, reject)=>{
    setTimeout(() => {resolve('OK')}, 2000);
});

//minhaPromise().then(response => ...);

//async function executaPromise(){
    //console.log(await minhaPromise());
    //console.log(await minhaPromise());
    //console.log(await minhaPromise());
    
    /*minhaPromise()..then(response => {
        console.log(response);

        minhaPromise().then(response => {
            console.log(response);
        })
    })
    */
    
//}

const executaPromise = async() =>{
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
}

executaPromise();