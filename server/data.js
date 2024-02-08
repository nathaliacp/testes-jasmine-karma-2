import fs from "fs";
import path from "path";
import Datauri from "datauri/sync";

const dataList = [];

for (let i = 0; i < 18; i++) {
    const id = i + 1;
    const file = path.resolve(__dirname, `./imgs/${id}.jpg`);
    const url = Datauri(file).content;
    const data = { id, url, description: `photo ${id} description here` };
    dataList.push(data);
}

export default dataList;
