import React from 'react';
import logo from '../../images/jigsaw_logo.svg';
import logo_adalab from '../../images/logo-adalab.png';
import HeaderCard from './HeaderCard';
import MainCard from './MainCard';
import Footer from '../Footer';
import PropTypes from 'prop-types';

class Card extends React.Component {
    render(){
        const {image, card, handleColor, handleInput, isAvatarDefault, photo, updateAvatar, actionToReset, openCollapsible, collapsible, handleTwitter, sendNewData, showTwitter,cardURL} = this.props;
        const mainContent = (
            <React.Fragment>
                <div className="page__card">
                    <HeaderCard logo = {logo} />
                    <MainCard 
                        image={image}
                        card={card}
                        handleColor={handleColor}
                        handleInput={handleInput}
                        isAvatarDefault={isAvatarDefault}
                        photo={photo}
                        updateAvatar={updateAvatar}
                        actionToReset={actionToReset}
                        openCollapsible={openCollapsible}
                        collapsible={collapsible}
                        sendNewData={sendNewData}
                        handleTwitter = {handleTwitter}
                        showTwitter={showTwitter}
                        cardURL={cardURL}
                    />
                </div>
                <Footer logo_adalab={logo_adalab}/>
            </React.Fragment>    
        );
        return mainContent;
    }
}

Card.propTypes = {
    card: PropTypes.object,
    handleColor: PropTypes.func,
    handleInput: PropTypes.func,
    isAvatarDefault: PropTypes.bool,
    photo: PropTypes.string,
    updateAvatar: PropTypes.func,
    actionToReset: PropTypes.func,
    openCollapsible: PropTypes.func,
    collapsible: PropTypes.string,
    handleTwitter: PropTypes.func,
    sendNewData: PropTypes.func,
    showTwitter: PropTypes.bool,
    cardURL: PropTypes.string
};

export default Card;