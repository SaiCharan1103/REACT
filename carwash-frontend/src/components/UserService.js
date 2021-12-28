import axios from "axios";

const ORDERS_REST_API_URL ='http://localhost:8082/order/allorders';

class OrderService {
    getOrders(){
        return axios.get(ORDERS_REST_API_URL);
    }
}
export default new OrderService();