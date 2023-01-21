// Nije prava asinhrona funkcija
async function calculateSum(a,b) {
    return = new Promise(function (resolve, reject) {
        //NaN - Not a Number
        //isNaN(a) - a nije broj
        //!isNaN(a) - a jeste broj
        //isNaN(a) => true or false

        if (!isNaN(a) && !isNaN(b)) {
            resolve(a + b); 
        } else {
            reject("Uneti brojevi nisu ispravni");
        }
    });
return myPromise;
}

//calculateSum (2,"a") - vraca error u catch bloku
calculateSum(2,3)
.then(function (result) {
    /*
    u then se nalazi funkcija koja ce da hendluje(upravlja) 
    podatke koje smo dobili nakon sto je promise uspesno zavrsen
    => prikazi korisniku podatke koje je trazio
    document.write(result.sum);
    */
})
.catch(function (error) {
    /*
    prikazi korisniku gresku da nesto nije kako treba
    console.log("error", error);
    document.write(error);
    */
});

//////////////////////////////////////////////////////////////////////////////////////////////

// fetch - asinhrona funkcija koja nam sluzi da saljemo zahteve (requests) na server
fetch("https://jsonplaceholder.typicode.com/posts/100")
.then(function (result) {
    return result.json();
})
.then(function (result2) {
    console.log('FETCH RESPONSE', result2);
})
.catch(function (error) {
    console.log('FETCH ERROR', error);
});

// default method = GET
// other methods = POST,PUT,DELETE,PETCH

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST', // za kreiranje neceg novih resursa
  body: JSON.stringify({ //body je ono sto saljemo da bismo kreirali novi resurs na serveru
    title: 'itcamp',
    body: 'Test test test',
    userId: 999,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
.then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });