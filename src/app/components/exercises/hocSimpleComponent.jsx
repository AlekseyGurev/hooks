import React from "react";
import CardWrapper from "../common/Card";

const hocSimpleComponent = (Component) => (props) => {
    const isAuth = localStorage.getItem("auth");
    const onLogin = () => {
        console.log("Login");
    };
    const onLogOut = () => {
        console.log("Exit");
    };
    return (
        <>
            <CardWrapper>
                <Component
                    {...props}
                    isAuth={isAuth}
                    onLogin={onLogin}
                    onLogOut={onLogOut}
                />
            </CardWrapper>
        </>
    );
};
export default hocSimpleComponent;
