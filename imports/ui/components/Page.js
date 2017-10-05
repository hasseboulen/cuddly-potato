import * as React from 'react';

const Page = ({children, title}) => {
	return (<div>
		<h2>{title}</h2>
		{children}
	</div>);
};

export default Page;
