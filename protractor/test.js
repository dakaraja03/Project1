describe('Protractor Demo App', function() {

  it('should add one and two', function() {
    browser.get('http://localhost:3000/');

    browser.sleep(5000);
    var search = element(by.css('*[id="search-bar"]'));
    search.sendKeys("test")
    browser.sleep(5000);
    // var search = element(by.model('second')).sendKeys(2);
    // browser.sleep(5000);

    // element(by.id('gobutton')).click();
    // browser.sleep(5000);

    // expect(element(by.binding('latest')).getText()).
    //     toEqual('5'); // This is wrong!
    console.log("protractor", search);
    
  });
  
});



// describe("Go to the Homepage ", function () {
//   browser.ignoreSynchronization = true; // This allows to protractor to run on regular website, not specific to angular 
//   it("Go to the Home page ", function () {
//     browser.get("http://ornaitjewels.com/"); // Go to a specific URL
//     console.log("Home Page Open succesffully") // Log a message
//   });

//   // From the Home Page go to the  Pendant Page 
//   it("Go to Pendants Page ", function () {
//     var pendants = element(by.css("#tm_menu > div > ul > li:nth-child(2) > a")); // set a variable for action
//     pendants.click(); // Click on element
//     browser.sleep(1000) // Tell Protractor to Wait for 1000 miliseconds or 1sec
//     console.log("From the Home Page go to the Pendant Page ");
//     element(by.css("#content > div:nth-child(2) > div:nth-child(1) > div.product-thumb.transition.options > div.caption > div >                 a")).click(); // Go the element and Click
//     // browser.sleep(1000)
//     console.log("Go to a specific Product Page");
//     // browser.sleep(1000)
//     browser.navigate().back(); // Tell the browser to go back 
//   });
// });