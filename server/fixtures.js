import { Meteor } from 'meteor/meteor';
import Skins from '/imports/api/collections/skins/collection';

const conditions = [
	'Battle-Scarred',
	'Well-Worn',
	'Field-Tested',
	'Minimal Wear',
	'Factory New',
];

const skins = [
	{ collection: 'Assault', weapon: 'SG 553',	name: 'Tornado' },
	{ collection: 'Assault', weapon: 'UMP-45',	name: 'Caramel' },
	{ collection: 'Assault', weapon: 'Five-SeveN',	name: 'Candy Apple' },
	{ collection: 'Assault', weapon: 'AUG', name: 'Hot Rod' },
];

Meteor.startup(() => {
	if(Skins.find().count() === 0){
		skins.forEach(skin => {

			conditions.forEach(condition => {
				Skins.insert({
					...skin,
					condition,
				});
			});

		});
	}
});
