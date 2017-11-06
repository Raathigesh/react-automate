import puppeteer from "puppeteer";

/* {
    url: "https://google.com",
    actions: [{
        type: "type",
        selector: "#ElementId",
        text: "The text"
    }, {
        type: "click",
        selector: "#ElementId"
    }]
} */

export default class Container {
  async execute(payload) {
    const browser = await puppeteer.launch({ headless: false, slowMo: 50 });
    const page = await browser.newPage();
    await page.goto(payload.url);

    for (let i = 0; i < payload.actions.length; i++) {
      const action = payload.actions[i];
      if (action.type === "type") {
        await page.type(action.selector, action.text);
      } else if (action.type === "click") {
        await page.click(action.selector);
      }
    }
  }
}
