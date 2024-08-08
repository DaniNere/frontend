import axios from "axios";

export async function getPets() {
     const response = await axios.get("http://localhost:3000/pets");

     return response.data;
}

export async function getPet(id) {
    const response = await axios.get(`http://localhost:3000/pets/${id}`);

    return response.data;
}

export async function addPet(data){
const response = await axios.post("http://localhost:3000/pets", data);
//esse data do response é o retorno do back end, onde podemos trazer mais informações como o message do err
  return response.data;
}

export async function updatePets(id,data){

    const response = await axios.put (`http://localhost:3000/pets/${id}`, data);

    return response.data;
}

export async function deletePet(id) {
    const response = await axios.delete(`http://localhost:3000/pets/${id}`);
    return response.data;
  }

