/*
var input = {


	teams : [

		{
			name : "L Tim",
			status: "Sleepy",
			color : "#BADA55",

			probe : [
				{ name : "level1" , scor : 12 } ,
				{ name : "avioane" , scor : 12 } ,
				
			]
		},

		{
			name : "Team Pim",
			status  :  "@aci",

			color : "salmon",

			probe : [
				{ name : "level1" , scor : 12 } ,
				{ name : "avioane" , scor : 12 } ,
				
			]
		},


		{
			name : "Camera 210",
			status  :  "@aci232313",
			color : "#C0FFEE",

			
			probe : [
				{ name : "level1" , scor : 12 } ,
				{ name : "avioane" , scor : 12 } ,
				
			]
		},


		{
			name : "Team Pim 2",
			status  :  "@ac2131231312i",

			color : "salmon",
			
			probe : [
				{ name : "level1" , scor : 12 } ,
				{ name : "avioane" , scor : 12 } ,
				
			]
		},


		{
			name : "Camera 2102",
			status  :  "@aci",
			color : "lightblue",

			
			probe : [
				{ name : "level1" , scor : 12 } ,
				{ name : "avioane" , scor : 12 } ,
				
			]
		},


		{
			name : "Team Pim 3",
			status  :  "@asdfasfasdfdsfasdfasdfasaci",

			color : "red",

			
			probe : [
				{ name : "level1" , scor : 12 } ,
				{ name : "avioane" , scor : 12 } ,
				
			]
		},


		{
			name : "Camera 3210",
			status  :  "@dfasdfasdfaci",
			color : "blue",

			
			probe : [
				{ name : "level1" , scor : 12 } ,
				{ name : "avioane" , scor : 12 } ,
				
			]
		},

	],

	milestones : [
		{ name : "welcome 1 ", time : "11:44", posX : 1, posY : 2 },
		{ name : "welcome 2 ", time : "11:44", posX : 1, posY : 3 },
		{ name : "welcome 3 ", time : "11:44", posX : 2, posY : 4 },
		{ name : "welcome 4", time : "11:44", posX : 3, posY : 5 },
	],

	annnouncements : [
		{ title : "Welcome" , content : "Salut SalutSalut SalutSalut SalutSalut SalutSalut SalutSalut Salut" },
		{ title : "Welcome" , content : "Salut SalutSalut SalutSalut SalutSalut SalutSalut SalutSalut Salut" },
		{ title : "Welcome" , content : "Salut SalutSalut SalutSalut SalutSalut SalutSalut SalutSalut Salut" }
	]
}



for ( var i = 0; i<29; i++ ) {
	input.teams[ i ] = {
	
		name : "Team " + i,
		
		status : "yo " + i, 
		
		points : [],
	}
	
	for ( var j = 0; j< 4; j++ ) {
		input.teams[i].points[ j ] = { name : "proba " + j + "." + i, score : Math.floor( Math.random() * 100 ) }
	}
	
	input.teams[ i ].index = i;
	
}

*/

var input = {
    "teams": [{
        "name": "Team Red SAlut ce mai faci",
        "status": "yo 0",
        "points": [{
            "name": "fials mediuum0",
            "score": 38
        }, {
            "name": "proba 1.0",
            "score": 59
        }, {
            "name": "proba 2.0",
            "score": 97
        }, {
            "name": "proba 3.0",
            "score": 7
        }],
        "index": 0,
        "score": 201
    }, {
        "name": "Team 1",
        "status": "yo 1",
        "points": [{
            "name": "proba 0.1",
            "score": 33
        }, {
            "name": "proba 1.1",
            "score": 48
        }, {
            "name": "proba 2.1",
            "score": 48
        }, {
            "name": "proba 3.1",
            "score": 75
        }],
        "index": 1,
        "score": 204
    }, {
        "name": "Team 2",
        "status": "yo 2",
        "points": [{
            "name": "proba 0.2",
            "score": 79
        }, {
            "name": "proba 1.2",
            "score": 99
        }, {
            "name": "proba 2.2",
            "score": 73
        }, {
            "name": "proba 3.2",
            "score": 58
        }],
        "index": 2,
        "score": 309
    }, {
        "name": "Team 3",
        "status": "yo 3",
        "points": [{
            "name": "proba 0.3",
            "score": 49
        }, {
            "name": "proba 1.3",
            "score": 60
        }, {
            "name": "proba 2.3",
            "score": 52
        }, {
            "name": "proba 3.3",
            "score": 63
        }],
        "index": 3,
        "score": 224
    }, {
        "name": "Team 4",
        "status": "yo 4",
        "points": [{
            "name": "proba 0.4",
            "score": 3
        }, {
            "name": "proba 1.4",
            "score": 51
        }, {
            "name": "proba 2.4",
            "score": 90
        }, {
            "name": "proba 3.4",
            "score": 58
        }],
        "index": 4,
        "score": 202
    }, {
        "name": "Team 5",
        "status": "yo 5",
        "points": [{
            "name": "proba 0.5",
            "score": 30
        }, {
            "name": "proba 1.5",
            "score": 43
        }, {
            "name": "proba 2.5",
            "score": 70
        }, {
            "name": "proba 3.5",
            "score": 65
        }],
        "index": 5,
        "score": 208
    }, {
        "name": "Team 6",
        "status": "yo 6",
        "points": [{
            "name": "proba 0.6",
            "score": 89
        }, {
            "name": "proba 1.6",
            "score": 69
        }, {
            "name": "proba 2.6",
            "score": 60
        }, {
            "name": "proba 3.6",
            "score": 87
        }],
        "index": 6,
        "score": 305
    }, {
        "name": "Team 7",
        "status": "yo 7",
        "points": [{
            "name": "proba 0.7",
            "score": 67
        }, {
            "name": "proba 1.7",
            "score": 18
        }, {
            "name": "proba 2.7",
            "score": 1
        }, {
            "name": "proba 3.7",
            "score": 30
        }],
        "index": 7,
        "score": 116
    }, {
        "name": "Team 8",
        "status": "yo 8",
        "points": [{
            "name": "proba 0.8",
            "score": 1
        }, {
            "name": "proba 1.8",
            "score": 61
        }, {
            "name": "proba 2.8",
            "score": 23
        }, {
            "name": "proba 3.8",
            "score": 56
        }],
        "index": 8,
        "score": 141
    }, {
        "name": "Team 9",
        "status": "yo 9",
        "points": [{
            "name": "proba 0.9",
            "score": 67
        }, {
            "name": "proba 1.9",
            "score": 13
        }, {
            "name": "proba 2.9",
            "score": 16
        }, {
            "name": "proba 3.9",
            "score": 67
        }],
        "index": 9,
        "score": 163
    }, {
        "name": "Team 10",
        "status": "yo 10",
        "points": [{
            "name": "proba 0.10",
            "score": 80
        }, {
            "name": "proba 1.10",
            "score": 49
        }, {
            "name": "proba 2.10",
            "score": 70
        }, {
            "name": "proba 3.10",
            "score": 70
        }],
        "index": 10,
        "score": 269
    }, {
        "name": "Team 11",
        "status": "yo 11",
        "points": [{
            "name": "proba 0.11",
            "score": 25
        }, {
            "name": "proba 1.11",
            "score": 11
        }, {
            "name": "proba 2.11",
            "score": 50
        }, {
            "name": "proba 3.11",
            "score": 5
        }],
        "index": 11,
        "score": 91
    }, {
        "name": "Team 12",
        "status": "yo 12",
        "points": [{
            "name": "proba 0.12",
            "score": 70
        }, {
            "name": "proba 1.12",
            "score": 96
        }, {
            "name": "proba 2.12",
            "score": 11
        }, {
            "name": "proba 3.12",
            "score": 74
        }],
        "index": 12,
        "score": 251
    }, {
        "name": "Team 13",
        "status": "yo 13",
        "points": [{
            "name": "proba 0.13",
            "score": 34
        }, {
            "name": "proba 1.13",
            "score": 11
        }, {
            "name": "proba 2.13",
            "score": 90
        }, {
            "name": "proba 3.13",
            "score": 95
        }],
        "index": 13,
        "score": 230
    }, {
        "name": "Team 14",
        "status": "yo 14",
        "points": [{
            "name": "proba 0.14",
            "score": 43
        }, {
            "name": "proba 1.14",
            "score": 3
        }, {
            "name": "proba 2.14",
            "score": 45
        }, {
            "name": "proba 3.14",
            "score": 95
        }],
        "index": 14,
        "score": 186
    }, {
        "name": "Team 15",
        "status": "yo 15",
        "points": [{
            "name": "proba 0.15",
            "score": 10
        }, {
            "name": "proba 1.15",
            "score": 27
        }, {
            "name": "proba 2.15",
            "score": 76
        }, {
            "name": "proba 3.15",
            "score": 19
        }],
        "index": 15,
        "score": 132
    }, {
        "name": "Team 16",
        "status": "yo 16",
        "points": [{
            "name": "proba 0.16",
            "score": 43
        }, {
            "name": "proba 1.16",
            "score": 65
        }, {
            "name": "proba 2.16",
            "score": 72
        }, {
            "name": "proba 3.16",
            "score": 40
        }],
        "index": 16,
        "score": 220
    }, {
        "name": "Team 17",
        "status": "yo 17",
        "points": [{
            "name": "proba 0.17",
            "score": 74
        }, {
            "name": "proba 1.17",
            "score": 92
        }, {
            "name": "proba 2.17",
            "score": 39
        }, {
            "name": "proba 3.17",
            "score": 84
        }],
        "index": 17,
        "score": 289
    }, {
        "name": "Team 18",
        "status": "yo 18",
        "points": [{
            "name": "proba 0.18",
            "score": 74
        }, {
            "name": "proba 1.18",
            "score": 90
        }, {
            "name": "proba 2.18",
            "score": 58
        }, {
            "name": "proba 3.18",
            "score": 44
        }],
        "index": 18,
        "score": 266
    }, {
        "name": "Team 19",
        "status": "yo 19",
        "points": [{
            "name": "proba 0.19",
            "score": 28
        }, {
            "name": "proba 1.19",
            "score": 85
        }, {
            "name": "proba 2.19",
            "score": 86
        }, {
            "name": "proba 3.19",
            "score": 18
        }],
        "index": 19,
        "score": 217
    }, {
        "name": "Team 20",
        "status": "yo 20",
        "points": [{
            "name": "proba 0.20",
            "score": 69
        }, {
            "name": "proba 1.20",
            "score": 88
        }, {
            "name": "proba 2.20",
            "score": 70
        }, {
            "name": "proba 3.20",
            "score": 6
        }],
        "index": 20,
        "score": 233
    }, {
        "name": "Team 21",
        "status": "yo 21",
        "points": [{
            "name": "proba 0.21",
            "score": 4
        }, {
            "name": "proba 1.21",
            "score": 62
        }, {
            "name": "proba 2.21",
            "score": 32
        }, {
            "name": "proba 3.21",
            "score": 51
        }],
        "index": 21,
        "score": 149
    }, {
        "name": "Team 22",
        "status": "yo 22",
        "points": [{
            "name": "proba 0.22",
            "score": 83
        }, {
            "name": "proba 1.22",
            "score": 71
        }, {
            "name": "proba 2.22",
            "score": 49
        }, {
            "name": "proba 3.22",
            "score": 95
        }],
        "index": 22,
        "score": 298
    }, {
        "name": "Team 23",
        "status": "yo 23",
        "points": [{
            "name": "proba 0.23",
            "score": 74
        }, {
            "name": "proba 1.23",
            "score": 10
        }, {
            "name": "proba 2.23",
            "score": 56
        }, {
            "name": "proba 3.23",
            "score": 96
        }],
        "index": 23,
        "score": 236
    }, {
        "name": "Team 24",
        "status": "yo 24",
        "points": [{
            "name": "proba 0.24",
            "score": 35
        }, {
            "name": "proba 1.24",
            "score": 38
        }, {
            "name": "proba 2.24",
            "score": 27
        }, {
            "name": "proba 3.24",
            "score": 29
        }],
        "index": 24,
        "score": 129
    }, {
        "name": "Team 25",
        "status": "yo 25",
        "points": [{
            "name": "proba 0.25",
            "score": 58
        }, {
            "name": "proba 1.25",
            "score": 53
        }, {
            "name": "proba 2.25",
            "score": 0
        }, {
            "name": "proba 3.25",
            "score": 19
        }],
        "index": 25,
        "score": 130
    }, {
        "name": "Team 26",
        "status": "yo 26",
        "points": [{
            "name": "proba 0.26",
            "score": 11
        }, {
            "name": "proba 1.26",
            "score": 61
        }, {
            "name": "proba 2.26",
            "score": 92
        }, {
            "name": "proba 3.26",
            "score": 16
        }],
        "index": 26,
        "score": 180
    }, {
        "name": "Team 27",
        "status": "yo 27",
        "points": [{
            "name": "proba 0.27",
            "score": 58
        }, {
            "name": "proba 1.27",
            "score": 45
        }, {
            "name": "proba 2.27",
            "score": 86
        }, {
            "name": "proba 3.27",
            "score": 37
        }],
        "index": 27,
        "score": 226
    }, {
        "name": "Team 28",
        "status": "yo 28",
        "points": [{
            "name": "proba 0.28",
            "score": 76
        }, {
            "name": "proba 1.28",
            "score": 20
        }, {
            "name": "proba 2.28",
            "score": 42
        }, {
            "name": "proba 3.28",
            "score": 7
        }],
        "index": 28,
        "score": 145
    }],
	
	
	
    "milestones": [{
        "name": "welcome 1 ",
        "time": "11:44",
        "posX": 1,
        "posY": 2
    }, {
        "name": "welcome 2 ",
        "time": "11:44",
        "posX": 1,
        "posY": 3
    }, {
        "name": "welcome 3 ",
        "time": "11:44",
        "posX": 2,
        "posY": 4
    }, {
        "name": "welcome 4",
        "time": "11:44",
        "posX": 3,
        "posY": 5
    }],
	
    "announcements": [{
        "title": "Welcome",
        "content": "Salut SalutSalut SalutSalut SalutSalut SalutSalut SalutSalut Salut"
    }, {
        "title": "Welcome",
        "content": "Salut SalutSalut SalutSalut SalutSalut SalutSalut SalutSalut Salut"
    }, {
        "title": "Welcome",
        "content": "Salut SalutSalut SalutSalut SalutSalut SalutSalut SalutSalut Salut"
    }]
}
