/**
 * 
 */

$(function(){
	var BOARD_HEIGHT=10;
	var BOARD_WIDTH=10;
	
	var board = new Array();

	function boardsetting(BOARD_WIDTH, BOARD_HEIGHT) {
		for (var i = 0; i < BOARD_WIDTH; i++) {
			for (var j = 0; j < BOARD_HEIGHT; j++) {
				board[i][j] = 0;
			}
		}

		for (var i = 0; i < BOARD_WIDTH + 1; i++) {
			board[i][BOARD_HEIGHT + 1] = 1;
		}

		for (var i = 0; i < BOARD_HEIGHT + 1; i++) {
			board[BOARD_WIDTH + 1][i] = 1;
		}
	}










})


