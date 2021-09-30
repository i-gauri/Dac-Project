import React from 'react'
import {writeJsonFile} from 'write-json-file';
import foo from './foo.json';


const json = () => {
    await writeJsonFile('./foo.json','foo.json', {foo: true});

    return (
        <div>
           done json 
        </div>
    )
}

export default json
