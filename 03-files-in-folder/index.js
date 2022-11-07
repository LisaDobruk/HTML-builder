const fs = require('fs');
const path = require('path');

const folder = path.join(__dirname, 'secret-folder');

async function getData(){
    try{
        let files = await fs.promises.readdir(folder, {withFileTypes: true});
        for(let file of files){
            if(file.isFile()){
                const fileName = path.parse(file.name).name;
                const fileExt = path.extname(file.name).slice(1);
                const filePath = path.join(folder, `${file.name}`);
                fs.stat(filePath, (err, stats)=>{
                    console.log(`${fileName} - ${fileExt} - ${stats.size/1024}kb`);
                })
            }
        }
    }
    catch(err){
        console.log(err);
    }
}
getData();
