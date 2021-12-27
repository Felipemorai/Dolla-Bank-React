import mycar  from '../../images/by_my_car.svg';
import credit from '../../images/credit_card_payments.svg';
import makeit from '../../images/make_it_rain.svg';
import online from '../../images/online_resume.svg';
import opinion from '../../images/opinion.svg';
import resume from '../../images/resume.svg'; 

export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Premium Bank',
    headLine: 'Unlimited Transactions with zero fees',
    description: 'Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees',
    buttonLabel: 'Get started',
    imgStart: false,
    img: mycar,
    alt: 'Car',
    dark: true,
    primary: true,
    darkText: false
};

export const homeObjTwo = {
    id: 'discover',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Unlimited Access',
    headLine: 'Login to your account at any time',
    description: 'We have you covered no matter where you are located. All you need is an internet connection and a phone or computer.',
    buttonLabel: 'Learn More',
    imgStart: true,
    img: credit,
    alt: 'Credit card',
    dark: false,
    primary: false,
    darkText: true
};

export const homeObjThree = {
    id: 'signup',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Unlimited Access',
    headLine: 'Creating an account is extremely easy',
    description: 'We have you covered no matter where you are located. All you need is an internet connection and a phone or computer.',
    buttonLabel: 'Start Now',
    imgStart: false,
    img: online,
    alt: 'Online resume',
    dark: false,
    primary: false,
    darkText: true
}