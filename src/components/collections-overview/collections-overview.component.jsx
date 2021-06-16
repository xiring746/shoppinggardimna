import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import PreviewCollection from '../preview-collection/preview-collection.component.jsx';
import {selectCollectionsForPreview} from '../../redux/shop/shop.selectors';
import './collections-overview.styles.scss';

const CollectionsOverview = ({collection}) => (
           <div className = 'collections-overview'>
           {
            collection.map(({id, ...otherCollectionProps}) => (
            <PreviewCollection key={id} {...otherCollectionProps} />
            ))
             }  
           </div>        
)
const mapStateToProps = createStructuredSelector({
    collection: selectCollectionsForPreview
})
export default connect(mapStateToProps)(CollectionsOverview)