

async function changeName() {
    console.log("Dave");

    return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log('Joe');
         resolve(); // Indicate that the async operation is complete
        }, 3000);
      });
}


changeName().then((res) => {
    console.log(res);
});