function component() {
    let element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = 'hi'

    return element;
}

let obj = {name: 'mark', gender: 'gender'}
if(window.hasOwnProperty('finesse'))
{
    console.log('mainjs, has own property', window)
}

document.body.appendChild(component());

export function testExport() {
   console.log('hi, this is exported')
}
window.testExport = testExport
