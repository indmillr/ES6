const makeServerRequest = new Promise((resolve, reject) => {
  let responseFromServer;

  if (responseFromServer) {
    resolve("We got the data");
  } else {
    reject("Data not received");
  }
});

// handle fulfilled promise with 'then'
makeServerRequest.then((result) => {
  console.log(result);
});

// handle rejected promise with 'catch'
makeServerRequest.catch((error) => {
  console.log(error);
});
