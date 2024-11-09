import {test, expect} from '@playwright/test'

test('Get user details', async({request})=>{
    //This is the URL of a demo website to practice API testing
const response = await request.get('https://reqres.in/api/users?page=2');
var responseJson = await response.json();
console.log(responseJson);
expect(response.status()).toBe(200);
expect(responseJson.data[0].first_name).toBe('Michael');
})