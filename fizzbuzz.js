///Version 1
for (i =1; i <=100; i++)
{
	var out = ""
	if (i%3===0)
		out = "Fizz"
	
	if (i%5===0)
		out += "Buzz"
		
	if (out === "")
		out = i;

	console.log(out);
}

///Version 2
for (i =1; i <=100; i++)
{
	if (i%3===0 && i%5===0)
		console.log("FizzBuzz");
	else if (i%3===0)
		console.log("Fizz");
	else if (i%5===0)
		console.log("Buzz");
	else
		console.log(i);
}