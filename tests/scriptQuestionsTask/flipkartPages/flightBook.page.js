export class FlightbookPage {
  /**
   * @param {import('playwright').Page} page
   */

  constructor(page) {
    this.page = page;
    this.fromPlace = page.locator('//input[@name="0-departcity"]');
    this.fromAirPort = page.locator(
      '((//div[@class="ecAhsD uzeEmI"])[1]/div//span[text()="Mumbai"])[1]'
    );
    this.toAirPort = page.locator(
      '((//div[@class="ecAhsD uzeEmI"])[2]/div//span[text()="Hyderabad"])[1]'
    );
    this.toPlace = page.locator('//input[@name="0-arrivalcity"]');
    this.onDate = page.locator('//input[@name="0-datefrom"]');
    this.chooseDate = page.locator("(//button[text()='9'])[1]");
    this.searchBtn = page.locator("//span[text()='SEARCH']/..");
  }
}
