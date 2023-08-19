var guest_list1 = ['Afzal', 'Nouman', 'Maqsood', 'Wajahat'];
console.log(guest_list1[0] + " Kindly come to dinner till 10 PM.");
console.log(guest_list1[1] + " Kindly meet me for the dinner tommorow");
console.log(guest_list1[2] + " Kindly meet us at dinner on Friday. ");
console.log(guest_list1[3] + " Kindly arrange Bottles for the dinner tonight.");
console.log(guest_list1[2] + " just called me that he will be not available");
// deleting one of the guest
guest_list1.splice(2, 1, "Ali");
// after deletion printing the remaining persons in array
console.log(guest_list1[0], " confirmed his avalaibilty");
console.log(guest_list1[1], "will also join");
console.log(guest_list1[2], " He will be 10 mins late");
console.log(guest_list1[3], " Already purchased");
// Task 16 starts which requires first  print statement of the bigger dinner
console.log("We found a bigger dinning table");
// adding one new guest in the beginning so using unshift
guest_list1.unshift("Imran");
// adding one new guest in the middle by using splice
guest_list1.splice(3, 0, "Fazal");
// adding one new guest in the end of array by using push
guest_list1.push("Safdar");
// printing the new members messages at the end
//console.log(guest_list)
console.log(guest_list1[0], "On my Way");
console.log(guest_list1[1], "ill be a bit late");
console.log(guest_list1[2], "Reached my destination");
console.log(guest_list1[3], "Hope everyone will be there");
console.log(guest_list1[4], "Near destination");
console.log(guest_list1[5], "So finally reunion");
console.log(guest_list1[6], "Can someone guide me the location");
