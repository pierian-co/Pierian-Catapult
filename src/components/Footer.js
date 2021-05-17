import React from 'react';

export const Footer = () => {

    let footerStyle = {
        // paddingTop: "10px",
        // position: "fixed",
        left: "0",
        bottom: "0",
        width: "100%",
        backgroundColor: "#1C1C20",
    }

    let footerTextStyle = {
        fontSize: "14px",
        color: "#aaaaaa",
        textAlign: "center",
        margin: "0px"
    }

    return (
        <div className="jumbotron mt-5" style={footerStyle}>
            <p style={footerTextStyle}>
                Transactions on this site are not real.<br />
               Forked from <a href="http://localhost:3000/">GitHub</a><br />
               File bugs and feedback under <a href="http://localhost:3000/">Feedback and Issues</a>
            </p>

            {/* <div className="row" style={footerTextStyle}>
                <div className="col-4">
                    <p>
                        Transactions on this site are not real.
                    </p>
                </div>
                <div className="col-4">
                    <p>
                        Forked from <a href="">GitHub</a>
                    </p>
                </div>
                <div className="col-4">
                    <p>
                        File bugs and feedback under <a href="">Feedback and Issues</a>
                    </p>
                </div>
            </div> */}



        </div>
    )
}

