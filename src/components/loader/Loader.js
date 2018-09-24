import React,{PropTypes} from 'react';

const Loader = ({loading}) => {
    return (
        <div className={loading ? 'loader-bar show' : 'loader-bar'}>
            <div className="loader-bar-inner-bar"></div>
        </div>
    );
};

Loader.propTypes = {
    loading: PropTypes.bool.isRequired
};

export default Loader;