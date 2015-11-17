
var test = {};


test.ui_z_movesMatrix = {
	isRelaiableAlloc : function ( ) {
		ui.z.movesMatrix.init();

		for ( var i = 0; i< 10000; i++ )

			var count = 0;
		var ian = window.setInterval( function ( ) {
			count++;
			if ( count > 10 ) window.clearInterval( ian )
				ui.z.movesMatrix.init(cfg.maxCol, cfg.maxRow, count + " asdfasd fasd fas fasd"+ " asdfasd fasd fas fasd"+ " asdfasd fasd fas fasd"+ " asdfasd fasd fas fasd"+ " asdfasd fasd fas fasd"+ " asdfasd fasd fas fasd"+ " asdfasd fasd fas fasd"+ " asdfasd fasd fas fasd"+ " asdfasd fasd fas fasd" + count );
		}, 3000 );
	},

	isGoodCluster : function ( ) {
		ui.z.movesMatrix.init();

		ui.z.movesMatrix.addMove( 1, 2,2,3,3 );

		ui.z.movesMatrix.addMove( 1, 2,2,2,3 );

		ui.z.movesMatrix.addMove( 1, 2,2,3,2 );


		ui.z.movesMatrix.addMove( 1, 2,3,3,2 );


		ui.z.movesMatrix.addMove( 1, 5,3,5,2 );


		var path = ui.z.movesMatrix.getPath( 1, 0, 0, 3, 3 );
		console.log( path );

		var path = ui.z.movesMatrix.getPath( 1, 0, 0, 5, 5 );
		console.log( path );


	},
}

test.ui_z_moves = {
	multipleLines : function ( ) {
		ui.z.main.render()
		
		for ( var i = 0; i< 20; i++ ) {
			for ( var j = 0; j<20; j++ ) {

				this.addLine( i, j ) ;
			}
		}

	},

	addLine : function ( i, j ) {

		window.setTimeout( function( )  {

			ui.z.moves.renderMove( (i+j) %2 , i, j, i+1, j+1 );

		}, (i *20 + j) * 150 );
	},
}