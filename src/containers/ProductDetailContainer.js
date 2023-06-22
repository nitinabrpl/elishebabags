import ProductDetail from '../pages/ProductDetail'
import {connect} from 'react-redux'
import {addToCart} from '../service/actions/actions'

const mapStateToProps=state=>({
     data:state.cardItems
})
const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data))

})
export default connect(mapStateToProps,mapDispatchToProps)(ProductDetail)
// export default Home;