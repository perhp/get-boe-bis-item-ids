let importString = '';

jQuery('b:contains(Pre-BiS: )').each((index, element) => {
	const $element = jQuery(element);
	$element.parent().find('a').each((linkIndex, linkElement) => {
    	const $linkElement = jQuery(linkElement);
		const numberRegex = new RegExp(/[0-9]+/g);
        importString += 'i:' + numberRegex.exec($linkElement.attr('href'))[0] + ',';
	});
});

console.log(importString.replace(/,\s*$/, ''));
