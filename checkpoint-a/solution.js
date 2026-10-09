import { findOrder, findAllOrders } from "./orders-db.js";

// 1. loadOrders()
export async function loadOrders() {
  return await findAllOrders();
}

// 2. myOrders(orders)
export function myOrders(orders) {
  return orders.filter(
    (order) => order.city === "Giza" && order.status === "paid"
  );
}

// 3. summarize(orders)
export function summarize(orders) {
  return orders.reduce(
    (total, order) => total + order.price * order.quantity,
    0
  );
}

// 4. describeOrder(id)
export async function describeOrder(id) {
  try {
    const order = await findOrder(id);
    return `${order.student} ordered ${order.quantity} x ${order.item}`;
  } catch (error) {
    return `Missing order: ${id}`;
  }
}

// 5. toJsonLines(orders)
export function toJsonLines(orders) {
  const mapped = orders.map((order) => ({
    student: order.student,
    city: order.city,
  }));
  return JSON.stringify(mapped);
}



