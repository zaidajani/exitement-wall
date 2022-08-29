import React from "react";
import firebase from "firebase/app";
import "firebase/firestore";

const firestore = firebase.firestore();

export const Galery = () => {
  const photoref = firestore.collection("Photos");
  const [photoArrayState, setPhotoArray] = React.useState([]);

  photoref.orderBy("createdAt").onSnapshot((querySnapshot) => {
    let photoArray = [];
    querySnapshot.forEach((query) => {
      photoArray.push(query.data());
    })
    photoArray = photoArray.reverse();
    setPhotoArray(photoArray)
  })
  return (
    <>
      <div className="header">Photo wall</div>
      <div className="container">
        {
          photoArrayState.map((photo) => {
            return (
              <img className="review" src={photo.text} />
            )
          })
        }
      </div>
    </>
  );
}