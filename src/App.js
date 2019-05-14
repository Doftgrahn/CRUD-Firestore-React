import React, {useState, useEffect} from "react";
import "./styles/App.scss";
import "./styles/loaders.scss";
import firebase from "firebase/app";
import "firebase/firestore";
import firebaseConfig from "./shared/firestore";

import Input from "./components/Input";
import Button from "./components/Button";
import ShowData from "./components/ShowData";

const App = () => {
    const [cafe, setCafe] = useState("");
    const [city, setCity] = useState("");
    const [rating, setRating] = useState(0);
    const [cafeList, setCafeList] = useState(null);

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    const db = firebase.firestore();

    useEffect(
        () => {
            db.collection("cafe")
                .get()
                .then(snapshot => {
                    const list = [];
                    snapshot.forEach(doc => list.push(doc.data()));
                    setCafeList(list);
                });
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
    );

    const cafeInput = value => setCafe(value);
    const cityInput = value => setCity(value);
    const ratingInput = value => setRating(value);

    const sendData = () => {
        db.collection("cafe")
            .doc(cafe)
            .set({
                cafe: cafe,
                city: city,
                rating: rating
            })
            .then(() => {
                console.log("succeded:");
                let cafes = {
                    cafe: cafe,
                    city: city,
                    rating: rating
                };
                setCafeList([...cafeList, cafes]);
            })
            .catch((error: any) => {
                console.log("error", error);
            });
        setCafe("");
        setCity("");
        setRating(0);
    };

    const deteleteData = newData => {
        db.collection("cafe")
            .doc(newData.cafe)
            .delete()
            .then(() => {
                console.log("Document successfully deleted!");
            })
            .catch(error => {
                console.log("Error", error);
            });
        let deleteCafe = cafeList.filter(item => item.cafe !== newData.cafe);
        setCafeList(deleteCafe);
    };

    const updateList = (oldCafe, newCafe) => {
        let newData = cafeList.map(place => {
            return place === oldCafe ? newCafe : place;
        });

        let updateDb = db.collection("cafe").doc(newCafe.cafe);
        updateDb
            .set({
                cafe: newCafe.cafe,
                city: newCafe.city,
                rating: newCafe.rating
            })
            .then(() => {
                console.log("Update Did Successfull");
            })
            .catch(error => {
                console.log("error", error);
            });

        setCafeList(newData);
    };

    const showData = () =>
        cafeList.map(place => (
            <ShowData
                key={place.city + place.cafe}
                place={place}
                deteleteData={deteleteData}
                updateList={updateList}
            />
        ));

    return (
        <div className="App">
            <section>
                <h1>Cafe List</h1>

                <Input
                    cafeInput={cafeInput}
                    cityInput={cityInput}
                    ratingInput={ratingInput}
                    cafeValue={cafe}
                    cityValue={city}
                    ratingValue={rating}
                />

                <Button
                    cafeValue={cafe}
                    cityValue={city}
                    ratingValue={rating}
                    sendData={sendData}
                />

                {!cafeList ? <div className="loader" /> : <ul>{showData()}</ul>}
            </section>
        </div>
    );
};

export default App;
