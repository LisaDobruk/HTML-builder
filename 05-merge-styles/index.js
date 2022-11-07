const fs = require('fs/promises');
const path = require('path');

const styleFolder = path.join(__dirname, 'styles');
const bundleFile = path.join(__dirname, 'project-dist', 'bundle.css');

const mergeFiles = async()=>{
    try{
        let styleFiles = await fs.readdir(styleFolder, { withFileTypes: true });
        let arrStyle = [];
        for(let file of styleFiles){
            
            const pathFile = path.join(styleFolder, file.name);
           
            let ext = path.extname(file.name);
            if(file.isFile() && ext == ".css"){
                const data = await fs.readFile(pathFile, 'utf-8');
                arrStyle.push(data);
            }
          }
     await fs.writeFile(bundleFile, arrStyle);
    }catch(err){console.error(err)}
}
mergeFiles();