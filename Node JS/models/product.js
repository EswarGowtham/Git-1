const fs=require('fs')
const path=require('path')
const p=path.join(
    path.dirname(require.main.filename),
    'data',
    'products.json'
);
const getProductsfromfile=cb=>{
    fs.readFile(p,(err,data)=>{
        if(err){
            cb([])
        }else{
            cb(JSON.parse(data))
        }
    })
}
module.exports=class Product{
    constructor(title){
        this.title=title;
    }

    save(){
        this.id=Math.random().toString()
        getProductsfromfile(products=>{
            products.push(this)
            fs.writeFile(p,JSON.stringify(products),err=>{
                console.log(err)
            })
        });

        fs.readFile(p,(err,data)=>{
            console.log(err)
        });
    }

    static fetchAll(cb){
        getProductsfromfile(cb)
    }

    static findbyId(id,cb){
        getProductsfromfile(products=>{
            const product=products.find(p=>p.id===id)
            cb(product)
        })
    }
}