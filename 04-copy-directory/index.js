
const fs = require('fs/promises');
const path = require('path');
const src = path.join(__dirname, 'files');
const dest = path.join(__dirname, 'files-copy');

const copyFolder = async() => {
   try{ 
    await fs.rm(dest, {recursive: true, force: true}, (err)=>{
        if(err){
            console.error(err);
        }
    });

    await fs.mkdir(dest, {recursive: true});
    let files = await fs.readdir(src);
    

     for(let file of files){
        let srcPath = path.join(src, file);
        let destPath = path.join(dest, file);

        await fs.copyFile(srcPath, destPath);
     }
    }catch(err){console.log(err)}
}
copyFolder();
