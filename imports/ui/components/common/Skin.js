import * as React from 'react';

const Skin = ({weapon, name, condition, collection}) => {
	return (<div className="skin">
		<h2>{name}</h2>
		<p>vapen: <img src="https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_awp_cu_awp_asimov_light_large.32d9045f8a2bcd13ca18390cc9fd82026e7195ab.png" />{weapon}</p>
		<p>kondition: {condition}</p>
		<p>samling: {collection}</p>
	</div>);
};

export default Skin;
