const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  }),
  test("Clicking the Draw button displays the div with id 'choices'", async () => {
    await driver.get("http://localhost:8000");
    
    await driver.findElement(By.id("draw")).click();
   

    const choicesDiv = await driver.findElement(By.id("choices"));
    await driver.wait(until.elementIsVisible(choicesDiv), 1000);
    expect (await choicesDiv.isDisplayed()).toBe(true)
  }),

  test("Clicking an 'Add to Duo' button displays the div with id 'player-duo'", async () => {
    await driver.get("http://localhost:8000");

    await driver.findElement(By.id("draw")).click();

    await driver.sleep(2000)
  
    await driver.findElement(By.className("bot-btn"), 2000).click();
    
  
    const playerDuoDiv = await driver.findElement(By.id("player-duo"));
    await driver.wait(until.elementIsVisible(playerDuoDiv), 1000);
  
    
    expect(await playerDuoDiv.isDisplayed()).toBe(true);
  });

});
