import supertest from 'supertest';
import {expect} from 'chai';

//Storing of BaseUrl
const request = supertest('https://api.tmsandbox.co.nz/v1/Categories/6327/');




//Initialize the test if body has a content and correct status code 
describe('Initial Test',() => {
    it('Validate if the API response is correct and has contents',() => {
    return request.get('Details.json')
                  .query({catalogue: 'false'})
                  .then((res) => {
            expect(res.body).to.not.be.empty;
            expect(res.status).to.eql(200);
            console.log('Status code is ' + res.status);  
            });
         });   
    });

//Asserting the key Name with Carbon credits
describe('1st Acceptance Criteria',() => {
    it('Validate if Name is equals to Carbon credits',() => {
    return request.get('Details.json')
                  .query({catalogue: 'false'})
                  .then((res) => {
            expect(res.body.Name).to.eql("Carbon credits");
            });
         });
    });

//Asserting the key canRelist to be 'true'
describe('2nd Acceptance Criteria',() => {
it('CanRelist is True',() => {
return request.get('Details.json')
              .query({catalogue: 'false'})
              .then((res) => {
    expect(res.body.CanRelist).to.eql(true)
        });
    });
});

/* Under Promotions Key, values are stored as an Array. Using findIndex it moves
*  on to single Array and as soon as it finds the Name is equals to 'Gallery' it
*  will Assert the element Name and Description */
describe('3rd Acceptance Criteria',() => {
it('•	The Promotions element with Name = "Gallery" has a Description that contains the text "Good position in category"',() => {
return request.get('Details.json')
              .query({catalogue: 'false'})
              .then((res) => {
            const Promotions = res.body.Promotions
            const index = Promotions.findIndex(function(promotionsKey){
            return promotionsKey.Name === 'Gallery'
            })
            expect(Promotions[index].Name).to.eql("Gallery");
            expect(Promotions[index].Description).to.eql("Good position in category");
        });
    });
});
