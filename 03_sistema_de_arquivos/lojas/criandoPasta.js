import { promises as fs } from 'fs';
import path from 'path';
import url from 'url';

var __filename = url.fileURLToPath(import.meta.url);
var __dirname = path.dirname(__filename);

// console.log(__filename);
// console.log(__dirname);

// await fs.mkdir(path.join(__dirname,'lojas','201','funcionarios'));

console.log(path.join(__dirname, 'lojas', '201', 'funcionarios'));

try{
    await fs.mkdir(path.join(__dirname, 'lojas', '201', 'funcionarios'));
}catch(error){
    console.log(`Erro ao criar ${pasta} código: ${error.code}`);
}
