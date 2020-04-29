import React from "react";

export default class Header2 extends React.Component {
    render() {
        return (
            <div>
                <form action="http://icimsmlproject.uc.r.appspot.com/">
                    <input className="submit" type="submit" value="Predict Your Job Today!" />
                </form>
                <div class="wrapper">
                    <a href="https://491final.s3.amazonaws.com/ViewJobsLargerNavBar.html"><span>Go Back</span></a>
                </div>
            </div>
        );
    }
};
