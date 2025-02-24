// import from readline
import * as readline from 'node:readline/promises';
// import * as readline from 'node:readline';
import { stdin as input, stdout as output } from 'node:process';

import * as fs from 'node:fs/promises'; // import from fs
// import * as fs from 'node:fs';

import path from 'node:path'; // import from path

import { consola, createConsola } from "consola"; // import from consola


// start project
export const fileManager = async () => {
    // setting directory
    const dir = path.dirname('./data/data');

    const rl = readline.createInterface({ input, output });

    let isLoop = true; // will loop until user choose to quit

    while (isLoop) {
        // choosing main menu
        const response = await rl.question('1. | Create File\n2. | Delete File\n3. | Read File\nWhat program do you want to run?(1/2/3) ');

        switch (response) {
            case '1':
                const fileName = await rl.question('input file name: ');
                const contentFile = await rl.question('input content: ');
                const fileCreate = path.format({
                    dir: dir,
                    base: fileName
                })
                await fs.writeFile(fileCreate, contentFile, 'utf-8');
                await consola.success(`File ${fileName} has been saved`);
                break;

            case '2':
                await console.log('========== files ==========');
                const listFilesDel = await fs.readdir(dir, 'utf-8');
                listFilesDel.forEach((e) => {
                    consola.start(`${e}\n---------------------------`)
                })
                if (listFilesDel.length === 0) consola.info('This directory is empty');
                const fileDelete = await rl.question('what file you want to delete? ');
                const fileDel = path.format({
                    dir: dir,
                    base: fileDelete
                })
                await fs.unlink(fileDel);
                await consola.success(`File ${fileDelete} has been deleted`);
                break;

            case '3':
                await console.log('========== files ==========');
                const listFilesRead = await fs.readdir(dir, 'utf-8');
                listFilesRead.forEach((e) => {
                    consola.start(`${e}\n---------------------------`)
                })
                if (listFilesRead.length === 0) consola.info('This directory is empty');
                const fileRead = await rl.question('What file you want to read? ');
                const readPath = path.format({
                    dir: dir,
                    base: fileRead
                })
                const readFile = await fs.readFile(readPath, 'utf-8');
                await consola.box(readFile);
                break;

            default: await consola.error(new Error('invalid input. Please input: 1/2/3 '))
        }

        const res = await rl.question('Do you want to continue?(y/n) ');
        if (res === 'y') continue;
        if (res === 'n') isLoop = false;
        else consola.error(new Error('invalid input!')); isLoop = false;
    }

    rl.close();
}