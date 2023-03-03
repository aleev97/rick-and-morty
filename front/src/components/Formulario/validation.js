const validation = (userData) =>{
  let errors = {};
     
  if(!/^[^\s@]+@[^\s@*]+\.[^\s@]+$/.test(userData.username)) {
    errors.username ="El email es invalido";
  }
  
  if(!userData.username) {
    errors.username = "el campo esta vacio";
  }

  if(userData.username.length > 35) {
    errors.username = "el campo no puede tener mas de 35 caracteres"
  }

  if(!userData.password.match(/\d/)) {
    errors.password ="la contraseña tiene que tener al menos un número.";
  }
  
  if(userData.password.length < 6 || userData.password.length > 10) {
    errors.password = "la contraseña debe que tener una longitud entre 6 y 10 caracteres"
  }
  return errors;
}

export default validation;