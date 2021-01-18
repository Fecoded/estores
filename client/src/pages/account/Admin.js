import React, {Fragment} from 'react';

import Header from '../../components/header/Headers.component'
import AdminAccount from '../../components/account/admin.account.component'
import Footer from '../../components/footer/Footer.component'


const Admin = () => {
 return (
    <Fragment>
        <Header />
        <AdminAccount />
        <Footer />
    </Fragment>
  );
};

export default Admin;
