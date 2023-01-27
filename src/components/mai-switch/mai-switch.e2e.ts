import { newE2EPage } from '@stencil/core/testing';

describe('mai-switch', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<mai-switch></mai-switch>');
    const element = await page.find('mai-switch');
    expect(element).toHaveClass('hydrated');
  });

  it('renders active default as false', async () => {
    const page = await newE2EPage();

    await page.setContent('<mai-switch></mai-switch>');
    const element = await page.find('mai-switch');

    expect(await element.getProperty("active")).toEqual(false);
  });

  it('renders as active when button is clicked', async () => {
    const page = await newE2EPage();

    await page.setContent('<mai-switch></mai-switch>');
    const element = await page.find('mai-switch');

    await element.click();
    expect(await element.getProperty("active")).toEqual(true);
  });

  it('should be able to activate and deactivate', async () => {
    const page = await newE2EPage();

    await page.setContent('<mai-switch></mai-switch>');
    const element = await page.find('mai-switch');

    await element.click();
    await element.click();
    expect(await element.getProperty("active")).toEqual(false);
  });

  it('renders the initial state', async () => {
    const page = await newE2EPage();

    await page.setContent('<mai-switch active="true"></mai-switch>');
    const element = await page.find('mai-switch');

    expect(await element.getProperty("active")).toEqual(true);
  });

  it('should trigger event on click', async () => {
    const page = await newE2EPage();

    await page.setContent('<mai-switch></mai-switch>');
    const element = await page.find('mai-switch');

    const spy = await element.spyOnEvent("switch-changed");
    await element.click();

    expect(spy).toHaveReceivedEventTimes(1);
    expect(spy).toHaveReceivedEventDetail({active: true});
  });

  it('should not change when status is not enabled', async () => {
    const page = await newE2EPage();

    await page.setContent('<mai-switch enabled="true"></mai-switch>');
    const element = await page.find('mai-switch');

    expect(await element.getProperty("active")).toEqual(false);
  });

  it('should not change when status is not enabled but remain active', async () => {
    const page = await newE2EPage();

    await page.setContent('<mai-switch enabled="true"></mai-switch>');
    const element = await page.find('mai-switch');
    const spy = await element.spyOnEvent("switch-changed");

    await element.click();
    expect(spy).toHaveReceivedEventTimes(1);
    expect(await element.getProperty("active")).toEqual(true);
  });

  it('should not change when status is not enabled', async () => {
    const page = await newE2EPage();

    await page.setContent('<mai-switch enabled="false"></mai-switch>');
    const element = await page.find('mai-switch');
    const spy = await element.spyOnEvent("switch-changed");

    await element.click();
    expect(spy).toHaveReceivedEventTimes(0);
    expect(await element.getProperty("active")).toEqual(false);
  });

  it('should not change when status is not enabled', async () => {
    const page = await newE2EPage();

    await page.setContent('<mai-switch enabled="false" active="true"></mai-switch>');
    const element = await page.find('mai-switch');
    const spy = await element.spyOnEvent("switch-changed");

    await element.click();
    expect(spy).toHaveReceivedEventTimes(0);
    expect(await element.getProperty("active")).toEqual(true);
  });
});
