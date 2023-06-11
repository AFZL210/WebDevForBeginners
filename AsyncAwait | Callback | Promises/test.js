function getData() {
    return new Promise((resolve, reject) => {
        const err = false;
        if(!err) resolve({name: "afzal"});
        else reject("blah blah");
    })
}

async function myF() {
    try {
        const res = await getData();
        console.log(res);
    }catch(e) {
        console.log(e);
    }
}

myF();
