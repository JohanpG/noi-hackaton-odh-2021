import React from "react";
import {NavLink } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { useTranslation } from 'react-i18next';

const Footer = ({
  compName
}) => {
    const { t, i18n } = useTranslation();
  return (
    <>
      <div class='container-fluid'>
        <div class="card-footer-container">
            <div class="heading text-center">
                <div class="head1">{t('description.LetUsInspireYou')}</div>
                <p class="bdr"></p>
            </div>
            <div class="card-footer-body">
                <div class="row m-0 pt-5">
                    <div class="card-footer-container col-12 col-md-3">
                        <div class="card-footer-content"> <i class="fas fa-hand-holding-usd fa-3x"></i>
                            <div class="card-footer-title"> About SKYALPS </div>
                            <p><small>Our driving force</small></p>
                            <div class="learn-more">
                                <p> <small> LEARN MORE <label><i class="fas fa-angle-right"></i></label> </small> </p>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer-container col-12 col-md-3">
                        <div class="card-footer--content"> <i class="far fa-handshake fa-3x"></i>
                            <div class="card-footer-title"> Support </div>
                            <p><small>Supporting you at every step</small></p>
                            <div class="learn-more">
                                <p> <small> LEARN MORE <label><i class="fas fa-angle-right"></i></label> </small> </p>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer-container col-12 col-md-3">
                        <div class="card-footer--content"> <i class="fas fa-mobile-alt fa-3x"></i>
                            <div class="card-footer-title"> Destinations </div>
                            <p><small>Increasing destinations from you.</small></p>
                            <div class="learn-more">
                                <p> <small> LEARN MORE <label><i class="fas fa-angle-right"></i></label> </small> </p>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer-container col-12 col-md-3">
                        <div class="card-footer--content"> <i class="fas fa-user-secret fa-3x"></i>
                            <div class="card-footer-title"> STAY SECURE </div>
                            <p><small> Following bio-safety regulations</small></p>
                            <div class="learn-more">
                                <p> <small> LEARN MORE <label><i class="fas fa-angle-right"></i></label> </small> </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-footer row m-0">
                <div>
                    <p> <small class="follow-text">FOLLOW US ON SOCIAL MEDIA</small> <label class="footer-right"> <FontAwesomeIcon icon={faInstagram} /> <FontAwesomeIcon icon={faFacebook} /> <FontAwesomeIcon icon={faLinkedin} /><FontAwesomeIcon icon={faTwitter} /> </label> </p>
                </div>
            </div>
        </div>
    </div>
    </>
  );
};

export default Footer;
