var TennisGame = function(player1, player2) {
  var SCORES = ['Love', 'Fifteen', 'Thirteen', 'Fourteen'];
  var self = {};

  self.score = [0, 0];

  var tied = function() {
    return self.score[0] === self.score[1];
  };

  var evaluateTied = function() {
    if (self.score[0] >= 3) {
      return 'Deuce';
    }
    return  SCORES[self.score[1]] + ' all';
  };

  var enoughAdvantage  = function() {
    return (Math.abs(self.score[0] - self.score[1]) >= 2);
  };

  var winner = function() {
    return overFourteen() && enoughAdvantage();
  };

  var playerInAdvantage = function() {
    return self.score[0] > self.score[1] ? player1 : player2;
  };

  var overFourteen = function() {
    return self.score[0] > 3 || self.score[1] > 3;
  };

  self.getScore = function() {
    if (tied()) {
      return evaluateTied();
    }
    else {
      if (winner()){
        return playerInAdvantage() + ' wins!!';
      }
      else if (overFourteen()) {
        return 'Advantage ' + playerInAdvantage();
      }
      return SCORES[self.score[0]] + ' ' + SCORES[self.score[1]];
    }
  };

  return self;
};



