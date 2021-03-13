import { Route } from "react-router-dom";

const SubRoutes = (props) => {

	return (
            <>
                { props.routes.map((route, i) => {

                    return <Route key={ i } path={ route.path } component={ route.component } exact={ false } />;
                })}
            </>
	);
}

export default SubRoutes;