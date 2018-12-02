const SiteSettings = {
    map: {
        googleApiKey: "AIzaSyAJHcO77eg3mYJ4fGzOgrB_mIcRKxsut3k",
        language: "en",
        defaultZoom: 7,
        defaultCentre: {
            lat: 30,
            lng: 31,
        },
        searchBounds: { ne: { lat: 31.205753, lng: 29.924526 }, sw: { lat: 20.7108, lng: 28.2936 } }



    },
    api: {
        address: "http://localhost:5000/api/" 
    },
    authentication: {
        cognito: {
            login_page_address: "https://dawa-qa.auth.us-east-1.amazoncognito.com/login?response_type=token&client_id=6ip3eb9785vob5kqe3qrhgapiq&redirect_uri="
        }
    }


};

export default SiteSettings;