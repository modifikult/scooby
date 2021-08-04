import React from 'react'
import TopContainer from "./TopContainer/TopContainer";
import BottomContainer from "./BottomContainer/BottomContainer";
import firebase from "firebase/app";
import 'firebase/database'
import AboutSite from "./AboutSite/AboutSite";

class Main extends React.Component {
    state = {
        newItems: null,
        popularItems: null
    }

    componentDidMount() {
        if (!firebase.apps.length) {
            const firebaseConfig = {
                apiKey: "AIzaSyDcZh40QMXd2ovagDpaQHOJPB5Szsd1inc",
                authDomain: "scooby-54939.firebaseapp.com",
                databaseURL: "https://scooby-54939-default-rtdb.europe-west1.firebasedatabase.app",
                projectId: "scooby-54939",
                storageBucket: "scooby-54939.appspot.com",
                messagingSenderId: "204659429734",
                appId: "1:204659429734:web:2dd59e5d3738ad39c3b8a7"
            };
            firebase.initializeApp(firebaseConfig)
        } else {
            firebase.app()
        }
            const db = firebase.database().ref().child('products')
            db.on('value', snap => {
                const dbObj = snap.val()
                let popularItems = []
                let newItems = []

                for (let item in dbObj) {
                    const elem = dbObj[item]
                    for (let prod in elem) {
                        if(elem[prod].category === 'popular') {
                            popularItems.push(elem[prod])
                        }
                        if(elem[prod].category === 'new') {
                            newItems.push(elem[prod])
                        }
                    }

                }
                this.setState({
                    newItems: newItems,
                    popularItems: popularItems
                })
            })
        }
    render() {
        return (
            <div className="main">
                <TopContainer/>
                <BottomContainer newItems={this.state.newItems} popularItems={this.state.popularItems}/>
                <AboutSite/>
            </div>
        );
    }
}

export default Main