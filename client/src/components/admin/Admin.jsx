import { Component } from 'react';
import AdminComments from './admin-comments/AdminComments';

import styles from './Admin.module.css';

export default class Admin extends Component {
    render() {
        return (
            <section className={styles['admin-section']}>
                <h1>Admin Panel</h1>

                <AdminComments />
            </section>
        );
    }
}
