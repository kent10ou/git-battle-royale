import axios from 'axios';

module.exports = {
    fetchPopularRepos: function (language) {
        //ping github api, get back most popular repos for this lang.
        var encodedURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:'+ language + '&sort=stars&order=desc&type=Repositories');

        return axios.get(encodedURI)
            .then(function (response) {
                return response.data.items;
            })
    }
}