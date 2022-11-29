
import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8000/",
});

export const createSession = async(email, password) => {
  let dados = {"email":email, "password":password}
  return api.post('/usuarios/', dados);
};

export const logar = async(email, password) => {
  return api.get("/usuarios/" + email, { email, password } );
};