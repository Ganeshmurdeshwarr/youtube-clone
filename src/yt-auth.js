// youtubeAuth.js
export const requestYouTubeAccess = (onSuccess) => {
  const tokenClient = google.accounts.oauth2.initTokenClient({
    client_id: "774338249657-86tv28o35hdsnge4gf92ns61753q74bo.apps.googleusercontent.com",
    scope: "https://www.googleapis.com/auth/youtube.force-ssl",
    callback: (tokenResponse) => {
      if (tokenResponse.access_token) {
        console.log("✅ YouTube token:", tokenResponse.access_token);
        onSuccess(tokenResponse.access_token);
      }
    },
  });

  // Open the OAuth popup
  tokenClient.requestAccessToken();
};
