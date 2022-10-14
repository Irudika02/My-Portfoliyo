function saveOrder(orderId,cusId,cusName,itemCode,itemName,qtyOnHand,unitPrice,qty){
    return{
        orderId:orderId,
        id: cusId,
        name: cusName,
        code: itemCode,
        itemName: itemName,
        qtyOnHand: qtyOnHand,
        price:unitPrice,
        qty:qty
    };
}