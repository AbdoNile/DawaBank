const SiteSettings = {
    map : {
        googleApiKey : "AIzaSyAJHcO77eg3mYJ4fGzOgrB_mIcRKxsut3k",
        language : "en",
        defaultZoom : 4,
        defaultCentre :  {
                lat: 50,
                lng: 0,
            },


    },
    api : {
        address : "http://localhost:5000/api/"
    },
    authentication : {
        cognito : {
            login_page : "https://minttest.auth.us-east-2.amazoncognito.com/login?response_type=token&client_id=5p973ntoftvhdut4skdrgucba3&redirect_uri=",
        }
    }


};

export default SiteSettings;