$(document).ready(function(){



var userInfo = {
    login: "HectorBlisS",
    id: 7883990,
    avatar_url: "https://avatars0.githubusercontent.com/u/7883990?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/HectorBlisS",
    html_url: "https://github.com/HectorBlisS",
    followers_url: "https://api.github.com/users/HectorBlisS/followers",
    following_url: "https://api.github.com/users/HectorBlisS/following{/other_user}",
    gists_url: "https://api.github.com/users/HectorBlisS/gists{/gist_id}",
    starred_url: "https://api.github.com/users/HectorBlisS/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/HectorBlisS/subscriptions",
    organizations_url: "https://api.github.com/users/HectorBlisS/orgs",
    repos_url: "https://api.github.com/users/HectorBlisS/repos",
    events_url: "https://api.github.com/users/HectorBlisS/events{/privacy}",
    received_events_url: "https://api.github.com/users/HectorBlisS/received_events",
    type: "User",
    site_admin: false,
    name: "BlisS",
    company: "FixTeR",
    blog: "http://www.fixter.org",
    location: "Pachuca",
    email: null,
    hireable: null,
    bio: "Soy de la generación que jugó con Atari, se conecto a internet vía Dial-up y ahora usa una Mac para programar con Android, todo en la misma vida. ",
    public_repos: 130,
    public_gists: 2,
    followers: 149,
    following: 84,
    created_at: "2014-06-13T21:15:05Z",
    updated_at: "2018-01-23T23:37:55Z"
    };

    
$(".user-info img").prop("src", userInfo.avatar_url);
$(".user-info h2").text(userInfo.login);

$('.profile-pics img').on("mouseover", function(){
    $(this).siblings().fadeIn();
});

$('.profile-pics img').on("mouseout", function(){
    $(this).siblings().fadeOut();
});



}); // esto cierra el doc ready