import React, { useState } from "react";
import sprite from "../../img/sprite.svg";
import getFirstLetter from "../../utils/getFirstLetter";
import {
  AboutTextStyle,
  AddToFavoriteBtnStyle,
  BetweenDecorIconStyle,
  DetailInfoItemStyle,
  DetailInfoListStyle,
  DetailInfoStyle,
  NameBoxStyle,
  NannieAvatarBox,
  NanniesItemStyle,
  ReadMoreBtnStyle,
  ReviewerCommentBoxStyle,
  ReviewerInfoBoxStyle,
  ReviewsListStyle,
  WorkInfoItemStyle,
  WorkInfoStyle,
} from "./NanniesItem.styled";
import { Button } from "../Button";
import { DialogComponent } from "../DialogComponent";
import { OrderForm } from "../forms/OrderForm";

const age = (birthday) => {
  const birthDate = new Date(birthday);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
};

export const NanniesItem = ({ data }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isOpenMoreInfo, setIsOpenMoreInfo] = useState(false);
  const [isOpenPopUp, setIsOpenPopUp] = useState(false);
  const {
    name,
    avatar_url,
    birthday,
    experience,
    reviews,
    education,
    kids_age,
    price_per_hour,
    location,
    about,
    characters,
    rating,
  } = data;

  const handleToggleFavorite = () => {
    setIsFavorite((prev) => !prev);
  };

  return (
    <>
      <NanniesItemStyle>
        <NannieAvatarBox>
          <div className="status" />
          <img src={avatar_url} alt="Nannie avatar" className="avatar" />
        </NannieAvatarBox>
        <AddToFavoriteBtnStyle
          className="btn-icon"
          onClick={handleToggleFavorite}
          aria-label={isFavorite ? "remove from favorite" : "add to favorite"}
          $isFavorite={isFavorite}
        >
          <svg width={18} height={18} className="btn-icon">
            <use href={`${sprite}#icon-heart`}></use>
          </svg>
        </AddToFavoriteBtnStyle>
        <NameBoxStyle>
          <p className="occupation">Nanny</p>
          <h3 className="name">{name}</h3>
        </NameBoxStyle>
        <WorkInfoStyle>
          <WorkInfoItemStyle>
            <svg width={12} height={12} stroke="#11101C" className="icon">
              <use href={`${sprite}#icon-map-pin`}></use>
            </svg>
            <p className="text">{location}</p>
          </WorkInfoItemStyle>
          <BetweenDecorIconStyle />
          <WorkInfoItemStyle>
            <svg width={12} height={12} className="icon">
              <use href={`${sprite}#icon-star`}></use>
            </svg>
            <p className="text">Rating:</p>
            <p className="text">{rating.toFixed(1)}</p>
          </WorkInfoItemStyle>
          <BetweenDecorIconStyle />
          <WorkInfoItemStyle>
            <p className="text">Price / 1 hour:</p>
            <p className="text">
              <span className="price">{price_per_hour}$</span>
            </p>
          </WorkInfoItemStyle>
        </WorkInfoStyle>
        <DetailInfoStyle>
          <DetailInfoListStyle>
            <DetailInfoItemStyle>
              <p>
                Age: <span className="value age">{age(birthday)}</span>
              </p>
            </DetailInfoItemStyle>
            <DetailInfoItemStyle>
              <p>
                Experience: <span className="value">{experience}</span>
              </p>
            </DetailInfoItemStyle>
            <DetailInfoItemStyle>
              <p>
                Kids Age: <span className="value">{kids_age}</span>
              </p>
            </DetailInfoItemStyle>
            <DetailInfoItemStyle>
              <p>
                Characters:{" "}
                <span className="value">{characters.join(", ")}</span>
              </p>
            </DetailInfoItemStyle>
            <DetailInfoItemStyle>
              <p>
                Education:<span className="value"> {education}</span>
              </p>
            </DetailInfoItemStyle>
          </DetailInfoListStyle>
          <AboutTextStyle>{about}</AboutTextStyle>
          <ReviewsListStyle
            className={isOpenMoreInfo ? "show" : "visibility-hidden"}
          >
            {reviews.map((r, i) => (
              <li key={i}>
                <ReviewerInfoBoxStyle>
                  <p className="avatar">{getFirstLetter(r.reviewer)}</p>
                  <div>
                    <h3 className="name">{r.reviewer}</h3>
                    <p className="rating">
                      <svg width={12} height={12} className="rating-icon">
                        <use href={`${sprite}#icon-star`}></use>
                      </svg>
                      {r.rating.toFixed(1)}
                    </p>
                  </div>
                </ReviewerInfoBoxStyle>
                <ReviewerCommentBoxStyle>{r.comment}</ReviewerCommentBoxStyle>
              </li>
            ))}
          </ReviewsListStyle>
          {isOpenMoreInfo ? (
            <Button
              onClick={() => setIsOpenPopUp(true)}
              text="Make an appointment"
              mv_p="8px 16px"
              tv_p="14px 30px"
              bg="#F03F3B"
            />
          ) : (
            <ReadMoreBtnStyle onClick={() => setIsOpenMoreInfo(true)}>
              Read more
            </ReadMoreBtnStyle>
          )}
        </DetailInfoStyle>
      </NanniesItemStyle>
      {isOpenPopUp && (
        <DialogComponent
          open={isOpenPopUp}
          handleClose={() => setIsOpenPopUp(false)}
        >
          <OrderForm />
        </DialogComponent>
      )}
    </>
  );
};
