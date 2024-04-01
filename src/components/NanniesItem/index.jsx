import React, { useState } from "react";
import getFirstLetter from "../../utils/getFirstLetter";
import { Button } from "../Button";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/authSelectors";
import { togglePopUp } from "../../redux/appState/appStateSlice";
import {
  addToFavorite,
  removeFromFavorite,
} from "../../redux/favorite/favoriteSlice";
import sprite from "../../img/sprite.svg";
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

export const NanniesItem = ({ data, isFavorite }) => {
  const [isOpenMoreInfo, setIsOpenMoreInfo] = useState(false);

  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const {
    _id,
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

  const openPopUp = (popUp) => {
    dispatch(togglePopUp(popUp));
  };

  const handleAddToFavorite = () => {
    if (isLoggedIn) {
      dispatch(addToFavorite(data));
    }
    openPopUp("notAuthorized");
  };
  const handleRemoveFromFavorite = () => {
    dispatch(removeFromFavorite(_id));
  };

  return (
    <>
      <NanniesItemStyle>
        <NannieAvatarBox>
          <div className="status" />
          <img src={avatar_url} alt="Nannie avatar" className="avatar" />
        </NannieAvatarBox>
        {isFavorite ? (
          <AddToFavoriteBtnStyle
            className="btn-icon"
            onClick={handleRemoveFromFavorite}
            aria-label={isFavorite ? "remove from favorite" : "add to favorite"}
            $isFavorite={isFavorite}
          >
            <svg width={18} height={18} className="btn-icon">
              <use href={`${sprite}#icon-heart`}></use>
            </svg>
          </AddToFavoriteBtnStyle>
        ) : (
          <AddToFavoriteBtnStyle
            className="btn-icon"
            onClick={handleAddToFavorite}
            aria-label={isFavorite ? "remove from favorite" : "add to favorite"}
            $isFavorite={isFavorite}
          >
            <svg width={18} height={18} className="btn-icon">
              <use href={`${sprite}#icon-heart`}></use>
            </svg>
          </AddToFavoriteBtnStyle>
        )}
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
            <p className="text">{rating?.toFixed(1)}</p>
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
                <span className="value">{characters?.join(", ")}</span>
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
            {reviews?.map((r, i) => (
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
              onClick={() => openPopUp("order")}
              text="Make an appointment"
              mv_p="8px 16px"
              tv_p="14px 30px"
            />
          ) : (
            <ReadMoreBtnStyle onClick={() => setIsOpenMoreInfo(true)}>
              Read more
            </ReadMoreBtnStyle>
          )}
        </DetailInfoStyle>
      </NanniesItemStyle>
    </>
  );
};
