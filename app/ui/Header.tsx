// "use client";
// import React, { useState, useEffect } from "react";
// import { useAuth0 } from "@auth0/auth0-react";
// import axios from "axios";
// import Button from "@mui/material/Button";
// import PropTypes from "prop-types";
import logo from "../lib/assets/ailogo.png";
import slogan from "../lib/assets/slogan.png";
import Image from "next/image";
import { fetchVisitCount } from "../lib/data";
import { getSession } from "@auth0/nextjs-auth0";
// import {
//   HeaderContainerStyled,
//   LogoStyled,
//   SloganStyled,
//   LogoutButtonContainerStyled,
//   ProfileImageStyled,
//   VisitCounterStyled,
// } from "./HeaderStyledComponents";

// const Header = ({ setUserObject }) => {

interface HeaderProps {
  login: boolean;
}
const Header: React.FC<HeaderProps> = async ({ login }) => {
  const visitCount = await fetchVisitCount(
    "410544b2-4001-4271-9855-fec4b6a6442a"
  );
  let user;
  const session = await getSession();
  if (session && session.user) {
    user = session.user;
    console.log("user", user);
  } else {
    console.log("no user logged in");
  }
  // const { logout, isAuthenticated, user } = useAuth0();

  // const [visitCount, setVisitCount] = useState(null);

  // useEffect(() => {
  //   if (user) {
  //     axios
  //       .get(`/update?name=${user.name}&email=${user.email}`)
  //       .then((response) => {
  //         setUserObject(response.data);
  //         setVisitCount(response.data.visitCount);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }
  // }, [isAuthenticated]);

  // const logOut = () => {
  //   logout({ logoutParams: { returnTo: window.location.origin } });
  // };

  return (
    <header className="bg-headerGray p-10 flex justify-center items-center border-b-4 border-black relative">
      <Image
        src={logo}
        height={75}
        // className="hidden md:block"
        alt="AI Companion Logo"
      />
      <Image
        src={slogan}
        height={75}
        // className="hidden md:block"
        alt=""
      />
      {login && (
        <div className="absolute bottom-2.5 right-2.5 flex flex-col items-center">
          <Image
            className="max-h-12 w-auto rounded-full"
            src={user.picture}
            height={60}
            width={60}
            // className="hidden md:block"
            alt="User profile pic"
          />
          <div className="text-lg font-bold mt-1.5 mb-1.5 text-white">
            Total Visits: {`${visitCount}`}
          </div>
          <a
            className="inline-flex items-center justify-center px-4 py-2 border border-blue-500 text-blue-500 text-base font-medium rounded-md hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            // tabIndex="0"
            href="/api/auth/logout"
          >
            Log Out
            {/* <span className="MuiTouchRipple-root"></span> */}
          </a>
        </div>
      )}
      {/* <Button
        onClick={logOut}
        variant="outlined"
        href="#outlined-buttons"
      ></Button> */}
    </header>

    //   {isAuthenticated && (
    //     <LogoutButtonContainerStyled>
    //       {user?.picture && (
    //         <>
    //           <ProfileImageStyled src={user.picture} alt="Profile" />
    //         </>
    //       )}
    //       <Button onClick={logOut} variant="outlined" href="#outlined-buttons">
    //         Log Out
    //       </Button>
    //     </LogoutButtonContainerStyled>
    //   )}
    // </HeaderContainerStyled>
  );
};

// Header.propTypes = {
//   setUserObject: PropTypes.func.isRequired,
// };

export default Header;
