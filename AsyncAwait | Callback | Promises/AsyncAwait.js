const datas = [
    {
        name: "Afzal",
        prof: "Student",
        age: 18
    },

    {
        name: "Raju",
        prof: "Student",
        age: 18
    }
]


function getDatas() {
    setTimeout(() => {
        let output = "";
        datas.forEach((data,index) => {
            output+=`<li>${data.name}</li>`;
        })

        document.body.innerHTML = output;
    },1000)
}

function createData(newData) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            datas.push(newData);
            let error = false;
            if(!error){
                resolve();
            }else{
                reject("Error");
            }
        },2000)
    })
}

newUser = {name:"vivek",prof:"student",age:20};

async function start() {
    await createData({ name: "Raj" });
    getDatas();
}

start()