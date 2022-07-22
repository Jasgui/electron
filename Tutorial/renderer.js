const information = document.getElementById('info')
information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`

const nameinput = document.getElementById('nameinput')
const firstbutton = document.getElementById('firstbutton')
const texttochange = document.getElementById('texttochange')

firstbutton.onclick = function() {
    texttochange.innerText = "Well hello there, " + nameinput.value;
};


const func = async () => {
    
    const response = await window.versions.ping();
    console.log(response);
    
    
};

func();
