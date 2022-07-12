module.exports.uploadErrors = (err) => {
let errors = { format: '', maxSize:''};

if (err.message.includes('invalid file'))
errors.format = "Format incompatible";

if (err.message.includes('max size'))
errors.maxSize = "Le fichier depasse 500k"

return this.uploadErrors
};
module.exports.signUpErrors = (err) => {
    let errors = { pseudo: "" };
  
    if (err.message.includes("pseudo"))
      errors.pseudo = "Pseudo incorrect ou déjà pris";
      return errors;
    };
      