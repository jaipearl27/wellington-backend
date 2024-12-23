// validities
export const accessTokenValidity = "30s";
export const refreshTokenValidity = "15d";
// ----------------------------------------------------------------------------------------

// httpOnlyCookieValidity - setting the validity for http only cookie
const httpOnlyCookieValidity = () => {
  let currentDate = new Date();
  return new Date(currentDate.getTime() + 15 * 24 * 60 * 60 * 1000); // 15 days validity
};

// saveAccessTokenToCookie - this method saved the access token to the http only cookie
export const saveAccessTokenToCookie = (res, token) => {
  return res.cookie(process.env.TOKEN_NAME, token, {
    httpOnly: true,
    expires: httpOnlyCookieValidity(),
    sameSite: process.env.NODE_ENV === "production" ? "none" : "Lax",
    ...(process.env.NODE_ENV === "production" && { secure: true }),
  });
};