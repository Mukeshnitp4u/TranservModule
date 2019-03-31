import ApiCall from './ApiCall'
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity,
    Image,
    ActivityIndicator
} from 'react-native';
export default class MovieList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: '',
            isLoading: true,
            dataStaus: true,
        }
    }
    static navigationOptions = {
        title: 'Movies List',
        headerStyle: {
            backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };
    componentDidMount() {
        this.fetchData()
    }
    fetchData = () => {
        var mThis = this;
        var url = "https://api.myjson.com/bins/itzx2";
        ApiCall.getMovieList(url, function (onSuccess) {
            console.log("Hello" + onSuccess)
            if (onSuccess != null || onSuccess != undefined || onSuccess != "") {
                mThis.setState({ users: onSuccess, isLoading: false });
            } else {
                mThis.setState({ users: onSuccess, isLoading: false });
            }
        }, function (onFailure) {
            console.log("Fail" + onFailure)
            mThis.setState({ dataStaus: false, isLoading: false });
        })
    }
    render() {
        return (
            <View style={styles.container} >
                <FlatList
                    data={this.state.users}
                    showsVerticalScrollIndicator={false}
                    ItemSeparatorComponent={() => <View style={{ height: 4, width: "100%" }}></View>}
                    renderItem={({ item, index }) =>
                        <TouchableOpacity onPress={() => {
                            this.props.navigation.navigate('MovieDetail', { item: item })
                        }}>
                            <View style={styles.flat}>
                                <Image
                                    defaultSource={require('./Image/noImage.png')}
                                    style={{ height: 200, width: "100%" }}
                                    source={{ uri: item["Poster "] || item["Poster"] }}>
                                </Image>
                                <View style={{ flexDirection: "row", backgroundColor: "yellow", justifyContent: "center", alignItems: "center" }}>
                                    <View style={{ width: "35%", }}>
                                        <Text style={{ fontSize: 16,textAlign:'justify' }}> Movie Name: </Text>
                                    </View>
                                    <View style={{ width: "65%", }}>
                                        <Text style={{ fontSize: 16,textAlign:'center' }}>{item.Title}</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    }
                    keyExtractor={(item, index) => index}
                />
                {
                    this.state.isLoading &&
                    <View style={styles.Activitycontainer}>
                        <ActivityIndicator
                            color='#bc2b78'
                            size="large"
                            style={styles.activityIndicator}
                        />
                    </View>
                }
                {
                    !this.state.isLoading && !this.state.dataStaus &&
                    <View style={styles.showText}>
                        <Text>Unable to fetch data.</Text>
                        <Text>Please Check Internet Connection.</Text>
                    </View>
                }
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 0,
        marginHorizontal: "2%"
    },
    showText: {
        flex: 1,
        alignItems: 'center'
    },
    Activitycontainer: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    activityIndicator: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 80
    },
    headingtext: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
    },
    flat: { flexDirection: 'column' },
    flatview: {
        backgroundColor: "yellow",
        justifyContent: 'center',
        borderRadius: 2,
        height: "5%"

    },
    name: {
        fontFamily: 'Verdana',
        fontSize: 16,
    },
});
