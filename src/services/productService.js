import axios from "axios";

export default class ProductService {
  getProducts() {
    return axios.get("http://localhost:8080/api/products/getall");
  }
  getById(id) {
    return axios.get("http://localhost:8080/api/products/getById?id=" + id);
  }
  add(values) {
    return axios.post("http://localhost:8080/api/products/add",values)
  }
}
