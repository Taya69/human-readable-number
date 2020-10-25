module.exports = function toReadable (number) {  
	if ((typeof number !== 'number') || 
	(number < 0) || (number > 1000) || (!Number.isInteger(number))) {
		throw new Error('err');
	}
	const arr1 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen',
'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];	
	const arr2 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
	if (number < 20) {return arr1[number]};
	if (number > 19 && number < 100) {
		if (!(number % 10)) {let str = number.toString(); return arr2[Number.parseInt(str[0])-2]}
		let str = number.toString();
		let first = arr2[Number.parseInt(str[0])-2];
		let second = arr1[Number.parseInt(str[1])];
		return `${first} ${second}`
	}
	if (number > 99 && number < 1000) {
    let str = number.toString();
    let first = arr1[Number.parseInt(str[0])];
		if (!(number % 100)) {			
			return `${first} hundred`;
		} 
		if (!(number % 10)) {				
			if (str[1] == '1') {
        return `${first} hundred ten`;
      }
			let second = arr2[Number.parseInt(str[1])-2];
			return `${first} hundred ${second}`;
		}
		
    if (str[1] == '0') {
      let second = arr1[Number.parseInt(str[2])];
      return `${first} hundred ${second}`;
    }
		if (str[1] == '1') {      
      let second = arr1[Number.parseInt(str[2])+10];
      return `${first} hundred ${second}`;
    }	
		let second = arr2[Number.parseInt(str[1])-2];
		let third = arr1[Number.parseInt(str[2])];
		return `${first} hundred ${second} ${third}`;
	}
}

