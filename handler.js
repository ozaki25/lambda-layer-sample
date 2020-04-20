import {
  puppeteer,
  args,
  defaultViewport,
  executablePath,
  headless,
} from 'chrome-aws-lambda';

export const hello = async event => {
  let browser = null;

  try {
    browser = await puppeteer.launch({
      args,
      defaultViewport,
      executablePath: await executablePath,
      headless,
    });

    const page = await browser.newPage();
    await page.goto(event.url || 'https://google.com');

    const result = await page.title();
    console.log({ result });
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: error.message }),
    };
  } finally {
    if (browser !== null) await browser.close();
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Hello' }),
  };
};
