const db = {
    user: [
        {id:1,name:"marcelo"}
    ]

};

async function list(tabla){
    return await db[tabla];
}

async function get(tabla, id){
    let col = list(tabla);
    return await col.filter(item => item.id === id)[0] || null;
}

async function upsert(tabla, data){
    await db[collection].push(data);
}

async function remove(tabla, id){
    return await true;
}


module.exports = {
    list,
    get,
    upsert,
    remove
}