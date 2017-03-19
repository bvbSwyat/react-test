/**
 * Created by swyat on 3/19/17.
 */

module.exports = {
    init: function() {
        localStorage.clear();
        localStorage.setItem('images', JSON.stringify([
            {
                id: '1',
                name: 'Minion1',
                image: 'https://media4.giphy.com/media/m6OomwWCojfS8/200_s.gif',

            },
            {
                id: '2',
                name: 'Minion2',
                image: 'http://i0.kym-cdn.com/entries/icons/original/000/018/385/Rs_634x1024-130605092844-634.DespMe2.mh.060513.jpg',

            },
            {
                id: '3',
                name: 'Minion3',
                image: 'http://bradford-city-of-film.com/wp-content/uploads/2015/06/Minions.jpg',

            },
            {
                id: '4',
                name: 'Minion4',
                image: 'https://s-media-cache-ak0.pinimg.com/736x/48/bd/3f/48bd3f6e928d7cb4b8d499cb0f96b8a8.jpg',

            }
        ]));
    }
};