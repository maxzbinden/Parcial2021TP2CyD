// Dado un array de numeros enteros, retornar el 3er mayor
// Por ejemplo en: [4,3,4,5,1] el tercer mayor es 3
// si la longitud del array es < 3 se debe retornar undefined

const greater3 = nums => {
    let aux = nums.map((num => {
        return num;
    }));
    console.log("aux " + aux);
    let devolucion = [];
    aux.sort((a,b) => b-a);
    console.log("aux ordenado " + aux);
    if(aux.length <3){
        return undefined;
    }else{
        aux.forEach(num => {
            if(!devolucion.includes(num)){
                devolucion.push(num);
            }
        });
        return devolucion[2];
    }
    
}


// TESTs no modificar
console.log(greater3([4,3,4,5,1]) === 3);
console.log(greater3([3,4]) === undefined);
console.log(greater3([4,4,4]) === undefined);
console.log(greater3([1,1,2,5]) === 1);