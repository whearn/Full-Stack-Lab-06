var friends = ['Jay', 'Fish', 'Josh', 'Bri', 'Billy'];
var locations = ['store', 'coffee shop', 'park', 'hallway', 'bedroom',
                'bathroom', 'classroom', 'kitchen', 'office', 'backyard'];
var items = ['frisbee', 'paper clip', 'hair brush', 'vaccuum cleaner', 'pillow',
            'cat', 'pencil', 'lamp', 'couch cushion', 'side table',
            'microphone', 'game controller', 'cell phone', 'tablet', 'laptop',
            'CD', 'record', 'book', 'stuffed animal', 'action figure'];

function createAccusation(num) {
    //returns a function that creates each accusation
    return function() {
        //creates an index for each array that will not exceed that array's length
        var friendIndex = num % 5;
        var locationsIndex = num % 10;
        var itemsIndex = num % 20;

        //pieces each accusation alert together using different names, locations, and items
        alert('Accusation ' + num + ': I accuse ' + friends[friendIndex] + ', with the ' + items[itemsIndex] + ' in the ' + locations[locationsIndex] + '!');
    }
}

for (var i = 1; i <= 100; i++) {
    //creates each accusation's h3 element
    var accusationList = document.createElement('h3');
    accusationList.innerHTML = 'Accusation #' + i;

    //assign the createAccusation function to a variable
    var accusation = createAccusation(i);

    //pass the createAccusation function into the h3 click event listener
    accusationList.addEventListener('click', accusation);

    //adds an h3 to the body with each loop
    document.body.appendChild(accusationList);
}