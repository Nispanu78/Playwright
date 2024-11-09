import {test, expect} from '@playwright/test'

var userID;


test('Create user using POST request', async({request})=>{
    var user = {
        "name": "morpheus",
        "job":  "leader"
    }
const response = await request.post('https://reqres.in/api/users',{
    data:user,
    headers:{"ACCEPT":"applications/JSON"}
})
var responseJson = await response.json();
expect(response.status()).toBe(201);
expect(responseJson.name).toBe(`${user.name}`);
expect(responseJson.job).toBe(`${user.job}`);
userID = responseJson.id
});