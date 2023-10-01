
const formData = {
    nombre: "Leandro",
    apellido: "Ricci",
    fechaNacimiento: "1990-01-01",
  };
  
  // Realizar la solicitud HTTP POST
  fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Respuesta del servidor:", data);
    })
    .catch((error) => {
      console.error("Error al enviar la solicitud:", error);
    });
  