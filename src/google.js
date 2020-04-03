

const API_KEY = 'AIzaSyBvgPCGuMuuG_lL-GDSbB_IJ94UUZMFZ6U';
const CLIENT_ID = '480104379735-4n8qlnrc4gjhja0jgb8c5hh8r179prq9.apps.googleusercontent.com';

script.src = "https://apis.google.com/js/client.js";

  function authenticate() {
    return gapi.auth2.getAuthInstance()
        .signIn({scope: "https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.appdata https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/drive.metadata https://www.googleapis.com/auth/drive.metadata.readonly https://www.googleapis.com/auth/drive.photos.readonly https://www.googleapis.com/auth/drive.readonly"})
        .then(function() { console.log("Sign-in successful"); },
              function(err) { console.error("Error signing in", err); });
  }
  function loadClient() {
    gapi.client.setApiKey(API_KEY);
    return gapi.client.load("https://content.googleapis.com/discovery/v1/apis/drive/v2/rest")
        .then(function() { console.log("GAPI client loaded for API"); },
              function(err) { console.error("Error loading GAPI client for API", err); });
  }
  // Make sure the client is loaded and sign-in is complete before calling this method.
  function execute() {
    return gapi.client.drive.children.list({
      "folderId": "1QjRQeONiICsq3IX3FHmcz4VdVte33Jlj",
      "maxResults": 165
    })
        .then(function(response) {
                // Handle the results here (response.result has the parsed body).
                console.log("Response", response);
              },
              function(err) { console.error("Execute error", err); });
  }

  gapi.load("client:auth2", function() {
    gapi.auth2.init({client_id: CLIENT_ID});
  });

  authenticate().then(loadClient);
  execute();
