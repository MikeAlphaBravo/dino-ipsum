export class Dino {

  apiCall(paragraphs,words) {
    let promise = new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=${paragraphs}&words=${words}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      };
      request.open("GET", url, true);
      request.send();
    });

    promise.then(function(response) {
      let readable = JSON.parse(response);
      console.log("READBLE: " + readable);
      $("#output").text(`Here is your ipsum: ${readable}`);
    }, function(error) {
      return error.message;
    });
  }
}
