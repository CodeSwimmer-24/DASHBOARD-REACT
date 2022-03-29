import { connect } from 'react-redux';

import Dashboard from './Dashboard.component';
import type { StateProps, DispatchProps } from './Dashboard.component';

const mapStateToProps = (state: StoreType): StateProps => ({});

const mapDispatchToProps = (dispatch: Function): DispatchProps => ({});

export default (connect(mapStateToProps, mapDispatchToProps)(Dashboard): any);
