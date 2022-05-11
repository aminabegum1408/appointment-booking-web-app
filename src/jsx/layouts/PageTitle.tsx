import React from "react";
import {Link} from 'react-router-dom';

const PageTitle = (headingPara: any, motherMenu: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined, activeMenu: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined) => {
   return (
	
		<div className="page-titles">
			<ol className="breadcrumb">
				<li className="breadcrumb-item"><Link to={"#"}>{motherMenu}</Link></li>
				<li className="breadcrumb-item active"><Link to={"#"}>{activeMenu}</Link></li>
			</ol>
		</div>
		
   );
};

export default PageTitle;
