import supertest from "supertest";
import { expect } from "chai";

//Store Base Url
const request = supertest("https://api.tmsandbox.co.nz/v1");

describe("Given API response: ", () => {

  //Validate that API response is not empty and has a status code of 200
  it("should not be empty and has a status code of 200", () => {
    return request.get("/Categories/6327/Details.json")
      .query({ catalogue: "false" })
      .then((res) => {
        expect(res.body).to.not.be.empty;
        expect(res.status).to.eql(200);
      });
  });

  //Validate that the Name is equal to Carbon credits
  it("should have Name equal to Carbon credits", () => {
    return request.get("/Categories/6327/Details.json")
      .query({ catalogue: "false" })
      .then((res) => {
        expect(res.body.Name).to.eql("Carbon credits");
      });
  });

  //Validate that the CanRelist is equal to True
  it("should have CanRelist equal to True", () => {
    return request.get("/Categories/6327/Details.json")
      .query({ catalogue: "false" })
      .then((res) => {
        expect(res.body.CanRelist).to.eql(true);
      });
  });

  //Determine the object in the Promotions array with Name as 'Gallery' and validate that its description is equal to 'Good position in category'
  it('should have Promotions element with Name equals to "Gallery" has a Description that contains the text "Good position in category"', () => {
    return request.get("/Categories/6327/Details.json")
      .query({ catalogue: "false" })
      .then((res) => {
        const Promotions = res.body.Promotions;
        const index = Promotions.findIndex(function (promotionsKey) {
          return promotionsKey.Name === "Gallery";
        });
        expect(Promotions[index].Name).to.eql("Gallery");
        expect(Promotions[index].Description).to.eql(
          "Good position in category"
        );
      });
  });
});
