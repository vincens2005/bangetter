import fetch from 'node-fetch';
import {writeFile} from 'fs';

async function main() {
	let raw_data = await fetch("https://search.brave.com/bang/data").then(a => a.json());
	
	let bangs = {};
	
	for (let bang of raw_data) {
		bangs[bang.bang] = bang.url;
	}
	writeFile("bangs.json", JSON.stringify(bangs), () => {
		console.log("done!");
	});
}

main();
