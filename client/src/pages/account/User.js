import React, {Fragment} from 'react';

import Header from '../../components/header/Headers.component'
import UserAccount from '../../components/account/user.account.component'
import Footer from '../../components/footer/Footer.component'


const User = () => {
 return (
    <Fragment>
        <Header />
        <UserAccount />
        <Footer />
    </Fragment>
  );
};

export default User;
