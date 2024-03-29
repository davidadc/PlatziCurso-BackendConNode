const promiseFunction = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        resolve('Hello world');
      } else {
        reject(new Error('Hello error'));
      }
    }, 500);
  });

async function asyncAwait() {
  try {
    const msg = await promiseFunction();
    console.log('message', msg);
  } catch (error) {
    console.log('error', error);
  }
}

asyncAwait();
