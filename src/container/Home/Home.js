import React, {Component} from 'react';
import Container from '@material-ui/core/Container';
import { Box } from '@material-ui/core';
import { connect } from 'react-redux';
import { fetchSearch, fetchBeers } from '../../Store/actions/beer';
import Loader from '../../components/UI/Loader/Loader';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Search from '../../components/Search/Search'
import './Home.css'

class Home extends Component {

    componentDidMount() {
        this.props.fetchBeers()
    }

    searchHandler = search => {
        this.props.fetchSearch(search)
        this.props.fetchBeers()
    }

    render() {
        if(this.props.loading)
        return <div className="Home"><Container><Loader/></Container></div>
        return (
            <div className="Home">
                <Container>
                <Search
                    onSearch={this.searchHandler}
                    onKeyPress={this.searchHandler}
                    value={this.props.search}
                />
                    <div className="box-container">
                        {this.props.beers ? this.props.beers.map((item, key) => (
                        <Box boxShadow={3} className="box" key={key}>
                            <div className="box-image">
                                <img src={item.image_url} alt="beer"/>
                            </div>
                            <div className="box-info">
                                <div className="box-info__top">
                                    <div className="box-info__top-title">
                                        <div className="box-info__name">{item.name}</div>
                                        <div className="box-info__tagline">{item.tagline}</div>
                                    </div>
                                    <div onClick={this.onFavorite} className="box-info__top-favorite">
                                        <FavoriteBorderIcon color="primary"/>
                                    </div>
                                </div>
                                <div className="box-info__description">{item.description}</div>
                                <div className="box-info__add-info">
                                    <div className="box-info__abv">{item.abv}%</div>
                                    <div className="box-info__first-brewed">{item.first_brewed}</div>
                                </div>
                            </div>
                        </Box>
                        )): null}
                    </div>
                </Container>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state);
    return {
        beers: state.beers.beers,
        loading: state.beers.loading,
        search: state.beers.search,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchBeers: () => dispatch(fetchBeers()),
        fetchSearch: (search) => dispatch(fetchSearch(search))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)