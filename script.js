var friends = ['Jay', 'Fish', 'Josh', 'Bri', 'Billy'];
var locations = ['store', 'coffee shop', 'park', 'hallway', 'bedroom',
                'bathroom', 'classroom', 'kitchen', 'office', 'backyard'];
var items = ['frisbee', 'paper clip', 'hair brush', 'vaccuum cleaner', 'pillow',
            'cat', 'pencil', 'lamp', 'couch cushion', 'side table',
            'microphone', 'game controller', 'cell phone', 'tablet', 'laptop',
            'CD', 'record', 'book', 'stuffed animal', 'action figure'];

function createAccusation(num) {
    return function() {
        var friendIndex = num % 5;
        var locationsIndex = num % 10;
        var itemsIndex = num % 20;

        alert('Accusation ' + num + ': I accuse ' + friends[friendIndex] + ', with the ' + items[itemsIndex] + ' in the ' + locations[locationsIndex] + '!');
    }
}

for (var i = 1; i <= 100; i++) {
    var accusationList = document.createElement('h3');
    accusationList.innerHTML = 'Accusation #' + i;
    var accusation = createAccusation(i);
    accusationList.addEventListener('click', accusation);
    document.body.appendChild(accusationList);
}