"use strict";
var guest_list = ['Afzal', 'Nouman', 'Maqsood', 'Wajahat'];
var guest_name = guest_list[0];
console.log(guest_name + " Kindly come to dinner till 10 PM.");
var guest_name1 = guest_list[1];
console.log(guest_name1 + " Kindly meet me for the dinner tommorow");
var guest_name2 = guest_list[2];
console.log(guest_name2 + " Kindly meet us at dinner on Friday. ");
var guest_name3 = guest_list[3];
console.log(guest_name3 + " Kindly arrange Bottles for the dinner tonight.");
console.log(guest_name2 + " just called me that he will be not available");
// deleting one of the guest
guest_list.splice(2, 1, "Ali");
console.log(guest_name, " confirmed his avalaibilty");
console.log(guest_name1, "will also join");
console.log(guest_name2, " He will be 10 mins late");
console.log(guest_name3, " Already purchased");
