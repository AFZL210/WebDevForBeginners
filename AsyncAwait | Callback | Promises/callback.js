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

function createData(newData,callback) {
    setTimeout(() => {
        datas.push(newData);
        callback()
    },2000)
}

newUser = {name:"vivek",prof:"student",age:20};

// getDatas()
createData(newUser,getDatas)
