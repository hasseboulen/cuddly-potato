import * as React from 'react';
import PageTitle from './PageTitle';

const Page = ({children, title}) => {
	return (<div>
		<PageTitle title={title} />
		{children}
	</div>);
};

export default Page;
