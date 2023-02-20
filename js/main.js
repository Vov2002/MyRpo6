//Задание 1
let pm5 = document.querySelector('.pm5')
let out = document.querySelector('.out')
let m = [1,2,3,4,5,6,7,8,9,10,11];
pm5.onclick = () =>{
    let r = m[4]
    out.innerHTML = r
}
//Задание 2
let cn = document.querySelector('.cn')
let ncn = document.querySelector('.ncn')
let out2 = document.querySelector('.out2')
let c = [20,21,22,23,24,25,26,27,28,29,30,31,32]
cn.onclick = () =>{
    for (let i = 0; i < c.length; i++) {
        if(c[i] % 2 == 0) 
          console.log(c[i]);
      }
}
//Задание 3
ncn.onclick = () =>{
    for (let i = 0; i < c.length; i++) {
        if(c[i] % 2) 
          console.log(c[i]);
      }
}
//Задание 4
let ptm = document.querySelector('.ptm')
let tm = [
    [1,2,3],
    [4,5,6],
    [7,8,9]

]
ptm.onclick = () =>{
    for(let i = 0; i < tm.length; i++){
        let h = tm[i]
        for(let j = h.length -1; j>=0; j--){
            console.log(h[j])
        }
    }
}
