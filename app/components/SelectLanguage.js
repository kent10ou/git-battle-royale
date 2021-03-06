import React from 'react';
import PropTypes from 'prop-types';

function SelectLanguage (props) {
    var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
    return (
        <ul className="languages">
            {languages.map(function (lang) {
                return (
                    <li
                        style = { lang === props.selectedLanguage ? {color: '#d0021b'} : null }
                        onClick={ props.onSelect.bind(null, lang) }
                        key={lang}>
                        {lang}
                    </li>
                )
            })}
        </ul>
    )
}

SelectLanguage.propTypes = {
    selectedLanguage: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired
}

export default SelectLanguage;