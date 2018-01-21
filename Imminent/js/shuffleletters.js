
      shuffleLetters(document.querySelector('h1'))
        .then(function () {
          return shuffleLetters(document.querySelector('.first'), {
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima suscipit debitis necessitatibus nihil repellat a porro quibusdam earum excepturi vero, unde, autem, sint dolorem. Nam, pariatur doloribus animi ipsam esse.',
            step: 1,
            fps: 15
          });
        })
        .then(function () {
          return shuffleLetters(document.querySelector('.second'), {
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, magnam, inventore. Impedit fugiat est, ex nobis voluptatum laborum unde officia aut quae placeat omnis repellendus nam. Nam, magni tenetur doloremque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, magnam, inventore.',
            step: 30
          });
        })
        .then(function () {
          var third = document.querySelectorAll('.third');
          for (var i = 0; i < third.length; i++) {
            third[i].hidden = false;
          }
          return shuffleLetters(third);
        })
        .then(function () {
          console.log('finish');
        });
    