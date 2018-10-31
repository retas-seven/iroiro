function resolveSmple(value) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(value);
        }, 2000);
    })
}

async function asyncSample() {
    let result = 0;
    result = await resolveSmple(100);
    return result + 5;
}

function myTest() {
    asyncSample().then(result => {
        console.log(result);
    });

    console.log("myTestEnd");
}