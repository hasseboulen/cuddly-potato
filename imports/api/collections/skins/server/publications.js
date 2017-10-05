import { Meteor } from 'meteor/meteor';
import Skins from '/imports/api/collections/skins/collection';

Meteor.publish('skins', function() {
	return Skins.find();
});
