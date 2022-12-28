const SteamUser = require('steam-user');
const SteamTotp = require('steam-totp');

const client = new SteamUser();

const logOnOptions = {
	accountName: 'type_name',
	password: 'type_password',
};

client.logOn(logOnOptions);

client.on('loggedOn', () => {
	console.log('[TEST] Success');
	
	client.setPersona(SteamUser.EPersonaState.Online);
	client.gamesPlayed(730);
	client.gamesPlayed(10);
	client.gamesPlayed(30);
	client.gamesPlayed(40);
	client.gamesPlayed(70);
	client.gamesPlayed(130);
	client.gamesPlayed(50);
	client.gamesPlayed(60);
	client.gamesPlayed(20);
	client.gamesPlayed(570);
	client.gamesPlayed(440);
	client.gamesPlayed(433850);
	client.gamesPlayed(230410);
	client.gamesPlayed(291480);
	client.gamesPlayed(444090);
	client.gamesPlayed(489520);
	client.gamesPlayed(513650);
	client.gamesPlayed(304930);
	client.gamesPlayed(386360);
	client.gamesPlayed(552990);
	client.gamesPlayed(236390);
	client.gamesPlayed(238960);
	client.gamesPlayed(453480);
	client.gamesPlayed(444200);
	client.gamesPlayed(223750);
	client.gamesPlayed(8500);
	client.gamesPlayed(291550);
	client.gamesPlayed(755790);
	client.gamesPlayed('F12 Hourboost');
});

client.on('error', function(e) {
	if(e.eresult == SteamUser.EResult.LoggedInElsewhere)
	{
		console.log('[TEST] Somewhere else');
		setTimeout(function() { client.logOn(logOnOptions); }, 600000);
		console.log('[TEST] Trying in 10 minutes');
	}
	else
	{
		console.log(e);
	}
});
