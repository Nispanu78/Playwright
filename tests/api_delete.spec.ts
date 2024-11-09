import {test, expect} from '@playwright/test'

var userID;


test('Create user using POST request', async({request})=>{
    //This is the URL of a demo website to practice API testing
    var user = {
        "name": "playwright",
        "job":  "test"
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


test('Delete user using Delete request', async({request})=>{
  
const response = await request.delete('https://reqres.in/api/users/' + userID);
expect(response.status()).toBe(204);
const response2 = await request.get('https://reqres.in/api/users/' + userID);
console.log(await response2.json());
});