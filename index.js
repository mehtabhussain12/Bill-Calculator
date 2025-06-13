
var laptopPrice = 50000; 
var smartphonePrice = 30000; 
var headphonesPrice = 5000; 
var laptopQty = +(prompt("Enter quantity of Laptops: "));
var smartphoneQty = +(prompt("Enter quantity of Smartphones: "));
var headphonesQty = +(prompt("Enter quantity of Headphones: "));


var totalBill = (laptopQty * laptopPrice) + (smartphoneQty * smartphonePrice) + (headphonesQty * headphonesPrice);
var discount = 0;

if (totalBill > 5000) {
    discount = totalBill * 0.20; 
} else if (totalBill > 3000) {
    discount = totalBill * 0.15; 
} else if (totalBill > 1000) {
    discount = totalBill * 0.10; 
} else {
    discount = 0; 
}
document.write("Total Bill: Rs " + totalBill + "<br>");
document.write("Discount: Rs " + discount + "<br>");