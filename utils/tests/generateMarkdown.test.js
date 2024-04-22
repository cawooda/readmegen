const generateMarkdown = require('../generateMarkdown');
const renderLicenseLink = generateMarkdown.renderLicenseLink;

describe('generateMarkdown', () => {
    describe('renderLicenseLink', () => {
        it('should recieve a license string and return a link',()=>{
        const license = 'MIT';
        const result = generateMarkdown.renderLicenseLink(license);
        expect(result).toMatch(/https:/);
        });

        it('should recieve MIT and return https://img.shields.io/badge/license-MIT',()=>{
            const license = 'MIT';
            const result = generateMarkdown.renderLicenseBadge(license);
            expect(result).toEqual('https://img.shields.io/badge/license-MIT-blue');
            });

        it('should return No License when it recieves no argument', () => {
            const result = generateMarkdown.renderLicenseLink();
            expect(result).toEqual('No License');
        })
    })


    describe('renderLicenseSection', () => {
        it('should return an empty string if there is No License',()=>{
            const result = generateMarkdown.renderLicenseSection('No License');
            expect(result).toEqual('');
        });
        it('should return an empty string if there is argument',()=>{
            const result = generateMarkdown.renderLicenseSection();
            expect(result).toEqual('');
        });

    });
    
});
