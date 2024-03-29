import { filterOptions } from "../../data/filterNannies";

export const initialState = {
  favoriteNannies: [
    {
      _id: "12345as",
      name: "Anna Shevchenko",
      avatar_url: "https://ftp.goit.study/img/avatars/23.jpg",
      birthday: "1996-04-10T22:25:57.010+00:00",
      experience: "5 years",
      reviews: [
        {
          reviewer: "Olga K.",
          rating: 5,
          comment:
            "Anna is wonderful! My kids loved her and she was always punctual.",
        },
        {
          reviewer: "Petr S.",
          rating: 4,
          comment:
            "She's great, but sometimes she had to reschedule on short notice.",
        },
      ],
      education: "Bachelor's in Early Childhood Education, First Aid Certified",
      kids_age: "1 to 6 years old",
      price_per_hour: 15,
      location: "Kyiv, Ukraine",
      about:
        "I love children and have been working with them for over 5 years. I believe in creating a positive and nurturing environment for kids. I also love outdoor activities and crafts.",
      characters: ["patient", "energetic", "creative", "punctual"],
      rating: 4.5,
    },
    {
      _id: "12w545",
      name: "Maria Kovalenko",
      avatar_url: "https://ftp.goit.study/img/avatars/10.jpg",
      birthday: "1991-04-10T22:25:57.010+00:00",
      experience: "7 years",
      reviews: [
        {
          reviewer: "Ivan D.",
          rating: 4.5,
          comment:
            "Maria is very caring and knows how to handle kids very well.",
        },
        {
          reviewer: "Lena R.",
          rating: 5,
          comment:
            "Maria has been a blessing for our family. Our children adore her!",
        },
      ],
      education: "Master's in Child Psychology, CPR Certified",
      kids_age: "6 months to 8 years old",
      price_per_hour: 16,
      location: "Lviv, Ukraine",
      about:
        "I have a passion for teaching and mentoring children. I aim to help them grow and learn in a safe and loving environment. I am also a trained child psychologist, which helps me in understanding and catering to the unique needs of every child.",
      characters: ["compassionate", "knowledgeable", "adaptive", "trustworthy"],
      rating: 4.75,
    },
  ],
  favoriteFilter: filterOptions[0],
};