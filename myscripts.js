document.addEventListener("DOMContentLoaded", (e) => {
    
    // POST NAME
    postName = () => {
        let li = document.createElement("li")                                           // create balise li
            li.className = 'li'
        
        const inputValue = document.getElementById('name').value                        // get value input name 
        const newContent = document.createTextNode(inputValue)                          // create text with value input
        
        li.appendChild(newContent)                                                      // add newContent in li
        
        checkAndAddChildName(inputValue, li)                                           // call fonction check  
        setItemStorage(inputValue, inputValue)                                          // CALL FUNCTION CHECK STORAGE 
    }   

    // POST SUBJECT 
    postSubject = () => {
        let li = document.createElement("li")                                           // create balise li
            li.className = 'liAsign'
                                            
        let inputValue = document.getElementById('asigne').value                        // get value input name 
        let arrayLi = document.querySelectorAll('li')                                   // get all li

        let restult = random(arrayLi)                                                   // get random li si inputValue a une valeur
        restult.className += restult ? ' checked' : ''                                  // ajoute une classe au li recupéré
       
        setItemStorage(restult.innerHTML, restult.innerHTML + "#checked")               // On stock dans le store 
        let array = joinArray(inputValue, restult.textContent)                          // join elem input 
        
        let newContent = document.createTextNode(array)                                 // create text with value input
        li.appendChild(newContent)                                                      // add newContent in li
        
        checkAndAddChildSubject(inputValue, li)                                         // ADD CHILD SUBJECT
        setItemStorage(inputValue, array)                                               // CALL FUNCTION CHECK STORAGE 
    }

    // FONCTION RANDOM
    random = (array) => {
        let item = array[Math.floor(Math.random() * array.length)] 
        return item
      }

    // FONCTOON FETCH STORAGE 
    fetchStore = () => {
        const ulName = document.getElementById('ulName')
        const ulSubject = document.getElementById("ulSubject")

        for(i=0; i < localStorage.length; i++){
            const key = localStorage.key(i)
            const value = localStorage.getItem(key)
            
            if(key === value || value === key + "#checked" ){
                if(value.includes('#checked')){
                    ulName.insertAdjacentHTML( "afterbegin", `<li class='li checked'>${key}</li>`)
                }else {
                    ulName.insertAdjacentHTML( "afterbegin", `<li class='li'>${value}</li>`)
                }
            }else if(key !== value ){
                ulSubject.insertAdjacentHTML( "afterbegin", `<li class='li'>${value}</li>`)
            }

        }
    }

    // CHECK INPUT NAME
    checkAndAddChildName = (input, li) => {
        if(input === ''){
            error()
        }else{
            document.getElementById("ulName").appendChild(li)
        }
        document.getElementById('name').value = ""
    }

    // ADD CHILD SUBJECT
    checkAndAddChildSubject = (input, li) => {
        if(input === ''){
            error()
        }else{
            document.getElementById("ulSubject").appendChild(li)
        }
        document.getElementById('asigne').value = ""
    }

    // CHECK KEY AND VALUE IN STORAGE 
    setItemStorage = (key, value) => {
        if(key && value){
            localStorage.setItem(key, value);
        }
    }

    // JOIN 
    joinArray = (item1, item2) => {
        let array = [item1, item2] 
        array = array.join(" - ")
        return array
    }

    // REFRESH
    refresh = () => {
        localStorage.clear();
        location.reload();
    }

    // WARNING ERROR
    error = () => {
        alert("LE CHAMP EST VIDE")
        console.log("LE CHAMP EST VIDE")
    }
})