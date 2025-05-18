const sampleText = `
Emails:
user@example.com
firstname.lastname@company.co.uk

URLs:
https://www.example.com
https://subdomain.example.org/page
happy@mail.com

Phone Numbers:
(123) 456-7890
123-456-7890
123.456.7890

Credit Cards:
1234 5678 9012 3456
1234-5678-9012-3456
`;


const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
const urlRegex = /https?:\/\/[^\s]+/g;
const phoneRegex = /(\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4})/g;
const creditCardRegex = /(?:\d{4}[-\s]?){3}\d{4}/g;


const emails = sampleText.match(emailRegex) || [];
const urls = sampleText.match(urlRegex) || [];
const phones = sampleText.match(phoneRegex) || [];
const creditCards = sampleText.match(creditCardRegex) || [];


console.log("Emails:", emails);
console.log("URLs:", urls);
console.log("Phone Numbers:", phones);
console.log("Credit Cards:", creditCards);