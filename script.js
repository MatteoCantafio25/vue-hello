// CONTROLLO SE HO COLLEGATO VUE DALLA CONSOLE
console.log("Vue ok", Vue);

// FACCIO IL DESTRUCTURING DEL METODO CREATEAPP DA VUE
const { createApp } = Vue;

// CREO L'APPLICAZIONE
const app = createApp({
    // DO IL NOME ALL'APPLICAZIONE
    name: "Vue Hello",
    // USO LA FUNZIONE (DATA) PER FARMI RESTITUIRE L'OGGETTO
    data() {
        // CREO L'OGGETTO
        return {
            message: "Vue diventeremo migliori amici!",
            image: "https://content-s3.tuttocampo.it/Teams/Original/1065969.png?v=3",
        }
    }
})

// MONTO L'APPLICAZIONE NELL'ELEMENTO SELEZIONATO TRA PARENTESI
app.mount("#root");