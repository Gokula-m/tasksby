// 1. extract first five letters from a string (' gfuh ieiuei ')
var str1 = " gfuh ieiuei ";
console.log(str1.slice(1, 6));

// 2. get the length of a string and make it uppercase ('hduej dij')
var str2 = "hduej dij";
console.log(str2.length);
console.log(str2.toUpperCase());

//  3. take a string, make it lowercase and trim it (' biji jdo ')
var str3 = "    BuJJi kaLKi ";
console.log(str3.toLowerCase());
console.log(str3.trim());

// 4. replace specified word in a string ('', '')
var str4 = "front-end dev: html, css, js are the basic dev tech stack of front-end dev.";
console.log(str4.replace("end", "END"));
console.log(str4.replaceAll("end", "END"));

// 5. random statements in implicit coercion e.g. (89 + 'hello' + 90 / 9)
console.log(89 + 'hello' + 90 / 9);