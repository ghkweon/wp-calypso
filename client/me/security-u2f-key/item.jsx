/** @format */

/**
 * External dependencies
 */
import React from 'react';
import { connect } from 'react-redux';
import { localize } from 'i18n-calypso';

/**
 * Internal dependencies
 */
import { recordGoogleEvent } from '../../state/analytics/actions';
import U2FDeleteButton from './delete-item-button';

class SecurityU2fKeyItem extends React.Component {
	render() {
		return (
			<div className="security-u2f-key__item">
				<div className="security-u2f-key__item-information">
					<div className="security-u2f-key__item-title">Foo { this.props.key }</div>
					<div className="security-u2f-key__item-subtitle">Bar { this.props.key }</div>
				</div>
				<U2FDeleteButton keyId={ this.props.key } />
			</div>
		);
	}
}

export default connect(
	state => ( { state } ),
	{
		recordGoogleEvent,
	}
)( localize( SecurityU2fKeyItem ) );
