import { Component } from 'react';
import AdminComments from './admin-comments/AdminComments';

import styles from './Admin.module.css';
import { UserContext } from '../../contexts/UserContext';
import ErrorBoundary from '../error-boundary/ErrorBoundary';

export default class Admin extends Component {
    render() {
        return (
            <ErrorBoundary>
                <UserContext.Consumer>
                    {(context) => (
                        <section className={styles['admin-section']}>
                            <h1>Admin Panel</h1>
                            <h2>Hello {context.email}</h2>

                            <AdminComments />
                        </section>
                    )}
                </UserContext.Consumer>
            </ErrorBoundary>
        );
    }
}
