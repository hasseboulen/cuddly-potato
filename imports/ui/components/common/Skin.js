import * as React from 'react';

const Skin = ({weapon, name, condition, collection}) => {
	return (<div className="skin">
		<h2>{name}</h2>
		<p>vapen: {weapon}</p>
		<p>kondition: {condition}</p>
		<p>samling: {collection}</p>
	</div>);
};

export default Skin;
