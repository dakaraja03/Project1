const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    Until = webdriver.Until,
    Key = webdriver.Key;


(async function example() {
    let driver = new webdriver.Builder().forBrowser('firefox').build();
    driver.get("http://localhost:3000/");

    // driver.wait(function () {
    //     return driver.findElement(By.id('next-btn')).click();
    // }, 5000).then((d) => {
    //     console.log("object", d)

    // }).catch(err => {
    //     return console.log("error", err)
    // });

    // driver.sleep(10000).then(() => {
    //     console.log("object");
    //     return driver.findElement(By.id('next-btn')).click();
    // });

    await driver.sleep(5000);

    await driver.sleep(1500).then(d => {
        return driver.findElement(By.id('search-bar')).sendKeys("test");
    }).catch(err => {
        console.log("error", err);
    });
    await driver.sleep(1500).then(d => {
        return driver.findElement(By.id("item1")).click();
    }).catch(err => {
        console.log("error", err)
    });
    await driver.sleep(1500).then(d => {
        return driver.findElement(By.id("sub-item1")).click();
    }).catch(err => {
        console.log("error", err)
    });
    await driver.sleep(1500).then(d => {
        return driver.findElement(By.id("sub-sub-item1")).click();
    }).catch(err => {
        console.log("error", err)
    });
    await driver.sleep(1500).then(d => {
        return driver.findElement(By.id("sub-sub-item1")).click();
    }).catch(err => {
        console.log("error", err)
    });
    await driver.sleep(1500).then(d => {
        return driver.findElement(By.id("sub-item1")).click();
    }).catch(err => {
        console.log("error", err)
    });
    await driver.sleep(1500).then(d => {
        return driver.findElement(By.id("item1")).click();
    }).catch(err => {
        console.log("error", err)
    });
    await driver.sleep(1500).then(d => {
        return driver.findElement(By.id("item3")).click();
    }).catch(err => {
        console.log("error", err)
    });
    await driver.sleep(1500).then(d => {
        return driver.findElement(By.id("item3")).click();
    }).catch(err => {
        console.log("error", err)
    });
    await driver.sleep(1500).then(d => {
        return driver.findElement(By.id("item4")).click();
    }).catch(err => {
        console.log("error", err)
    });
    await driver.sleep(1500).then(d => {
        return driver.findElement(By.id("item4")).click();
    }).catch(err => {
        console.log("error", err)
    });
    
    await driver.sleep(1500).then(d => {
        return driver.findElement(By.id('customerName')).sendKeys("test");
    }).catch(err => {
        console.log("error", err);
    });
    await driver.sleep(1500).then(d => {
        return driver.findElement({ xpath: '//*[@id="gender"]/option[2]' }).click();
    }).catch(err => {
        console.log("error", err);
    });
    await driver.sleep(1500).then(d => {
        return driver.findElement(By.id('branch')).sendKeys("test");
    }).catch(err => {
        console.log("error", err);
    });
    await driver.sleep(1500).then(d => {
        return driver.findElement(By.id('dob')).sendKeys("2018-08-15");
    }).catch(err => {
        console.log("error", err);
    });
    await driver.sleep(1500).then(d => {
        return driver.findElement(By.id('comments')).sendKeys("test");
    }).catch(err => {
        console.log("error", err);
    });
    await driver.sleep(1500).then(d => {
        return driver.findElement({ xpath: '//*[@id="someField"]/option[3]' }).click();
    }).catch(err => {
        console.log("error", err);
    });
    await driver.sleep(1500).then(d => {
        return driver.findElement({ xpath: '//*[@id="gridCheckbox1"]' }).click();
    }).catch(err => {
        console.log("error", err);
    });
    await driver.sleep(1500).then(d => {
        return driver.findElement({ xpath: '//*[@id="gridCheckbox2"]' }).click();
    }).catch(err => {
        console.log("error", err);
    });
    await driver.sleep(1500).then(d => {
        return driver.findElement({ xpath: '//*[@id="gridCheckbox3"]' }).click();
    }).catch(err => {
        console.log("error", err);
    });
    await driver.sleep(1500).then(d => {
        return driver.findElement({ xpath: '//*[@id="gridCheckbox4"]' }).click();
    }).catch(err => {
        console.log("error", err);
    });

    await driver.sleep(2000).then(d => {
        return driver.findElement(By.id("next-btn")).click();
    }).catch(err => {
        console.log("error", err)
    });

    await driver.sleep(1500).then(d => {
        return driver.findElement({ xpath: '//*[@id="premium-member"]' }).click();
    }).catch(err => {
        console.log("error", err)
    });
    await driver.sleep(1500).then(d => {
        return driver.findElement({ xpath: '//*[@id="gridRadios1"]' }).click();
    }).catch(err => {
        console.log("error", err)
    });
    await driver.sleep(1500).then(d => {
        return driver.findElement({ xpath: '//*[@id="gridRadios2"]' }).click();
    }).catch(err => {
        console.log("error", err)
    });
    await driver.sleep(1500).then(d => {
        return driver.findElement({ xpath: '//*[@id="gridRadios3"]' }).click();
    }).catch(err => {
        console.log("error", err)
    });
    await driver.sleep(1500).then(d => {
        return driver.findElement({ xpath: '//*[@id="gridRadios4"]' }).click();
    }).catch(err => {
        console.log("error", err)
    });
    await driver.sleep(1500).then(d => {
        return driver.findElement(By.id("home-tab")).click();
    }).catch(err => {
        console.log("error", err)
    });
    await driver.sleep(1500).then(d => {
        return driver.findElement(By.id("profile-tab")).click();
    }).catch(err => {
        console.log("error", err)
    });
    await driver.sleep(1500).then(d => {
        return driver.findElement(By.id("contact-tab")).click();
    }).catch(err => {
        console.log("error", err)
    });
    await driver.sleep(1500).then(d => {
        return driver.findElement(By.id("popoup-btn")).click();
    }).catch(err => {
        console.log("error", err)
    });
    await driver.sleep(1500).then(d => {
        return driver.findElement(By.css(".close")).click();
    }).catch(err => {
        console.log("error", err)
    });

    await driver.sleep(5000);
    await driver.quit();
})();