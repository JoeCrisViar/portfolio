const myname = document.querySelectorAll('#myname path');

for (let i = 0; i < myname.length; i++) {
	console.log(`Letter ${i} is ${myname[i].getTotalLength()}`);
}