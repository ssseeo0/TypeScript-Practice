// 타입 별칭
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user1: User = {
  id: 1,
  name: "김서영",
  nickname: "seo0",
  birth: "2000.02.18",
  bio: "hi",
  location: "의정부시",
};

let user2: User = {
  id: 1,
  name: "김서영2",
  nickname: "seo02",
  birth: "2000.02.10",
  bio: "hi",
  location: "구리시",
};

// 인덱스 시그니처
type countryCodes = {
  [key: string]: string;
};

let countryCodes: countryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};

type countryNumberCodes = {
  [key: string]: number;
  Korea: number;
};

let countryNumberCodes: countryNumberCodes = {
  Korea: 410,
};
