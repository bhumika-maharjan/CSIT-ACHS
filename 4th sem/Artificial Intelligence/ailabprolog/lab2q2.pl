cat(tom).
loves_to_eat(kunal,pasta).
of_color(hair,black).
loves_to_play_games(nawaz).
lazy(pratyusha).
dances(harry).
dances(lili).
lovesCricket(jack).
lovesCricket(bili).
dances(lili).
happy(lili) :- dances(lili).
search_for_food(tom).
isClosed(school).
free(ryan).
hungry(tom) :- search_for_food(tom).
friends(jack, bili) :- lovesCricket(jack), lovesCricket(bili).
goToPlay(ryan) :- isClosed(school), free(ryan).

