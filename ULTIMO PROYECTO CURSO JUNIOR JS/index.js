const contenedor = document.querySelector(".contenedor-llaves")
const crearLlave = (modelo,codigo,precio) => {
    imagen = `<img src="llave.png" class="llave-img">`;
    modelo = `<h2 id="${modelo}">${modelo}</h2>`;
    codigo = `<h3>${codigo}</h3>`;
    precio = `<p><b>${precio}</b></p>`;
    return [imagen,modelo,codigo,precio,];
}

let fragmento = document.createDocumentFragment();

for (i=1; i <= 20; i++){
    let modeloRandom = Math.round(Math.random()*100);
    let precioRandom = Math.round(Math.random()*30+10);
    let llave = crearLlave (`Modelo: ${modeloRandom}`,`Codigo: ${i}`, `Precio: ${precioRandom}`);
    let div = document.createElement(`DIV`);
    div.classList.add(`item-${i}`, `flex-item`);
    div.tabIndex = i;
    div.innerHTML = llave[0] + llave[1] + llave[2] + llave[3];
    fragmento.appendChild(div);
}

contenedor.appendChild(fragmento);