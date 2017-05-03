import React from 'react';import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NotificationsSnackbar from '../NotificationsSnackbar';


class LeftSideNavAppLayout extends React.Component {
    componentDidUpdate(){

        this.appMountTimeout = setTimeout(() => {
            if (window.componentHandler) {
                window.componentHandler.upgradeDom();
            }
        }, 0);
    }

    componentWillUnmount() {
        clearTimeout(this.appMountTimeout);
    }
    render() {
        return (

            <div className="mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
                <header className="mdl-layout__header">
                    <div className="mdl-layout__header-row  mdl-color--indigo">
                        <div className="mdl-layout-spacer" />
                        <span className="mdl-layout-title currentPageName">
                            {this.props.currentPage || 'Home'}
                        </span>
                    </div>
                </header>
                <main className="mdl-layout__content no-y-scroll">
                    {this.props.children}
                </main>

                <footer className="mdl-mini-footer">
                    {this.props.loading && <div className="mdl-progress mdl-js-progress mdl-progress__indeterminate loading-bar-full-width" />}
                    <NotificationsSnackbar/>
                </footer>

                <footer className="mdl-mega-footer">
                    <div className="mdl-mega-footer__bottom-section">
                        <div className="mdl-logo loginFooterImage"><img alt="Blue SST" src="/images/SST-logo-blue-transparent.png"/></div>
                    </div>
                </footer>
            </div>
    );
    }
}

LeftSideNavAppLayout.propTypes = {
    children: PropTypes.array,
    currentPage: PropTypes.string,
    loading: PropTypes.bool
};

function mapStateToProps(state, ownprops) {
    return {
        loading: state.ajaxStatus.ajaxCallsInProgress > 0,
        currentPage
    };
}

export default connect(mapStateToProps)(LeftSideNavAppLayout);