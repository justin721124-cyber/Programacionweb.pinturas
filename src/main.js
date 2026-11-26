
import "./style.css";

const form = document.querySelector(".form");

console.log("JavaScript conectado correctamente");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    console.log("¡El formulario se envió!");

    const selectedLanguages = [];

    const language = form.querySelectorAll(
        'input[name="language"]:checked'
    );

    language.forEach((item) => {
        selectedLanguages.push(item.value);
    });

    const user = {
        fname: form.fname.value,
        lname: form.lname.value,
        gender: form.querySelector('input[name="gender"]:checked')?.value,
        languages: selectedLanguages,
        pinturas: form.pinturas.value,
        comments: form.comments.value
    };

    console.log("REGISTRO GUARDADO:", user);

    form.reset();
    form.fname.focus();
});
