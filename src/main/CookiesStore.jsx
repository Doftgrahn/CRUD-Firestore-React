import React, {useState, useEffect} from "react";

import "../styles/App.scss";
import "../styles/loaders.scss";

import db from "../shared/firestore";

import Input from "../components/Input";
import Button from "../components/Button";
import ShowData from "../components/ShowData";

const CookieStore = () => {
    const [cafe, setCafe] = useState("");
    const [city, setCity] = useState("");
    const [rating, setRating] = useState(0);
    const [id, setId] = useState("");
    const [cafeList, setCafeList] = useState(null);

    useEffect(
        () => {
            let isSubscribed = true;
            const myCollection = db.collection("cafe");
            if (isSubscribed) {
                myCollection
                    .get()
                    .then(snapshot => {
                        const list = [];
                        snapshot.forEach(doc => list.push(doc.data()));
                        setCafeList(list);
                    })
                    .catch(error => console.log("Error", error));
            }
            return () => (isSubscribed = false);
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
    );

    console.log(cafeList);
    const sendData = () => {
        let isSubscribed = true;
        let docRef = db.collection("cafe").doc();
        setId(docRef.id);
        if (isSubscribed) {
            docRef
                .set({
                    cafe: cafe,
                    city: city,
                    rating: rating,
                    id: id
                })
                .then(() => {
                    console.log("succeded");
                    let cafes = {
                        cafe: cafe,
                        city: city,
                        rating: rating,
                        id: docRef.id
                    };
                    setCafeList([...cafeList, cafes]);
                })
                .catch((error: any) => {
                    console.log("error", error);
                });
        }
        setCafe("");
        setCity("");
        setRating(0);
        return () => (isSubscribed = false);
    };

    const deteleteData = newData => {
        let isSubscribed = true;
        if (isSubscribed) {
            db.collection("cafe")
                .doc(newData.id)
                .delete()
                .then(() => {
                    console.log("Document successfully deleted!");
                })
                .catch(error => {
                    console.log("Error", error);
                });
        }
        const deleteCafe = cafeList.filter(item => item.id !== newData.id);
        setCafeList(deleteCafe);
        return () => (isSubscribed = false);
    };

    const updateList = (oldCafe, newCafe) => {
        let isSubscribed = true;

        const updateDb = db.collection("cafe").doc(newCafe.id);
        if (isSubscribed) {
            updateDb
                .set({
                    cafe: newCafe.cafe,
                    city: newCafe.city,
                    rating: newCafe.rating,
                    id: newCafe.id
                })
                .then(() => {
                    console.log("Update Did Successfull");
                })
                .catch(error => {
                    console.log("error", error);
                });
        }

        const newData = cafeList.map(
            place => (place === oldCafe ? newCafe : place)
        );
        setCafeList(newData);
        return () => (isSubscribed = false);
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
                <h1>Café Ranking</h1>
                <Input
                    cafeInput={value => setCafe(value)}
                    cityInput={value => setCity(value)}
                    ratingInput={value => setRating(value)}
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

                {!cafeList ? (
                    <div className="loader" />
                ) : cafeList.length === 0 ? (
                    <div className="oneTime">
                        Write something nice and have a nice day!
                    </div>
                ) : (
                    <ul>{showData()}</ul>
                )}
            </section>
        </div>
    );
};

export default CookieStore;
