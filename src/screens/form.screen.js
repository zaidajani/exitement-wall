import React from "react";
import Webcam from "react-webcam";
import { firebaseConfig } from "../firebase";
import { useNavigate } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/firestore";

firebase.initializeApp(
  firebaseConfig
);

const firestore = firebase.firestore();

export const FromPage = () => {
  const [img, setImg] = React.useState("");
  const messageRef = firestore.collection("Photos");
  const navigate = useNavigate();
  
  const postImage = async () => {
    await messageRef.add({
      text: img,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    alert("Posted");
    navigate("/gallery");
  }

  return (
    <>
      <div className="header">Take a picture to show your excitement.</div>
      <div className="bottom">
        {img ? (
          <>
            <img src={img} style={{
              marginBottom: "50px",
              marginTop: "50px"
            }} />
            <button
              className="button"
              onClick={postImage}
            >
              Post
            </button>
          </>
        ) : (
          <>
            <Webcam
              audio={false}
              height={720}
              screenshotFormat="image/jpeg"
              width={600}
            >
              {({ getScreenshot }) => (
                <button
                  className="button"
                  onClick={() => {
                    setImg(getScreenshot());
                    console.log(getScreenshot());
                  }}
                >
                  Capture photo
                </button>
              )}
            </Webcam>
          </>
        )}
      </div>
    </>
  );
};
