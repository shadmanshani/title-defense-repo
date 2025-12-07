// Order database using localStorage (JSON format)

const ORDERS_KEY = 'repairBeforeReplace_orders';

// Get all orders from localStorage
export const getAllOrders = () => {
    const ordersJSON = localStorage.getItem(ORDERS_KEY);
    return ordersJSON ? JSON.parse(ordersJSON) : [];
};

// Save orders to localStorage
const saveOrders = (orders) => {
    localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
};

// Create a new order
export const createOrder = (orderData, user) => {
    const orders = getAllOrders();

    const newOrder = {
        id: orderData.bookingId || 'BK' + Date.now().toString().slice(-6),
        userId: user?.id || 'guest',
        userName: user?.name || orderData.customerInfo.name,
        userEmail: user?.email || orderData.customerInfo.email,
        userPhone: orderData.customerInfo.phone,
        service: orderData.service,
        device: orderData.device,
        issue: orderData.issue,
        selectedDate: orderData.selectedDate,
        selectedTime: orderData.selectedTime,
        pickupOption: orderData.pickupOption,
        address: orderData.customerInfo.address,
        notes: orderData.notes || '',
        status: 'Pending',
        createdAt: new Date().toISOString(),
        estimatedCost: orderData.pickupOption === 'pickup' ? 300 : 200
    };

    orders.unshift(newOrder); // Add to beginning of array
    saveOrders(orders);

    return newOrder;
};

// Get orders for a specific user
export const getUserOrders = (userId) => {
    const orders = getAllOrders();
    return orders.filter(order => order.userId === userId);
};

// Get order by ID
export const getOrderById = (orderId) => {
    const orders = getAllOrders();
    return orders.find(order => order.id === orderId);
};

// Update order status
export const updateOrderStatus = (orderId, newStatus) => {
    const orders = getAllOrders();
    const orderIndex = orders.findIndex(order => order.id === orderId);

    if (orderIndex !== -1) {
        orders[orderIndex].status = newStatus;
        orders[orderIndex].updatedAt = new Date().toISOString();
        saveOrders(orders);
        return orders[orderIndex];
    }

    return null;
};

// Delete order
export const deleteOrder = (orderId) => {
    const orders = getAllOrders();
    const filteredOrders = orders.filter(order => order.id !== orderId);
    saveOrders(filteredOrders);
    return true;
};
