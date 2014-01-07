context = describe;


describe("Tennis Game", function() {
  var game;

  beforeEach(function() {
    game = TennisGame('player 1', 'player 2');
  });

  it("returns 'Love all' at start up", function() {
    expect(game.getScore()).toBe('Love all');
  });

  it("returns 'Fifteen love' after player 1 scores", function(){
    game.nextPlay = function(){
      game.score[0] += 1;
    }();

    expect(game.getScore()).toBe('Fifteen Love');
  });

  it("return Love fifteen after player 2 scores", function(){
    game.nextPlay = function(){
      game.score[1] += 1;
    }();

    expect(game.getScore()).toBe('Love Fifteen');
  });

  it("returns 'Fifteen all' after both players score", function() {
    game.nextPlay = function() {
      game.score = [1, 1];
    }();

    expect(game.getScore()).toBe('Fifteen all');
  });

  it("returns 'Deuce' if players are tied at '40", function() {
    game.nextPlay = function() {
      game.score = [3, 3];
    }();

    expect(game.getScore()).toBe('Deuce');
  });

  it("returns 'Advantage for player 1 scores after 'Deuce'", function() {
    game.nextPlay = function() {
      game.score = [4, 3];
    }();

    expect(game.getScore()).toBe('Advantage player 1');
  });

  it("returns 'Advantage for player 2 scores after 'Deuce'", function() {
    game.nextPlay = function() {
      game.score = [3, 4];
    }();

    expect(game.getScore()).toBe('Advantage player 2');
  });

  it("returns 'Player 1 wins!!' when player 1 scores the championship point", function() {
    game.nextPlay = function() {
      game.score = [5, 3];
    }();

    expect(game.getScore()).toBe('player 1 wins!!');
  });

  it("returns 'Player 2 wins!!' when player 2 scores the championship point", function() {
    game.nextPlay = function() {
      game.score = [3, 5];
    }();

    expect(game.getScore()).toBe('player 2 wins!!');
  });

  it("returns 'Player 1 wins!!' when player 1 scores after being in 'Advantage'", function() {
    game.nextPlay = function() {
      game.score = [6, 4];
    }();

    expect(game.getScore()).toBe('player 1 wins!!');
  });

  it("Returns 'Thirteen - Love' if player 1 scores twice", function() {
    game.nextPlay = function() {
      game.score = [2, 0];
    }();
    
    expect(game.getScore()).toBe('Thirteen - Love');
  });

});








