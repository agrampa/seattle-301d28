var app = {};

(function dogs(dog) {
  let gary = 'Gary Grampa';
  let charlotte = 'Charlotte Grampa';

  dog.charlotte = charlotte;
})(app);

console.log(app.charlotte);
