window.onload = () => {
  document.querySelector(".arrow-right").addEventListener("click", clickRight);
  document.querySelector(".arrow-left").addEventListener("click", clickLeft);
  document
    .querySelector(".send-button")
    .addEventListener("click", e => validateForm(e)); 
  document.querySelectorAll(".project").forEach(element => {
    element.addEventListener("click", e => openModal(e));
  });
  document.body.addEventListener("click", e => closeModal(e));
  document.body.addEventListener("keyup", e => listenForEsc(e));
};

/** Esta funcion se llama cuando la persona hace click en la fecha derecha del carousel para navegar a la derecha */
function clickRight() {
  const currentLeft = parseInt(
    getComputedStyle(document.querySelector(".project-container")).left,
    10
  );
  if (currentLeft < -270) { 
    return;
  }
  let newValue = currentLeft - 270; 
  document.querySelector(".project-container").style.left = `${newValue}px`;
  switch (newValue){ 
    case -270:
      document.querySelector('.project1').setAttribute("tabindex", "-1");
      document.querySelector('.project1-container').setAttribute("aria-hidden", true); 
      document.querySelector('.project4').removeAttribute("tabindex"); 
      document.querySelector('.project4-container').removeAttribute("aria-hidden") 
      break; 
    case -540:
      document.querySelector('.project2').setAttribute("tabindex", "-1"); 
      document.querySelector('.project2-container').setAttribute("aria-hidden", "true"); 
      document.querySelector('.project5').removeAttribute("tabindex"); 
      document.querySelector('.project5-container').removeAttribute("aria-hidden"); 
      break; 
    default: 
      break;
  }
}

/** Esta funcion se llama cuando la persona hace click en la fecha izquierda del carousel para navegar a la izquierda */
function clickLeft() {
  const currentLeft = parseInt(
    getComputedStyle(document.querySelector(".project-container")).left,
    10
  );
  if (currentLeft === 0) { 
    return;
  }
  let newValue = currentLeft + 270;
  document.querySelector(".project-container").style.left = `${newValue}px`;
  switch (newValue){ 
    case -270:
      document.querySelector('.project5').setAttribute("tabindex", "-1"); 
      document.querySelector('.project5-container').setAttribute("aria-hidden", "true");
      document.querySelector('.project2').removeAttribute("tabindex"); 
      document.querySelector('.project2-container').removeAttribute("aria-hidden"); 
      break; 
    case 0:
      document.querySelector('.project4').setAttribute("tabindex", "-1"); 
      document.querySelector('.project4-container').setAttribute("aria-hidden", "true");
      document.querySelector('.project1').removeAttribute("tabindex"); 
      document.querySelector('.project1-container').removeAttribute("aria-hidden"); 
      break; 
    default: 
      break;
    }
  }


/** Esta funcion se llama cuando la persona hace click en el boton de enviar del formulario de contacto */
function showNotification() {
  document.getElementById("name-error").innerHTML = ""; 
  document.querySelector('.form-container').reset();
  document.querySelector(".notification").innerHTML= "El formulario fue enviado sin errores"; 
  document.querySelector(".notification").style.display = "flex";
  setTimeout(function() {
    document.querySelector(".notification").style.display = "none";
  }, 3000);
}

function openModal(e) {
  document.querySelector(".modal-container").style.display = "flex";
  document.getElementById('modal-header').focus(); 
}

//Esta funcion se llama para cerrar el modal 
function closeModal(e) {
  if (
    e.target.className.includes("project") ||
    e.target.className === "modal"
  ) {
    return;
  } else {
    document.querySelector(".modal-container").style.display = "none";
  }
}
function listenForEsc(e) { 
  if (e.keyCode === 27)
  { 
    closeModal(e)
  }
}
function validateForm(e) {
  e.preventDefault();
  const nameField = document.getElementById("name"); 
  if (nameField.value === ""){
    document.getElementById("name-error").innerHTML = "! Para enviar el formulario, se necesita un nombre";
  } 
  else {
    showNotification();
  }
}
