import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { Logo } from "../components/global/Global";

const NotFound: React.FC<{}> = (props: any) => {
    return (
        <section className="flex flex-col h-full min-h-screen p-3 blur-none">
            <div className="night"></div>
            <p className="inline-block z-10"><Logo /></p>
            <div className="py-5 mx-auto z-10 absolute top-1/2 left-1/2" style={{transform: "translate(-50%, -50%)", width: "100vw"}}>
                <div className="text-center px-4">
                    <h2 className="mb-8 font-extrabold text-8xl text-yellow-500">
                        <span className="sr-only">Error</span>404
                    </h2>
                    <p className="text-2xl font-semibold md:text-3xl text-yellow-500">Sorry, we couldn't find this page.</p>
                    <p className="mt-4 mb-10 text-yellow-50 font-medium">But don't worry, you can find plenty of other things on our homepage.</p>
                    <NavLink to="" className="px-8 py-3 font-semibold rounded bg-yellow-600 inline-block text-amber-50 hover:text-yellow-50">Back to homepage</NavLink>
                </div>
            </div>
        </section>
    );
};

const mapDispatchToProps = (dispatch: any) => ({
});

export default connect(null, mapDispatchToProps)(NotFound);