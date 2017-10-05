import { Meteor } from 'meteor/meteor';
import Skins from '/imports/api/collections/skins/collection';
import composeWithTracker from './_compose';

function composer(props, onData){
	const handle = Meteor.subscribe('skins', {
		onStop: (err) => {
			if(err) onData(err);
		},
	});

	if(handle.ready()){
		const slides = Skins.find().fetch();

		onData(null, {...props, slides});
	}
}

export default composeWithTracker(composer);
