import { addDoc, collection } from "firebase/firestore";
import { db } from "../../config/FirebaseConfig";

const products = [
      {
        name: "Codear",
        imageSrc: "https://firebasestorage.googleapis.com/v0/b/porfolio-84774.appspot.com/o/proyecto%2Fcodear.webp?alt=media&token=e58d07ac-7835-4cca-b99b-3bb7133bdd46",
        technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Git"],
        githubLink: "https://github.com/lautiok/codear",
        liveDemoLink: "https://codear.ar/"
      }
      
];


export const Sembrador = () => {
  products.forEach((product) => {
    if (isValidProduct(product)) {
      addDoc(collection(db, "projects"), product);
    }
  });
};

function isValidProduct(product) {
  const requiredFields = ['name', 'imageSrc', 'technologies', 'githubLink', 'liveDemoLink'];
  return requiredFields.every(field => product.hasOwnProperty(field) && product[field]);
}