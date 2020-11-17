/**Task: Identify the longest of three names.
Build Specifications:
Start with three variables name1, name2, and name3 which hold three names.
The code should output the longest of the three names. e.g., "Ada Lovelace has the longest
name.". If there is a tie between any two, list both. e.g., “Charles and Brendan tie for the longest
name.”. Or if all three names are the same length, output “All three names, Dorothy, Charles,
and Brendan, are the same length.”
Make sure to test your code with many different combinations of lengths. There are 7 possible
outcomes. */

const name1 = "Shannon";
const name2 = "Keith";
const name3 = "Bob";

len1 = name1.length;
len2 = name2.length;
len3 = name3.length;

if (len1 > len2 && len1 > len3){
    console.log(name1 + " has the longest name.");
} else if (len2 > len1 && len2 > len3){
    console.log(name2 + " has the longest name.");
} else if (len3 > len1 && len3 > len2){
    console.log(name3 + " has the longest name.");
} else if (len1 === len2 && len1 > len3){
    console.log(name1 + " and " +name2 + " tie for the longest name.");
}else if (len1 === len3 && len1 > len2){
    console.log(name1 + " and " +name3 + " tie for the longest name.");
}else if (len2 === len3 && len2 > len1){
    console.log(name2 + " and " +name3 + " tie for the longest name.");
}else if (len1 === len2 && len1 === len3){
    console.log("All three names," +name1+ ", "+name2+" ,and "+name3+" , are the same length.");
}