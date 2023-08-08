const ajout = document.querySelector("#added")
const field = document.querySelector(".inputfield")
const todolist = document.getElementById("todolist")

ajout.addEventListener("click", ()=>{
    const inputValue= field.value
    if(inputValue){
        const tr = document.createElement('tr')
        const th = document.createElement('th')
        const span = document.createElement('span')
        const td = document.createElement('td')
        const btn1 = document.createElement('button')
        const btn2 = document.createElement('button')
        const btn3 = document.createElement('button')

        tr.classList.add("fw-normal")
        td.classList.add("align-middle")
        span.classList.add("ms-2")
        btn1.textContent='TO DO'
        btn1.classList.add("btn1")
        btn2.classList.add("btn2")
        btn2.textContent='DOING'
        btn3.classList.add("btn3")
        btn3.textContent='DONE'
        td.classList.add("allbtn")

        todolist.appendChild(tr)
        tr.appendChild(th)
        th.appendChild(span);
        tr.appendChild(td)
        td.appendChild(btn1)
        td.appendChild(btn2)
        td.appendChild(btn3)

        btn1.addEventListener("click", ()=>{
            tr.style.background = "red"
        })
        btn2.addEventListener("click", ()=>{
            tr.style.background = "orange"
        })
        btn3.addEventListener("click", ()=>{
            tr.style.background = "green"
        })



        span.innerText=`${inputValue}`
        field.value=""
    }
})