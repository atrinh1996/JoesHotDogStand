/* 
 * main.js
 *
 * Gives Hot Dog stand order summary. Includes meal tax in receipt. 
 * Diplays to html page. 
 * 
 * Display the following by writing to html
 * h x "hotdog"             $hotdog
 * f x "fries"              $fries
 * d x "drinks"             $drinks
 *
 * "Subtotal"               $substotal_amt
 * "Discount"               $final_discount
 * "Tax"                    $tax
 * "Total"                  $total
 * 
 * Amy B
 * Comp20
 * 2.26.2021
 */

// PRICES & RATES
const HOTDOG_PRICE = 3.25;
const FF_PRICE = 2.00;
const DRINKS_PRICE = 1.50;
const DISCOUNT = 0.10;
const MEAL_TAX = 0.0625;

// When user runs the page, prompt qty of hotdogs, fries, and soda
h = prompt("How many HOTDOGS would you like?", 0);
f = prompt("How many FRIES would you like?", 0);
d = prompt("How many SODAS would you like?", 0);

// Store these food quantities in an array. 
const quantities = [h, f, d];
const foods = ['Hotdogs', 'Fries', 'Drinks'];

// Calculate subtotal based on pricing and qty
hotdog_cost = h * HOTDOG_PRICE;
fries_cost = f * FF_PRICE;
drinks_cost = d * DRINKS_PRICE;

// Create array of all food costs
const costs = [hotdog_cost, fries_cost, drinks_cost];

// APPLY DISCOUNT: If cost before tax is at >= $20, 10% discount
subtotal_amt = hotdog_cost + fries_cost + drinks_cost;
final_discount = 0;
if (subtotal_amt >= 20) {
    final_discount = subtotal_amt * DISCOUNT;
    //subtotal_amt = subtotal_amt * (1 - DISCOUNT);
}

// add the 6.25% meal tax
tax = subtotal_amt * MEAL_TAX;

// TOTAL = SUBTOTAL + MEAL TAX
total = subtotal_amt + tax - final_discount;

const final_pricing = [subtotal_amt, final_discount, tax, total];
const receipt_bottom = ['Subtotal', 'Discount', 'Tax', 'Total'];


// Loop through the foods and quantities arrays to display how much was ordered.
const food_qty = document.querySelector('#food-qty');
for (let i = 0; i < quantities.length; i++) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${quantities[i]}   x   ${foods[i]}`));
    food_qty.appendChild(li);
}

// Display Cost of each food order
const food_cost = document.querySelector('#food-cost');
for (let i = 0; i < costs.length; i++) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`$${costs[i].toFixed(2)}`));
    food_cost.appendChild(li);
}

// Display text of receipt
const total_display = document.querySelector('#total-display');
for (let i = 0; i < receipt_bottom.length; i++) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${receipt_bottom[i]}:`));
    total_display.appendChild(li);
}

// Display Total Costs
const actual_total = document.querySelector('#actual-total');
for (let i = 0; i < final_pricing.length; i++) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`$${final_pricing[i].toFixed(2)}`));
    actual_total.appendChild(li);
}

document.querySelector('h2').style.visibility = 'visible';