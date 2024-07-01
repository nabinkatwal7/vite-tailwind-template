/* eslint-disable @typescript-eslint/no-explicit-any */
// unknown used because for build purposes, change it during actual impl
// import { ReactNode, useEffect } from "react";
// import { Navigate, useLocation } from "react-router-dom";
// import Cookies from "js-cookie";
// import usePermissionStore from "../store/PermissionStore";
// import { decryptPermissionData } from "../utils/decrypt-permission";

import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { authHandler } from "../utils/auth-handler";

// import { useSetState } from "@mantine/hooks";

interface IProtectedRoute {
  children: ReactNode;
}

export const ProtectedRoute = ({ children }: IProtectedRoute) => {
  // this is actual code for protected routes commented out for templating, change it during actual impl
  //   const refreshToken: unknown = Cookies.get("refreshToken");
  //   const accessToken: unknown = Cookies.get("accessToken");
  //   const permission = decryptPermissionData();

  //   const data = useLocation();
  //   const pathformurl = data.pathname.split("/")[1];

  //   const { setPermission } = usePermissionStore();

  //   const allowedRoute = permission?.find(
  //     (item: any) => item?.name === pathformurl
  //   );

  //   useEffect(() => {
  //     if (allowedRoute) {
  //       setPermission({
  //         hasPermission: allowedRoute?.access === "readwriteanddelete",
  //         accessComponent: allowedRoute.children,
  //       });
  //     }
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, [pathformurl]);

  //   if (!refreshToken || !accessToken || !permission) {
  //     return <Navigate to="/login" replace />;
  //   }

  const allowedRoute = authHandler();

  if (allowedRoute) {
    return <>{children}</>;
  } else {
    return <Navigate to="/login" replace />;
  }
};

export default ProtectedRoute;
