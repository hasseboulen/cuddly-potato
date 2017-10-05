import { Tracker } from 'meteor/tracker';
// import React from 'react';
import { setDefaults } from 'react-komposer';
// import LoadingComponent from '/imports/ui/components/common/Loading';
// import ErrorPage from '/imports/ui/pages/special/Error';

export const compose = setDefaults({
	// pure: true,
	// propsToWatch: [],
	// loadingHandler: () 		=> (<LoadingComponent />),
	// errorHandler: (err) 	=> (<ErrorPage {...err} />),
});

export function getTrackerLoader(reactiveMapper){
	return (props, onData, env) => {
		let trackerCleanup = null;
		const handler = Tracker.nonreactive(() => {
			return Tracker.autorun(() => {
				trackerCleanup = reactiveMapper(props, onData, env);
			});
		});

		return () => {
			if(typeof trackerCleanup === 'function') trackerCleanup();
			return handler.stop();
		};
	};
}

export default function composeWithTracker(reactiveMapper, options){
	return compose(getTrackerLoader(reactiveMapper), options);
}
