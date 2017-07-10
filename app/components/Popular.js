import React from 'react';
import PropTypes from 'prop-types';
import api from '../utils/api';
import SelectLanguage from './SelectLanguage';
import RepoGrid from './RepoGrid';

class Popular extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            selectedLanguage: 'All',
            repos: null
        };

        this.updateLanguage = this.updateLanguage.bind(this);
    }

    componentDidMount () {
        // AJAX
        this.updateLanguage(this.state.selectedLanguage);
    }

    updateLanguage(lang) {
        this.setState(() => {
            return {
                selectedLanguage: lang,
                repos: null
            }
        });

        api.fetchPopularRepos(lang)
            .then((repos) => {
                this.setState(() => {
                    return {
                        repos: repos
                    }
                })
            })
    }

    render () {
        return (
            <div>
                <SelectLanguage 
                    selectedLanguage={this.state.selectedLanguage}
                    onSelect={this.updateLanguage}
                />
                { !this.state.repos ? <p>LOADING</p> : <RepoGrid repos={this.state.repos} /> }
            </div>
        )
    }
}

export default Popular;