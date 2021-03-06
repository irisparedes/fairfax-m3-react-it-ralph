import React from 'react';

class Preview extends React.Component {
    addPaletteClass() {
        if(this.props.palette === 1) {
            return ('photo__container paletteGreen')
        }else if(this.props.palette === 2) {
            return ('photo__container paletteRed')
        }else {
            return ('photo__container paletteBlue')
        }
    }
    render() {
        const {name, job, email, phone, linkedin, github, photo, actionToReset}=this.props;
        return(
            <section className="main__preview">
                <div className="preview__wrapper">
                    <div className={this.addPaletteClass()} >
                        <button className="btn__reset" onClick={actionToReset}>
                            <i className="trash__icon far fa-trash-alt"></i>Reset
                        </button>
                        <div className="card__header">
                            <div className="side__bar"></div>
                            <div className="full__name">
                                <h3 className="preview__title">{name !== '' ? name : 'Ada Lovelace'}</h3>
                                <h4 className="preview__subtitle">{job !== '' ? job : 'Front-end developer'}</h4>
                            </div>
                        </div>
                        <div className="profile">
                            <div className="preview__photo profile__image js__profile-image" style={{backgroundImage:`url(${photo})`}}>
                                <img src={photo}
                                alt="Foto del usuario" className="photo" />
                            </div>
                        </div>
                        <ul className="list__rs">
                            <li className={email !== '' ? 'reset__list preview__email' : 'reset__list preview__email hidden'}>
                                <a className="rs__element rs__email" href={`mailto:${email}`}>
                                    <i className="icon far fa-envelope"></i>
                                </a>
                            </li>
                            <li className={phone !== '' ? 'reset__list preview__tel' : 'reset__list preview__tel hidden'}
                            >
                                <a className="rs__element rs__tel" href={`tel:${phone}`}>
                                    <i className="icon fas fa-mobile-alt"></i>
                                </a>
                            </li>
                            <li className={linkedin !== '' ? 'reset__list preview__linkedin' : 'reset__list preview__linkedin hidden'}>
                                <a className="rs__element link__linkedin" href={`https://www.linkedin.com/in/${linkedin}`} target="_blank" rel="noopener noreferrer">
                                    <i className="icon fab fa-linkedin-in"></i>
                                </a>
                            </li>
                            <li className={github !== '' ? 'reset__list preview__github' : 'reset__list preview__github hidden'}>
                                <a className="rs__element link__github" href={`https://github.com/${github}`} target="_blank" rel="noopener noreferrer">
                                    <i className="icon fab fa-github-alt"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
}

export default Preview;