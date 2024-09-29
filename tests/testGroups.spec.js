
import { test } from '@playwright/test';

test.describe("Test Group", () => {

    test.beforeAll( async () => {
        console.log("beforeAll is executed");
    } );

    test.afterAll( async () => {
        console.log("afterAll is executed");
    });

    test.beforeEach( async () => {
        console.log("beforeEach is executed");
    });

    test.afterEach( async () => {
        console.log("afterEach is executed");
    });

    test("Test Case 1", async ({page}) => {
        console.log("Test Case 1 is expected");
    }); 

    test("Test Case 2", async ({page}) => {
        console.log("Test Case 2 is expected");
    }); 

    test("Test Case 3", async ({page}) => {
        console.log("Test Case 3 is expected");
    }); 
})



